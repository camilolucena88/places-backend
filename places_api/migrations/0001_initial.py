# Generated by Django 3.2.3 on 2021-05-16 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PlacesRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('request', models.JSONField(blank=True, null=True, verbose_name='Request')),
                ('response', models.JSONField(blank=True, null=True, verbose_name='Response')),
                ('status', models.IntegerField(blank=True, null=True, verbose_name='Status')),
                ('error', models.TextField(blank=True, null=True, verbose_name='Error')),
                ('ip', models.GenericIPAddressField(blank=True, null=True, verbose_name='IP')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]