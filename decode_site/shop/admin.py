from django.contrib import admin
from .models import Product, SizeVariant

class SizeVariantInline(admin.TabularInline):
    model = SizeVariant
    extra = 1

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "price", "active")
    list_filter = ("category", "active")
    search_fields = ("name",)
    inlines = [SizeVariantInline]

@admin.register(SizeVariant)
class SizeVariantAdmin(admin.ModelAdmin):
    list_display = ("product", "size", "stock")
    list_filter = ("size",)