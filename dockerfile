FROM nginx:1.23

COPY ./src ./usr/share/nginx/html

RUN cat /etc/nginx/nginx.conf

EXPOSE 80
