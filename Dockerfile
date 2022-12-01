FROM nginx:1.23

RUN apt-get update && apt-get upgrade -y

#COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./src ./usr/share/nginx/html

EXPOSE 80

