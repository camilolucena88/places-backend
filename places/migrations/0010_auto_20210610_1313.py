# Generated by Django 3.2.3 on 2021-06-10 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0009_auto_20210610_1246'),
    ]

    operations = [
        migrations.AddField(
            model_name='images',
            name='img_feature',
            field=models.ImageField(default='', upload_to='listings/images'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='images',
            name='img',
            field=models.FileField(upload_to='files/notifications', verbose_name='Image'),
        ),
    ]
