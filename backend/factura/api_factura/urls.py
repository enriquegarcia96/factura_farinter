from django.urls import path


from .views import Productos, RegistroCliente, ClientesGet, Producto

# url de la aplicacion
urlpatterns = [

    path('buscar/<str:id>', RegistroCliente.as_view(), name='registro'),
    path('clientes', ClientesGet.as_view(), name='clientes'),
    path('productos', Productos.as_view(), name='productos')

]
