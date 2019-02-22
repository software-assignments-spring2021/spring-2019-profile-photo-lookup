# Reverse Profile Image Search - Project Requirements

## Introduction
This project aims to create a website that provides a social-media-oriented facial recognition service of NYU students and public figures using facial detection and recognition algorithms. Given an user-input image, the system applies machine learning algorithms to detect and identify human faces that are present. If there is a potential match to a NYU student or a public figure, the system will return key information about the queried person, which could include name, occupation, social media profiles, and/or Wikipedia/IMDB pages(if available).


## Service Description
Our program starts by asking the user to upload an image containing human face(s) to our website. The system would then automatically detect any potential face that is present in the image and give the user an option to selete which face or faces they want to run the program on. Once the target faces have been seleted, our facial recognition model would attempt to find matching/similar faces in existing profile pictures of NYU students on different social media platforms, popular stock images of models, and photographs of celebrities/public figures. If potential matches are found, the system would return tailored outputs specific to which category the queried individual belongs to - the system output can be summarized into the list below:


NYU Student
 - name & picture
 - links to social media profiles
 - relevant information extracted from social media
 
Actor/Actress
 - name & picture
 - link to IMHD page
 - relevant information extracted from IMHD/Wikipedia

Musician
 - name & picture
 - link to Spotify
 - relevant information extracted from Spotify/Wikipedia
 
Athelete
 - name & picture
 - sport & professional team
 - relevant information extracted from ESPN/Wikipedia
 
Politican
 - name & picture
 - party & geographic representation
 - wikipedia page
 - relevant information extracted from Wikipedia


### Domain Model

![Domain Model Diagram](https://github.com/nyu-software-engineering/profile-photo-lookup/blob/master/asset/DomainModelDiagram.png)


## Use Cases
![Use Diagram](https://github.com/nyu-software-engineering/profile-photo-lookup/blob/master/asset/Use%20Case.jpg)

This program would be useful for (1) people who have a picture of someone that they met at a social event or a professional networking event but does not know his or her name or forgot to get their contact information down. (2) companies or college admissions that want to look up an applicant's social media presence to see if there are any red flags(this would circumvent the problem where the applicant would change their social media name or use a nickname) (3) people on dating apps who want to know if their match is a real person or some catfish using fake profiles. (4) people who seen a video or image of a celebrity/public figure(perhaps those who are less well-known) and just cannot remember his or her name.



## Constraints
1. Time constraints - how long does it take to find the social media
2. Size constraints - how expensive to store huge amount of datasets
3. Privacy - how acceptable are people towards the idea of profile potentially being found by someone completely random



## Results
The results of a market research are shown below.

### Stakeholder interviews
1. Professor
2. Tutor


### End-user observation
1. Persona 1- Celebrity Lookup

Lorraine Johnson is a 68 year old grandma, who recently watched the Grammy’s with her six year old granddaughter. She saw Lady Gaga accept her awards, and asked her daughter who the lady was. A few days later, she wanted to research more about her, but could not remember her name. She had to google “girl singer won grammys”, however none of the images directly matched the woman she was looking for. She could ask her granddaughter again who the woman was, but she won’t see her for two more weeks. In this situation, our software would be useful because Lorraine can easily look up who Lady Gaga is with only her picture. She will also be directly linked to things such as her songs, wikipedia, etc., which would take longer to find if she attempted to Google the information. 

2. Persona 2- NYU/Social Media Lookup

Sabrina Gonzalez is a dance major at NYU, double majoring in Computer Science. She just attended her first NYU WiNC meeting, and although she knew no one going in, she made a friend there. Unfortunately, she forgot her name and did not exchange contact information. Sarina would have to wait until the next meeting to talk to her, if she even comes. To potentially find her, she could look through all of NYU WiNC’s followers on instagram and facebook, but that is extremely tedious and frustrating if you have no recollection of their name, or if they didn’t give their last name. If she took a snapchat with her, or has a picture from the events meeting, she could use our facial recognition website to find their name and a link to any of their social media. 
