# Use the official MySQL image from Docker Hub
FROM mysql:latest

# Set the MySQL root password (replace 'your_password' with your desired password)
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=bolsiyo

RUN echo "bind-address = 0.0.0.0" >> /etc/mysql/conf.d/mysql.cnf

# Expose the default MySQL port
EXPOSE 3306