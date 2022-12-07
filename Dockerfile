FROM nginx:1.23

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y certbot python3-certbot-nginx
RUN certbot --nginx -d xmas.algosup.com -d www.xmas.algosup.com -m paul.marisoumary@algosup.com --non-interactive --agree-tos


COPY ./src ./usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

#ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
#, "certbot", "--nginx", "--non-interactive", "--agree-tos", "--domains", "xmas.algosup.com", "--email", "franck.jeannin@algosup.com;"]