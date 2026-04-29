from django.db import models

class ThemeSettings(models.Model):
    primary_color = models.CharField(max_length=20)
    secondary_color = models.CharField(max_length=20)
    font_color = models.CharField(max_length=20)
    font_color_secondary = models.CharField(max_length=20)

    def get_theme():
        return ThemeSettings.objects.first()
