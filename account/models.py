from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField

from clickhouse_backend import models as chmodels

class ProductCH(chmodels.ClickhouseModel):
    pid = chmodels.StringField(default="")
    name = chmodels.StringField(default="")
    mpName = chmodels.StringField(default="")
    sellerID =  chmodels.StringField(default="")
    sellerName =  chmodels.StringField(default="")
    catID =  chmodels.StringField(default="")
    brandID =  chmodels.StringField(default="")
    brandName =  chmodels.StringField(default="")
    article =  chmodels.StringField(default="")
    mainPhoto = chmodels.StringField(default="")
    price = chmodels.StringField(default="")


class BrandCH(chmodels.ClickhouseModel):
    brandId = chmodels.StringField(default="")
    name = chmodels.StringField(default="")
    mpName = chmodels.StringField(default="")
    url =  chmodels.StringField(default="")


class SellerCH(chmodels.ClickhouseModel):
    name = chmodels.StringField(default="")
    mpName = chmodels.StringField(default="")
    sellerID =  chmodels.StringField(default="")
    psrn =  chmodels.StringField(default="")
    url =  chmodels.StringField(default="")
