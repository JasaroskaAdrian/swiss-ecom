-- *************************************************************************************************************
-- * 00003_categories_e.sql                                                                        (c) Gligar **
-- *                                                                                                          **
-- * Creation of the Categories Table for the products of the application                                               **
-- *                                                                                                          **
-- *************************************************************************************************************
-- * Date        Author(s)   Comment                                                                           *
-- * ----------  ----------  --------------------------------------------------------------------------------- *
-- * 27.01.2026  AJAS        Created                                                                           *
-- *************************************************************************************************************
DROP TABLE IF EXISTS categories_e;

CREATE TABLE IF NOT EXISTS categories_e (
    category_id     INT          NOT NULL AUTO_INCREMENT
   ,category_cd     INT          NOT NULL UNIQUE
   ,cd_grp          VARCHAR(8)   NOT NULL
   ,created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
   ,created_by      INT          NOT NULL
   ,updated_at      TIMESTAMP
   ,updated_by      INT
);