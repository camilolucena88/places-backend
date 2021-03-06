# Generated by Django 3.2.3 on 2021-06-01 05:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('places', '0005_alter_likes_place'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bookmark',
            options={'ordering': ('created_at',), 'verbose_name': 'Bookmark', 'verbose_name_plural': 'Bookmarks'},
        ),
        migrations.AlterModelOptions(
            name='comments',
            options={'ordering': ('created_at',), 'verbose_name': 'Comment', 'verbose_name_plural': 'Comments'},
        ),
        migrations.AlterModelOptions(
            name='likes',
            options={'ordering': ('created_at',), 'verbose_name': 'Like', 'verbose_name_plural': 'Likes'},
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='created_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bookmark_user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='comments',
            name='created_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_comments', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='comments',
            name='place',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='places_comment', to='places.places'),
        ),
        migrations.AlterField(
            model_name='images',
            name='img',
            field=models.FileField(upload_to='files/notifications', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='likes',
            name='comment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comment_like', to='places.comments'),
        ),
        migrations.AlterField(
            model_name='likes',
            name='created_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_likes', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterUniqueTogether(
            name='bookmark',
            unique_together={('place', 'created_by')},
        ),
        migrations.AlterUniqueTogether(
            name='likes',
            unique_together={('place', 'created_by')},
        ),
    ]
