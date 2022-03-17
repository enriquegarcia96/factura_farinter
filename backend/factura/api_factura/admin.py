from django.contrib import admin

from .models import Cliente, Categoria , Factura,Descuentos, Factura_descuentos,Factura_detalle, Impuestos, Producto

# Register your models here.
admin.site.register(Cliente)
admin.site.register(Factura)
admin.site.register(Producto)
admin.site.register(Descuentos)
admin.site.register(Factura_descuentos)
admin.site.register(Factura_detalle)
admin.site.register(Categoria)
admin.site.register(Impuestos)