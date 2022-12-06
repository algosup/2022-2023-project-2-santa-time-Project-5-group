FROM httpd:2.4

RUN apt-get update && apt-get upgrade -y

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /usr/local/apache2/conf/privkey.pem -out /usr/local/apache2/conf/fullchain.pem -subj "/C=FR/ST=Paris/L=Paris/O=42/OU=42/CN=xmas.algosup.com"

COPY ./src/ /usr/local/apache2/htdocs/

COPY ./apache/httpd.conf /usr/local/apache2/conf/

EXPOSE 80
EXPOSE 443