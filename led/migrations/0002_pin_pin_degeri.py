# Generated by Django 2.2.7 on 2020-01-16 22:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('led', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pin',
            name='pin_degeri',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
    ]
