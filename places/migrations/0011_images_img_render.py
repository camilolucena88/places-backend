# Generated by Django 3.2.3 on 2021-06-10 13:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0023_add_choose_permissions'),
        ('places', '0010_auto_20210610_1313'),
    ]

    operations = [
        migrations.AddField(
            model_name='images',
            name='img_render',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='wagtailimages.image'),
        ),
    ]
