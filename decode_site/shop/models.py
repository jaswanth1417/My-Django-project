from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ("jeans", "Jeans"),
        ("shirt", "Shirts"),
        ("tshirt", "T-Shirts"),
        ("jacket", "Jackets"),
        ("shoes", "Shoes"),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="products/", blank=True, null=True)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.name


class SizeVariant(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='size_variants')
    size = models.CharField(max_length=20)
    stock = models.IntegerField()

    def __str__(self):
        return f"{self.product.name} - {self.size}"