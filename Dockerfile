FROM php:8.1-apache

# Enable Apache modules
RUN a2enmod rewrite

# Configure Apache
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Configure PHP handling for HTML files
RUN echo "<FilesMatch \".+\\.html$\">" >> /etc/apache2/conf-enabled/php.conf && \
    echo "    SetHandler application/x-httpd-php" >> /etc/apache2/conf-enabled/php.conf && \
    echo "</FilesMatch>" >> /etc/apache2/conf-enabled/php.conf

# Create and set permissions for web root
WORKDIR /var/www/html
RUN rm -rf /var/www/html/*

# Copy src contents
COPY src/ /var/www/html/

# Set ownership and permissions
RUN chown -R www-data:www-data /var/www/html && \
    find /var/www/html -type d -exec chmod 755 {} \; && \
    find /var/www/html -type f -exec chmod 644 {} \;

# Create a test index if none exists
RUN if [ ! -f /var/www/html/index.html ]; then \
    echo '<?php echo "<h1>PHP is working!</h1>"; ?>' > /var/www/html/index.html; \
    fi

# List contents of web root for verification
RUN ls -la /var/www/html

EXPOSE 80

CMD ["apache2-foreground"]