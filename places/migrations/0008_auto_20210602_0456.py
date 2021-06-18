# Generated by Django 3.2.3 on 2021-06-02 04:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('places', '0007_alter_comments_parent'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='likes',
            name='comment',
        ),
        migrations.RemoveField(
            model_name='likes',
            name='type',
        ),
        migrations.CreateModel(
            name='CommentLikes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('comment', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comment_like', to='places.comments')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_comment_likes', to=settings.AUTH_USER_MODEL)),
                ('place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='places_comment_like', to='places.places')),
            ],
            options={
                'verbose_name': 'CommentLike',
                'verbose_name_plural': 'CommentLikes',
                'ordering': ('created_at',),
                'unique_together': {('created_by', 'comment')},
            },
        ),
    ]