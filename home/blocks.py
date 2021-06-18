from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class CardBlock(blocks.StructBlock):
    header = blocks.CharBlock(form_classname="full title")
    body = blocks.RichTextBlock()
    image = ImageChooserBlock(required=False)
    cta_1 = blocks.URLBlock(required=False)
    cta_2 = blocks.URLBlock(required=False)

    class Meta:
        template = "streams/cards_block.html"
        label = "Card"
