# Generated by Django 4.0.3 on 2023-01-20 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='locationvo',
            name='closet_name',
            field=models.CharField(max_length=100, null=True, unique=True),
        ),
    ]
