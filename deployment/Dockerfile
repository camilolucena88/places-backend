FROM python:3.9-alpine3.13

ENV PYTHONUNBUFFERED 1

COPY requirements.txt ./
COPY ./scripts /scripts

WORKDIR /usr/src/app
EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install --upgrade wheel && \
    apk add --update --no-cache postgresql-client && \
    apk add jpeg-dev zlib-dev libjpeg && \
    apk add --update --no-cache --virtual .tmp-deps \
        build-base postgresql-dev musl-dev libc-dev gcc linux-headers && \
    /py/bin/pip install Pillow && \
    /py/bin/pip install -r /requirements.txt && \
    apk del .tmp-deps && \
    adduser --disabled-password --no-create-home app && \
    mkdir -p /static && \
    mkdir -p /media && \
    chown -R app:app /media && \
    chown -R app:app /static && \
    chmod -R 755 /media && \
    chmod -R 755 /static && \
    chmod -R +x /scripts

ENV PATH="/scripts:/py/bin:$PATH"

USER app

CMD ["run.sh"]