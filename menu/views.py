from django.shortcuts import render
from .models import Category, Foods
# Create your views here.
def burger_page(request):
    category = Category.objects.all()
    foods = Foods.objects.all()
    context = {
        'kategoriya' : category,
        'ovqat' : foods
    }
    return render(request, template_name='index.html', context=context)