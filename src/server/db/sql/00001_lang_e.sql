-- *************************************************************************************************************
-- * 00021_lang_e.sql                                                                         (c) Gligar **
-- *                                                                                                          **
-- * Creation of the Table Language for the Languages of the application                                         **
-- *                                                                                                          **
-- *************************************************************************************************************
-- * Date        Author(s)   Comment                                                                           *
-- * ----------  ----------  --------------------------------------------------------------------------------- *
-- * 28.01.2026  AJAS        Created                                                                           *
-- *************************************************************************************************************
DROP TABLE IF EXISTS lang_e;

CREATE TABLE IF NOT EXISTS lang_e (
    lang_id         VARCHAR(1)   NOT NULL
   ,cd_txt_en       VARCHAR(70)  UNIQUE
   ,cd_txt_de       VARCHAR(70)  UNIQUE
   ,cd_txt_fr       VARCHAR(70)  UNIQUE
   ,cd_txt_it       VARCHAR(70)  UNIQUE
   ,created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
   ,created_by      INT          NOT NULL
   ,updated_at      TIMESTAMP
   ,updated_by      INT
   ,PRIMARY KEY(lang_id)
   ,FOREIGN KEY(spr_cd) REFERENCES lang_e(lang_id)
);