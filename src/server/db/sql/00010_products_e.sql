-- *************************************************************************************************************
-- * 00004_products.sql                                                                            (c) Gligar **
-- *                                                                                                          **
-- * Creation of the Products Table                                                                           **
-- *                                                                                                          **
-- *************************************************************************************************************
-- * Date        Author(s)   Comment                                                                           *
-- * ----------  ----------  --------------------------------------------------------------------------------- *
-- * 27.01.2026  AJAS        Created                                                                           *
-- *************************************************************************************************************
DROP TABLE IF EXISTS products_e;

CREATE TABLE products_e (
    product_id      INT          NOT NULL AUTO_INCREMENT
   ,product_cd      VARCHAR(70)  NOT NULL UNIQUE
   ,cd_grp          VARCHAR(8)   NOT NULL
   ,created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
   ,created_by      INT          NOT NULL
   ,updated_at      TIMESTAMP
   ,updated_by      INT
);