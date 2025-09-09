-- *************************************************************************************************************
-- * 00001_users.sql                                                                           (c) swiss-ecom **
-- *                                                                                                          **
-- * Erstellen der Tabelle für die Benutzer des WebApps, nicht die Kunden!                                    **
-- *                                                                                                          **
-- *************************************************************************************************************
-- * Date        Author(s)   Comment                                                                           *
-- * ----------  ----------  --------------------------------------------------------------------------------- *
-- * 08.09.2025  AJAS        Created - Added Fields user_id, first_name, last_name, email and password         *
-- *************************************************************************************************************

CREATE TABLE IF NOT EXISTS users (
    user_id NUMBER 
   ,first_name VARCHAR2(20)
   ,last_name VARCHAR2(20)
   ,email VARCHAR2(30)
   ,password VARCHAR2(50) 
)
    