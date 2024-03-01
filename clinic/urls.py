from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, AppointmentViewSet,  UserProfileAPI,LoginView

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'appointments', AppointmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('users/login/', LoginView.as_view(), name='api_login'), 
    path('users/user-profile/', UserProfileAPI.as_view(), name='user_profile'),
]
