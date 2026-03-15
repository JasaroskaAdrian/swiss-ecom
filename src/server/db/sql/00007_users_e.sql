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

DROP TABLE IF EXISTS users_e;

CREATE TABLE IF NOT EXISTS users_e (
    user_id         INT          NOT NULL AUTO_INCREMENT        
   ,username        VARCHAR(255) NOT NULL UNIQUE
   ,email           VARCHAR(320) NOT NULL UNIQUE
   ,password        VARCHAR(128) NOT NULL
   ,first_name      VARCHAR(70)  NOT NULL
   ,last_name       VARCHAR(70)  NOT NULL
   ,role            INT          NOT NULL 
   ,is_active       BOOLEAN      NOT NULL DEFAULT TRUE 
   ,created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
   ,created_by      INT          NOT NULL
   ,updated_at      TIMESTAMP
   ,updated_by      INT
);