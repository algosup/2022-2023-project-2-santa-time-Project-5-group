FROM nginx:1.23

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y certbot python3-certbot-nginx

COPY ./src ./usr/share/nginx/html
#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY script/setup.sh /script.sh
RUN chmod +x /script.sh

RUN cat /etc/nginx/nginx.conf
RUN nginx -t

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;", "sh", "/script.sh;"]
