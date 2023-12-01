from django.shortcuts import render

def auth(request):
    return render(request, 'authorisation.html')


def registration(request):
    return render(request, 'registration.html')