# Generated by Django 3.2.4 on 2021-07-04 17:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0002_alter_listing_created_by'),
    ]

    operations = [
        migrations.CreateModel(
            name='OpeningHours',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weekday', models.IntegerField(choices=[(1, 'Monday'), (2, 'Tuesday'), (3, 'Wednesday'), (4, 'Thursday'), (5, 'Friday'), (6, 'Saturday'), (7, 'Sunday')], verbose_name='Weekday')),
                ('from_hour', models.TimeField(verbose_name='Opening')),
                ('to_hour', models.TimeField(verbose_name='Closing')),
                ('listing', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='listing.listing')),
            ],
            options={
                'verbose_name': 'Opening Hours',
                'verbose_name_plural': 'Opening Hours',
                'ordering': ['listing', 'weekday', 'from_hour'],
                'unique_together': {('listing', 'weekday')},
            },
        ),
    ]