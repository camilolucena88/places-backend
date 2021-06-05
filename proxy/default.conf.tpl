server {
    listen ${LISTEN_PORT};

    location /static {
        alias /usr/src/app/static;
    }

    location / {
        uwsgi_pass              ${APP_HOST}:${APP_PORT};
        include                 /etc/nginx/uwsgi_params;
        client_max_body_size    10M;
    }
}

include /etc/nginx/conf.d/ssl.conf;
