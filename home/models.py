from django.db import models
from django.db.models import TextField
from wagtail.core import blocks
from wagtail.core.models import Page
from wagtail.core.fields import RichTextField, StreamField
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel, InlinePanel, MultiFieldPanel
from wagtail.images.blocks import ImageChooserBlock

from home.blocks import CardBlock


class HomePage(Page):
    header = TextField(blank=True)
    subheading = TextField(blank=True)
    cta_1 = models.URLField(blank=True)
    cta_2 = models.URLField(blank=True)
    banner_background = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    cards = StreamField([
        ('heading', blocks.CharBlock(form_classname="full title")),
        ('paragraph', blocks.RichTextBlock()),
        ('image', ImageChooserBlock(required=False)),
        ('cta_1', blocks.URLBlock(required=False)),
        ('cta_2', blocks.URLBlock(required=False)),
        ('cards', CardBlock(required=False)),
    ], blank=True)

    content_panels = Page.content_panels + [
        MultiFieldPanel(
            [
                FieldPanel('header'),
                FieldPanel('subheading'),
                FieldPanel('cta_1'),
                FieldPanel('cta_2'),
                FieldPanel('banner_background'),
            ],
            heading="Collection of Book Fields",
            classname="collapsible collapsed"),
        StreamFieldPanel('cards'),
    ]
