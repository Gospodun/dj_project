from django_clickhouse.models import ClickHouseSyncModel
from django.db import models
from datetime import date

class User(ClickHouseSyncModel):
    first_name = models.CharField(max_length=50)
    age = models.IntegerField()
    birthday = models.DateField()