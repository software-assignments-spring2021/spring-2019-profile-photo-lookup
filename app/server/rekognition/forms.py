from django import forms

class ImageForm(forms.Form):
    input_image = forms.FileField(required = True)
