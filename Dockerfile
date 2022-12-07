FROM nginx:1.23

RUN apt-get update && apt-get upgrade -y

RUN mkdir -p /etc/letsencrypt/live/xmas.algosup.com
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/letsencrypt/live/xmas.algosup.com/privkey.pem -out /etc/letsencrypt/live/xmas.algosup.com/fullchain.pem -subj "/C=FR/ST=Paris/L=Paris/O=42/OU=42/CN=xmas.algosup.com"

COPY ./src ./usr/share/nginx/html
COPY ./nginx/options-ssl-nginx.conf /etc/letsencrypt/options-ssl-nginx.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

#ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
#, "certbot", "--nginx", "--non-interactive", "--agree-tos", "--domains", "xmas.algosup.com", "--email", "franck.jeannin@algosup.com;"]