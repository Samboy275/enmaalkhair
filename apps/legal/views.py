from django.shortcuts import render, get_object_or_404
from .models import LegalDocument


def get_doc(doc_type):
    return get_object_or_404(
        LegalDocument,
        type=doc_type,
        is_active=True
    )


def terms(request):
    document = get_doc("conditions")

    lang = request.GET.get("lang", "en")

    content = document.content_ar if lang == "ar" else document.content_en

    return render(request, "legal/terms.html", {
        "content": content,
        "lang": lang,
    })


def privacy(request):
    document = get_doc("privacy")

    lang = request.GET.get("lang", "en")

    content = document.content_ar if lang == "ar" else document.content_en

    return render(request, "legal/privacy.html", {
        "content": content,
        "lang": lang,
    })
