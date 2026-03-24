datetime=$(date '+%Y-%m-%d_%H-%M-%S')

chmod +x /home/adi/Desktop/sqldump.sh

mysqldump -h localhost -u dbeaver -p'StrongPassword123!' onlineshopTest > "/home/adi/Desktop/dump/${datetime}_backup_gligar.sql"