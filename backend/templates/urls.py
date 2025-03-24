from django.urls import path
from templates.views import TemplateListView,TemplateDetailView
urlpatterns = [
    path('',TemplateListView.as_view(), name = 'list-template'),
    path('<int:pk>',TemplateDetailView.as_view(), name = 'detail-template'),
]
