server {
    listen *:8443 ssl;
    server_name         ${APP_DOMAIN};
    ssl_certificate     certs/app_maltalovers.pem;
    ssl_certificate_key certs/app_maltalovers.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    location /static {
       alias /usr/src/app/static;
    }

    location /media {
      alias /usr/src/app/media/;
    }

    location / {
        uwsgi_pass              ${APP_HOST}:${APP_PORT};
        include                 /etc/nginx/uwsgi_params;
        client_max_body_size    10M;
    }
}