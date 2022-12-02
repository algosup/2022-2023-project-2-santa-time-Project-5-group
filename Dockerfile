FROM nginx:1.23

RUN apt-get update && apt-get upgrade -y



#COPY ./nginx.conf /etc/nginx/nginx.conf
# Install certbot

RUN apt-get install -y certbot python3-certbot-nginx

# Set certifcate

COPY ./src ./usr/share/nginx/html

EXPOSE 80

#ENTRYPOINT ["/docker-entrypoint.sh"]
#CMD ["nginx", "-g", "daemon off;", "certbot", "--nginx", "--non-interactive", "--agree-tos", "--domains", "xmas.algosup.com", "--email", "franck.jeannin@algosup.com;"]