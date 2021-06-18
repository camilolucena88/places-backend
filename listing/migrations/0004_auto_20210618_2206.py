# Generated by Django 3.2.4 on 2021-06-18 22:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('listing', '0003_business_sector'),
    ]

    operations = [
        migrations.AddField(
            model_name='business',
            name='created_by',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='business',
            name='account_type',
            field=models.SmallIntegerField(choices=[(0, 'Business with Listings'), (1, 'Service Provider'), (2, 'Influencer')], verbose_name='Account Type'),
        ),
        migrations.AlterField(
            model_name='business',
            name='business_type',
            field=models.SmallIntegerField(choices=[(0, 'Registered Single Business'), (0, 'Registered Multiple Business'), (1, 'Self-Employed'), (2, 'Individual - Taxes on personal income'), (3, 'Non-profit Organization'), (4, 'Government Organization'), (5, 'Private Organization'), (5, 'Public Organization')], verbose_name='Business Type'),
        ),
    ]
