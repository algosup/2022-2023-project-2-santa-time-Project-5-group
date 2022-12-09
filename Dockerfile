FROM httpd:2.4

RUN apt-get update && apt-get upgrade -y

COPY ./src/ /usr/local/apache2/htdocs/

COPY ./script.sh /
RUN chmod +x /script.sh

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;", "sh", "/script.sh;"]