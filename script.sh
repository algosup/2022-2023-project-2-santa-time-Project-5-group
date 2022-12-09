# Check if the script is run as root
# Setup environment variables
env_website = "xmas.algosup.com"
env_mail    = "frje@algosup.com"

# Update the package manager
apt-get update && apt-get upgrade -y

# Install the required packages
apt install vim net-tools wget curl ntp screen bash-completion zip unzip htop nmap nload ntpdate screen ntp ntpdate apt-transport-https dirmngr lsb-release mailutils software-properties-common -y
apt install apache2 apache2-utils -y

mkdir /var/www/$env_website

# Create the basic apache2 conf file for the website
echo "
<VirtualHost *:80>
    ServerName $env_website
    ServerAlias www.$env_website
    ServerAdmin $env_mail
    DocumentRoot /var/www/$env_website
</VirtualHost>

<IfModule mod_ssl.c>
    <VirtualHost *:443>
        ServerAlias www.$env_website
        ServerAdmin $env_mail
        DocumentRoot /var/www/$env_website

        <Directory /var/www/$env_website>
            Require all granted
            Options -Indexes +FollowSymlinks +MultiViews
            AllowOverride All
        </Directory>

        ErrorLog /var/log/apache2/$env_website-error.log
        LogLevel warn
        CustomLog /var/log/apache2/access.log Combined
    </VirtualHost>
</IfModule>
" > /etc/apache2/sites-available/$env_website.conf

# Activate VHost and restart apache2
a2ensite $env_website.conf
a2dissite 000-default.conf
/etc/init.d/apache2 restart

# It should be installed already in perfect image
# Install PHP
wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" |tee /etc/apt/sources.list.d/php.list
apt-get update
apt-get install php7.4 -y
apt-get install php7.4-{common,bcmath,bz2,intl,gd,mbstring,mysql,zip,cli,json,pdo,mbstring,curl,xml,imagick,tidy,xmlrpc,dev,imap,opcache,soap} -y
# Install MariaDB
apt-get install mariadb-server -y

# Install Let's Encrypt
apt install snapd -y
snap install core
snap refresh core
snap install --classic certbot

# Create a symbolic link to certbot
ln -s /snap/bin/certbot /usr/bin/certbot

# Generate the SSL certificate for the website and enable auto-renewal
certbot --apache --non-interactive --agree-tos --domains $env_website --email $env_mail