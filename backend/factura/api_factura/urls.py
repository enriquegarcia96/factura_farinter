from django.urls import path


from .views import RegistroCliente

# url de la aplicacion
urlpatterns = [

    path('buscar/<str:id>', RegistroCliente.as_view(), name='registro'),
    


]
