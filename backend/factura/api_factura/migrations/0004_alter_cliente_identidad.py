# Generated by Django 3.2.4 on 2022-03-17 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_factura', '0003_alter_cliente_identidad'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='identidad',
            field=models.CharField(max_length=13),
        ),
    ]
