FROM nginxinc/nginx-unprivileged:1-alpine
LABEL maintainer="brandtechgroup.com"

COPY ./default.conf.tpl /etc/nginx/default.conf.tpl
COPY ./ssl.conf.tpl /etc/nginx/ssl.conf.tpl
COPY ./uwsgi_params /etc/nginx/uwsgi_params
COPY ./run.sh /run.sh

ENV LISTEN_PORT=8000
ENV LISTEN_PORT_SSL=443
ENV APP_HOST=app
ENV APP_PORT=9000
ENV APP_DOMAIN='admin-staging.maltalovers.com'

USER root

RUN mkdir -p /usr/src/app/static && \
    chmod 755 /usr/src/app/static && \
    touch /etc/nginx/conf.d/default.conf && \
    chown nginx:nginx /etc/nginx/conf.d/default.conf && \
    chmod +x /run.sh

VOLUME /usr/src/app/static

USER nginx

CMD ["/run.sh"]