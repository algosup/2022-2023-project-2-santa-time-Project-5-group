FROM nginx:1.23

COPY ./src ./usr/share/nginx/html

EXPOSE 80
