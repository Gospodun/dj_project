from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from django.views.decorators.csrf import csrf_exempt
from .forms import SignUpForm
from .models import Profile


def auth(request):
    return render(request, 'authorisation.html')

@csrf_exempt
def registration(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)

        if form.is_valid():
            user = form.save()
            # Profile.objects.create(
            #     name=form.cleaned_data.get('name'),
            #     surname=form.cleaned_data.get('surname'),
            #     mail=form.cleaned_data.get('mail'),
            #     username=form.cleaned_data.get('username')
            # )
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=user.username, password=raw_password)
            login(request, user)

            return redirect('/account')

    return render(request, 'registration.html')