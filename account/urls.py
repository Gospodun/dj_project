from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.cabinet),
    path('', include("django.contrib.auth.urls")),
    path('support', views.support),
    path('products', views.product_view, name="article-detail"),
    path('categories', views.categories),
    path('sellers', views.sellers),
    path('brands', views.brands),
    path('favorites', views.favorites),
    path('create-task', views.create_task),
    path('taskview', views.taskview),
    path('product-page/<str:pid>', views.product_page, name='Curr_product'),
]
