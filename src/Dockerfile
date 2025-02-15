FROM php:8.1-apache

COPY . /var/www/html/

RUN a2enmod rewrite

RUN echo "AddType application/x-httpd-php .html .htm" >> /etc/apache2/conf-enabled/php.conf

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80