# Generated by Django 3.2.3 on 2021-05-17 04:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0004_auto_20210517_0430'),
    ]

    operations = [
        migrations.AlterField(
            model_name='likes',
            name='place',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='places_like', to='places.places'),
        ),
    ]