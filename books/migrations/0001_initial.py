# Generated by Django 3.2.23 on 2024-05-16 20:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('profileModel', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('img', models.ImageField(default='default-book-cover.jpg', upload_to='books')),
                ('author_name', models.CharField(max_length=50)),
                ('about_author', models.TextField()),
                ('category', models.CharField(default='no category', max_length=50, null=True)),
                ('is_trending', models.BooleanField(default=False)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='profileModel.profilemodel')),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
    ]