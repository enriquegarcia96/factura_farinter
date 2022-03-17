from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse


from .models import Cliente, Producto, Categoria

# Create your views here.


class RegistroCliente(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id):
        buscarUsuario = list(Cliente.objects.filter(identidad=id).values())
        usuario = buscarUsuario[0]
        datos = {'mensaje': 'Usuario encontrado', 'Usuario': usuario}
        return JsonResponse(datos)


class ClientesGet(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        clientes = list(Cliente.objects.values())
        datos = {'Indentidades': clientes}

        return JsonResponse(datos)


class Productos(View):

    
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)


    def get(self, request):
        productos = list(Producto.objects.values())
        datos = {'Productos': productos}
        return JsonResponse(datos)
