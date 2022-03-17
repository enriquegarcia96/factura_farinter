from django.db import models

# Create your models here.
class Cliente(models.Model):
    identidad = models.CharField(max_length=13)
    nombre_completo = models.CharField(max_length=30)
    direccion = models.CharField(max_length=45)
    telefono = models.CharField(max_length=8)
