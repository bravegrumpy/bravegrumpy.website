# syntax=docker/dockerfile:1

FROM php:8.3-apache

COPY . /var/www/html

RUN "mv var/www/html/htpd.conf etc/apache2/sites-available/000-default.conf"

# RUN "cp php.ini /usr/local/lib/php/php.ini"

EXPOSE 8000