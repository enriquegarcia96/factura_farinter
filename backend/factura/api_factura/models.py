from django.db import models

# Create your models here.
class Cliente(models.Model):
    identidad = models.CharField(max_length=13)
    nombre_completo = models.CharField(max_length=30)
    direccion = models.CharField(max_length=45)
class Impuestos(models.Model):
    nombre = models.CharField(max_length=25)
    valor = models.DecimalField
    estado = models.CharField(max_length=1)
    telefono = models.CharField(max_length=8)

class Factura(models.Model):
    cliente_identidad  = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    impuestos_id = models.ForeignKey(Impuestos, on_delete=models.CASCADE)
    fecha = models.DateField(auto_now_add=True)
    total = models.DecimalField(max_digits=6, decimal_places=2, null=True)


class Descuentos(models.Model):
    nombre = models.CharField(max_length=25)
    valor = models.DecimalField


class Factura_descuentos(models.Model):
    factura_numero_factura = models.ForeignKey(Factura, on_delete=models.CASCADE)
    descuentos_id = models.ForeignKey(Descuentos, on_delete=models.CASCADE)
    estado = models.CharField(max_length=1)


class Categoria(models.Model):
    nombre = models.CharField(max_length=25)
    descripcion = models.CharField(max_length=45)

class Producto(models.Model):
    categoria_id = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    precio_venta = models.DecimalField
    nombre_producto = models.CharField(max_length=45)
    fecha_elaboracion = models.DateField(auto_now_add=False)
    fecha_vencimiento  = models.DateField(auto_now_add=False)

class Factura_detalle(models.Model):
    factura_numero_factura = models.ForeignKey(Factura, on_delete=models.CASCADE)
    producto_id = models.ForeignKey(Producto, on_delete=models.CASCADE)