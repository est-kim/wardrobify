from django.urls import path
from .views import api_list_hats, api_show_hat


urlpatterns = [
    path("locations/", api_list_hats, name="api_list_hats"),
    path("locations/<int:pk>/", api_show_hat, name="api_show_hat"),
]
