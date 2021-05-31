# Generated by Django 3.2.3 on 2021-05-17 04:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0003_auto_20210516_0952'),
    ]

    operations = [
        migrations.AlterField(
            model_name='likes',
            name='place',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='places.places'),
        ),
        migrations.AlterField(
            model_name='places',
            name='genres',
            field=models.ManyToManyField(blank=True, null=True, related_name='places_genres', to='places.Genres'),
        ),
    ]