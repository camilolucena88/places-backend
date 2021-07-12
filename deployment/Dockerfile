FROM python:3.9-slim

ENV PYTHONUNBUFFERED 1

COPY requirements.txt ./
COPY ./scripts /scripts

WORKDIR /usr/src/app
EXPOSE 8000

RUN apt-get update && \
    python -m venv /py && \
    apt-get -y install postgresql && \
    apt-get install -y python-psycopg2 && \
    apt-get install -y libpq-dev && \
    apt-get install -y python3-dev && \
    apt-get install -y gcc && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install --upgrade wheel && \
    /py/bin/pip install Pillow && \
    /py/bin/pip install -r /requirements.txt && \
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