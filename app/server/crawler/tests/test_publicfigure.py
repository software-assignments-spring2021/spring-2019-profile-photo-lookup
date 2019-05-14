from django.test import TestCase
from ..public_figure import PublicFigure


class PublicFigureTest(TestCase):
    def test_public_figure(self):
        public_figure = PublicFigure("Michelle Obama", ["Public Figure"])
        bio = "Michelle LaVaughn Obama is an American lawyer, university administrator and writer, who was First Lady of the United States from 2009 to 2017. She is married to the 44th U.S. president, Barack Obama, and was the first African-American first lady."
        self.assertEqual(bio, public_figure.info["bio"])
