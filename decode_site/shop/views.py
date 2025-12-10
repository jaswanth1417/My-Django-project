from django.shortcuts import render, get_object_or_404
from .models import Product

def home(request):
    latest = Product.objects.filter(active=True).order_by('-id')[:8]
    return render(request, 'home.html', {'latest': latest})

def product_list(request):
    products = Product.objects.filter(active=True)

    # category filter (?category=jeans etc.)
    category = request.GET.get('category')
    if category:
        products = products.filter(category=category)

    # search filter (?q=shirt etc.)
    q = request.GET.get('q')
    if q:
        products = products.filter(name__icontains=q)

    return render(request, 'product_list.html', {'products': products})

def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk, active=True)
    size_variants = product.size_variants.all()
    return render(request, 'product_detail.html', {
        'product': product,
        'size_variants': size_variants,
    })

def contact(request):
    return render(request, 'contact.html')