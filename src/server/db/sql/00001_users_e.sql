-- *************************************************************************************************************
-- * 00001_users.sql                                                                           (c) swiss-ecom **
-- *                                                                                                          **
-- * Benutzer der WebApp (nicht Kunden)                                                                       **
-- *                                                                                                          **
-- *************************************************************************************************************
-- * Date        Author(s)   Comment                                                                           *
-- * ----------  ----------  --------------------------------------------------------------------------------- *
-- * 08.09.2025  AJAS        Created                                                                           *
-- * 09.09.2025  AJAS        Changed - Added Fields (role, is_active, created_at, updated_at)                  *
-- *                         | from NUMBER and VARCHAR2 to BIGSERIAL and CITXT and TXT (Oracle Syntax to PGSQL)*
-- *                         | Added NOT NULL Constr and PRIMARY KEY to user_id                                *
-- *                         | Added Unique Constraints to username and email                                  *
-- *                         | Added Function set_updated_at() for updating the time when updated gets Mutated *
-- * 07.10.2025  AJAS        Changed - role removed CHECK IN, Reason: Creating a Roles table and               *
-- *                         | removed DEFAULT 4 but need to add as soon as roles Table is created and seeded  *
-- *************************************************************************************************************

-- Case-insensitivity text for username and email 
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE IF NOT EXISTS users_e (
    user_id       BIGSERIAL   PRIMARY KEY
   ,username      CITEXT      NOT NULL
   ,email         CITEXT      NOT NULL
   ,password_hash TEXT        NOT NULL
   ,first_name    TEXT        NOT NULL
   ,last_name     TEXT        NOT NULL
   ,role          BIGINT      NOT NULL 
   ,is_active     BOOLEAN     NOT NULL DEFAULT TRUE 
   ,created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
   ,updated_at    TIMESTAMPTZ DEFAULT now()
);
-- Uniqueness Contraint in Email and Username
ALTER TABLE users_e
    ADD CONSTRAINT users_username_uniq_k UNIQUE (username)
   ,ADD CONSTRAINT users_email_uniq_k    UNIQUE (email);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at := now();
    RETURN NEW;
END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS users_set_updated_at ON users_e;
CREATE TRIGGER users_set_updated_at
BEFORE UPDATE ON users_e
FOR EACH ROW EXECUTE FUNCTION set_updated_at();