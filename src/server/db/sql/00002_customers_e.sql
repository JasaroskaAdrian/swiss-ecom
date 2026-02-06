-- *************************************************************************************************************
-- * 00002_customers.sql                                                                       (c) swiss-ecom **
-- *                                                                                                          **
-- * Stammdaten - Tabellen Erstellung customers_e                                                             **
-- *                                                                                                          **
-- *************************************************************************************************************
-- * Date        Author(s)   Comment                                                                           *
-- * ----------  ----------  --------------------------------------------------------------------------------- *
-- * 24.09.2025  AJAS        Created - Added Fields customer_id, username, email, password_hash, first_name    *
-- *                         last_name, role, is_active, created_at, updated_at                                *
-- * 27.01.2026  AJAS        Modified SQL Script because change in Database to MariaDB                         *
-- *************************************************************************************************************
DROP TABLE IF EXISTS customers_e;

CREATE TABLE IF NOT EXISTS customers_e ( 
    customer_id     INT          NOT NULL AUTO_INCREMENT
   ,username        VARCHAR(255) NOT NULL UNIQUE
   ,email           VARCHAR(320) NOT NULL UNIQUE
   ,phone           VARCHAR(30)  UNIQUE
   ,password        VARCHAR(128) NOT NULL
   ,first_name      VARCHAR(70)  NOT NULL
   ,last_name       VARCHAR(70)  NOT NULL
   ,address_id      INT          NOT NULL
   ,role_id         INT          NOT NULL
   ,is_active       BOOLEAN      NOT NULL DEFAULT TRUE
   ,created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
   ,created_by      INT          NOT NULL
   ,updated_at      TIMESTAMP
   ,updated_by      INT
   ,PRIMARY KEY(customer_id)
   ,FOREIGN KEY(address_id) REFERENCES address_e(address_id)
   ,FOREIGN KEY(role_id)    REFERENCES roles_e(role_id)
);