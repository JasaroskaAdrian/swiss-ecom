-- *************************************************************************************************************
-- * 00005_roles_e.sql                                                                        (c) Gligar **
-- *                                                                                                          **
-- * Creation of the Roles Table for the customers and users of the application                                               **
-- *                                                                                                          **
-- *************************************************************************************************************
-- * Date        Author(s)   Comment                                                                           *
-- * ----------  ----------  --------------------------------------------------------------------------------- *
-- * 27.01.2026  AJAS        Created                                                                           *
-- *************************************************************************************************************
DROP TABLE IF EXISTS roles_e;

CREATE TABLE IF NOT EXISTS roles_e (
    role_id         INT          NOT NULL AUTO_INCREMENT
   ,role_cd         VARCHAR(15)  NOT NULL UNIQUE
   ,write_perm      BOOLEAN      NOT NULL
   ,read_perm       BOOLEAN      NOT NULL
   ,update_perm     BOOLEAN      NOT NULL
   ,delete_perm     BOOLEAN      NOT NULL
   ,created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
   ,created_by      INT          NOT NULL
   ,updated_at      TIMESTAMP
   ,updated_by      INT
   ,PRIMARY KEY(role_id)
);