from django.contrib import admin
from authorisation.models import Profile
from account.models import ProductCH, BrandCH, SellerCH


class MultiDBModelAdmin(admin.ModelAdmin):
    # A handy constant for the name of the alternate database.
    using = "clickhouse"

    def save_model(self, request, obj, form, change):
        # Tell Django to save objects to the 'other' database.
        obj.save(using=self.using)

    def delete_model(self, request, obj):
        # Tell Django to delete objects from the 'other' database
        obj.delete(using=self.using)

    def get_queryset(self, request):
        # Tell Django to look for objects on the 'other' database.
        return super().get_queryset(request).using(self.using)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        # Tell Django to populate ForeignKey widgets using a query
        # on the 'other' database.
        return super().formfield_for_foreignkey(
            db_field, request, using=self.using, **kwargs
        )

    def formfield_for_manytomany(self, db_field, request, **kwargs):
        # Tell Django to populate ManyToMany widgets using a query
        # on the 'other' database.
        return super().formfield_for_manytomany(
            db_field, request, using=self.using, **kwargs
        )


class ProfileAdmin(admin.ModelAdmin):
    pass


class CHProductTypesAdmin(admin.ModelAdmin):
    using = 'productch'
    def get_queryset(self, request):
        # Tell Django to look for objects on the 'other' database.
        return super(MultiDBModelAdmin, self).get_queryset(request).using(self.using)

admin.site.register(Profile, ProfileAdmin)
admin.site.register(ProductCH, MultiDBModelAdmin)
admin.site.register(BrandCH, MultiDBModelAdmin)
admin.site.register(SellerCH, MultiDBModelAdmin)