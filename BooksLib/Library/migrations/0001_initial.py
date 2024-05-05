# Generated by Django 5.0.4 on 2024-05-05 05:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SingleBookModel',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('book_name', models.CharField(max_length=100)),
                ('book_description', models.TextField()),
                ('author_id', models.IntegerField()),
                ('author_name', models.CharField(max_length=100)),
                ('about_author', models.TextField()),
                ('category', models.CharField(max_length=100)),
                ('brrowed_date', models.DateField()),
                ('user_name', models.CharField(max_length=100)),
                ('useer_id', models.IntegerField()),
                ('image', models.ImageField(upload_to='images/')),
            ],
        ),
    ]
