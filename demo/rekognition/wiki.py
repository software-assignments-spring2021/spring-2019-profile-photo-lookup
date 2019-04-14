import athlete as Athlete
import wikipedia
import numpy as np

titles = ['David Beckham', 'Michael Jordan']


def getPlot(names):
    possibles = ['Award', 'Awards', 'Honours', 'Honors', 'Honour', 'Honor','Accolade']

    career_possibles = ['Career statistics', 'Statistics', 'career statistics']

    for i in names:
        try:
            wik = wikipedia.WikipediaPage(i[0])
        except:
            wik = np.NaN

        try:
            for j in possibles:
                if wik.section(j) != None:
                    plot = wik.section(j).replace('\n', '').replace('\n', '')
        except:
            plot = np.Nan


def findPlot(name):
    name_with_underscore,url_link = athlete.getAthleteName(name)
    summary = wikipedia.WikipediaPage(title=name_with_underscore).summary


print(findPlot("Lee Chong Wei"))
