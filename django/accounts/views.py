from django.contrib import messages
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET", "POST"])
def login_page(request):
    if request.method == "POST":
        email = request.POST.get("email", "").strip()
        password = request.POST.get("password", "")
        if "@" not in email or "." not in email.rsplit("@", 1)[-1] or not password:
            messages.error(request, "Enter a valid email and password.")
        else:
            # Educational demo only: no authentication takes place in this view.
            messages.success(request, "Input validated. Authentication is not connected yet.")
    return render(request, "accounts/login.html")
