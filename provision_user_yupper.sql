testing-- Provisioning a new user "yupper" for the Yup db
-- https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql
-- "...IDENTIFIED BY '***';" (doesn't work for mysql > 8;
CREATE USER 'yupper'@'localhost' IDENTIFIED WITH mysql_native_password BY '***'; 
GRANT ALL PRIVILEGES ON Yup . * TO 'yupper'@'localhost';
FLUSH PRIVILEGES;