import wikipedia
import numpy as np

titles = ['David Beckham', 'Michael Jordan']

possibles = ['Award', 'Awards', 'Honours', 'Honors', 'Honour', 'Honor','Accolade']

career_possibles = ['Career statistics', 'Statistics', 'career statistics']

for i in titles:
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

                                                        
