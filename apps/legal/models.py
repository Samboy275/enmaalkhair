from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

class LegalDocument(models.Model):
    """ Model to save legal documents for the user """

    TYPE_CHOICES = [
        ('privacy', 'Privacy Terms'),
        ('conditions', 'Terms and Conditions')
    ]

    name = models.CharField(max_length=50)
    type = models.CharField(max_length=15, choices=TYPE_CHOICES)
    content = RichTextField()
    is_active = models.BooleanField(default=False)

