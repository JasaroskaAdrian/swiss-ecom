-- *************************************************************************************************************
-- * 00002_customers.sql                                                                                            (c) swiss-ecom **
-- *                                                                                                          **
-- * Kunden der WebApp                                                                                        **
-- *                                                                                                          **
-- *************************************************************************************************************
-- * Date        Author(s)   Comment                                                                           *
-- * ----------  ----------  --------------------------------------------------------------------------------- *
-- * 24.09.2025  AJAS        Created - Added Fields customer_id, username, email, password_hash, first_name    *   
-- *                         last_name, role, is_active, created_at, updated_at                                *
-- *************************************************************************************************************

-- Case-insensitivity text for username and email 
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE IF NOT EXISTS customers_e ( 
    customer_id       BIGSERIAL   PRIMARY KEY
   ,customer_username CITEXT      NOT NULL
   ,email             CITEXT      NOT NULL
   ,password_hash     TEXT        NOT NULL
   ,first_name        TEXT        NOT NULL
   ,last_name         TEXT        NOT NULL
   ,role              TEXT        NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'user', 'mod', 'admin'))
   ,is_active         BOOLEAN     NOT NULL DEFAULT TRUE 
   ,created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
   ,updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()  
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