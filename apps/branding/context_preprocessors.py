from .models import ThemeSettings

def branding(request):
    theme = ThemeSettings.objects.first()

    return {
        "primary_color": theme.primary_color if theme else "#000000",
        "secondary_color": theme.secondary_color if theme else "#ffffff",
        "font_color": theme.font_color if theme else "#000000",
    }
