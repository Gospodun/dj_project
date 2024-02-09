from django.shortcuts import render
from django.views.generic.list import ListView
from .models import ProductCH, SellerCH, BrandCH


class ProductView(ListView):
    model = ProductCH
    template_name = 'products.html'
    context_object_name = 'products'

def product_view(request):
    product = ProductCH.objects.using("clickhouse").all()
    context = {'products': product}
    return render(request, 'products.html', context)

def cabinet(request):
    return render(request, 'cabinet.html')

def support(request):
    return render(request, 'support.html')

def products(request):
    return render(request, 'products.html')

def categories(request):
    return render(request, 'categories.html')

def sellers(request):
    return render(request, 'sellers.html')

def brands(request):
    brands = BrandCH.objects.using("clickhouse").all()
    context = {'brands': brands}
    return render(request, 'brands.html', context)

def favorites(request):
    return render(request, 'favorites.html')

def create_task(request):
    return render(request, 'favorites.html')

def taskview(request):
    return render(request, 'taskview.html')

def product_page(request, pid):
    product = ProductCH.objects.using("clickhouse").get(pid=pid)
    context = {'product': product}
    return render(request, 'product-page.html', context)


