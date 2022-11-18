FROM nginx:1.23

COPY ./web ./usr/share/nginx/html

EXPOSE 80

