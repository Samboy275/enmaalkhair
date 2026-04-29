from django.shortcuts import render, get_object_or_404
from .models import LegalDocument


def get_legal_document(doc_type: str):
    """
    Centralized retrieval logic for legal documents.
    Keeps views clean and avoids duplication.
    """
    return get_object_or_404(
        LegalDocument,
        type=doc_type,
        is_active=True
    )


def terms(request):
    document = get_legal_document("terms")

    return render(request, "legal/terms.html", {
        "document": document
    })


def privacy(request):
    document = get_legal_document("privacy")

    return render(request, "legal/privacy.html", {
        "document": document
    })
