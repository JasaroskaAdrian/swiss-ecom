-- *************************************************************************************************************
-- * 00001_users.sql                                                                           (c) swiss-ecom **
-- *                                                                                                          **
-- * Benutzer der WebApp (nicht Kunden)                                                                       **
-- *                                                                                                          **
-- *************************************************************************************************************
-- * Date        Author(s)   Comment                                                                           *
-- * ----------  ----------  --------------------------------------------------------------------------------- *
-- * 08.09.2025  AJAS        Created - Added Fields user_id, first_name, last_name, email and password         *
-- * 09.09.2025  AJAS        Changed - Added Fields (rolem is_active, created_at, updated_at)                  *
-- *                         | from NUMBER and VARCHAR2 to BIGSERIAL and CITXT and TXT (Oracle Syntax to PGSQL)*
-- *                         | Added NOT NULL Constr and PRIMARY KEY to user_id                                *
-- *                         | Added Unique Constraints to username and email                                  *
-- *                         | Added Function set_updated_at() for updating the time when updated gets Mutated *
-- *************************************************************************************************************

-- Case-insensitivity text for username and email 
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE IF NOT EXISTS users (
    user_id       BIGSERIAL PRIMARY KEY
   ,username      CITEXT      NOT NULL
   ,email         CITEXT      NOT NULL
   ,password_hash TEXT        NOT NULL
   ,first_name    TEXT        NOT NULL
   ,last_name     TEXT        NOT NULL
   ,role          TEXT        NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'mod', 'admin'))
   ,is_active     BOOLEAN     NOT NULL DEFAULT TRUE 
   ,created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
   ,updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()  
);
-- Uniqueness Contraint in Email and Username
ALTER TABLE users
    ADD CONSTRAINT users_username_uniq_k UNIQUE (username)
   ,ADD CONSTRAINT users_email_uniq_k    UNIQUE (email)

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at := now();
    RETURN NEW;
END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS users_set_updated_at ON users;
CREATE TRIGGER users_set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION set_updated_at();