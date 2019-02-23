# Reverse Profile Image Search - Project Requirements

## Introduction
This project aims to create a website that provides a social-media-oriented facial recognition service of NYU students and public figures using facial detection and recognition algorithms. Given a user-input image, the system applies machine learning algorithms to detect and identify human faces that are present. If there is a potential match to a NYU student or a public figure, the system will return key information about the queried person, which could include name, occupation, social media profiles, and/or Wikipedia/IMDB pages (if available).


## Service Description
Our program starts by asking the user to upload an image containing human face(s) to our website. The system would then automatically detect any potential face that is present in the image and give the user an option to select which face or faces they want to run the program on. Once the target faces have been selected, our facial recognition model would attempt to find matching/similar faces in existing profile pictures of NYU students on different social media platforms, popular stock images of models, and photographs of celebrities/public figures. If potential matches are found, the system would return tailored outputs specific to which category the queried individual belongs to - the system output can be broken down into the list below:


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
 
Athlete
 - name & picture
 - sport & professional team
 - relevant information extracted from ESPN/Wikipedia
 
Politician
 - name & picture
 - party & geographic representation
 - Wikipedia page
 - relevant information extracted from Wikipedia


## Constraint
After the user uploads an image and selects the target face(s), our system should output relevant results in under one minute.


## Domain Model
<img src="https://github.com/nyu-software-engineering/profile-photo-lookup/blob/master/asset/domain_model.png" width="80%">


## Use Cases
<img src="https://github.com/nyu-software-engineering/profile-photo-lookup/blob/master/asset/use_cases.png" width="60%">


Goal: Upload Image to Website <br />
Actor: General User <br />
Scenario:
 - click the 'Upload Image' button to select image from local machine
 - OR drag and drop desired image from local machine to our website
 

Goal: Select Face(s) in Image <br />
Actor: General User <br />
Scenario:
 1. upload image containing the faces of individuals to lookup
 2. system returns the same image with selectable bounding box aorund each detected human face
 3. click on the bounding box of face(s) that you want to perform the search on
 4. press 'Run' button to perform search on selected face(s)


Goal: Find Relevant Information about Individuals in Image <br />
Actor: General User <br />
Scenario: 
 1. upload image containing the faces of individuals to lookup
 2. select which face(s) in image to perform the search
 3. receive system output
 
 
Goal: Add/Update New Face to Database <br />
Actor: Administrator <br />
Scenario: 
 1. click button to add a new person
 2. enter peron's name
 3. upload a photo collection of the new person's face


## End-user Observation
1. Persona 1 - Celebrity Lookup

Lorraine Johnson is a 68-year-old grandma, who recently watched the Grammy’s with her sixteen year old granddaughter. She saw Lady Gaga perform and accept her awards and asked her daughter who the lady was. A few days later, Lorraine wants to research more about Lady Gaga because she really liked her performance and wants to listen to more; however, she could not remember her name. She googled “girl singer Grammys”, but none of the images directly matched the woman she was looking for. She could ask her granddaughter again who the woman was, but she won’t see her for two more weeks. In this situation, our software would be useful because Lorraine can easily look up who Lady Gaga is with only her picture. She will also be directly linked to things such as her songs, Wikipedia, etc., which would take longer to find if she attempted to Google the information. 

2. Persona 2 - Athlete Lookup

Tom Olsen is a retired cop from Ohio, and he has been a Cleveland Browns fan since he was a child. However, Tom has stopped following the Browns in recent years because they have been terrible. One day, Tom is hanging out at a bar and he caught the end of the Browns-Jets game on TV. The Browns won their first game in 2 years and a young man was interviewed after the game and credited for the victory. He does not recognize the player and is eager to find out. However, he only saw the interview and does not know his name or his playing position. Tom could dig through the 53-men roster of the Browns, which could take a really long time, or he can simply take a picture of the interview on TV and use our website to find out who the player is. 

3. Persona 3 - NYU/Social Media Lookup

Sabrina Gonzalez is a dance major at NYU, double majoring in Computer Science. She just attended her first NYU WiNC meeting, and although she knew no one going in, she made a friend there. Unfortunately, she forgot her name and did not exchange contact information. Sarina would have to wait until the next meeting to talk to her, if she even comes. To potentially find her, she could look through all of NYU WiNC’s followers on Instagram and Facebook, but that is extremely tedious and frustrating if you have no recollection of their name, or if they didn’t give their last name. If she took a snapchat with her, or has a group photo from the events meeting, she could use our facial recognition website to find his or her name and link(s) to any of their social media pages.


4. Persona 4 - Catfish Lookup

Ed Miller is a college student that is new to Tinder. During his first few days using the app, he got matched with a girl from NYU that is out of his league, which makes him suspect that her profile is fake. After chatting with her they set up a date and location to meet. Although she seems normal when they were chatting online, Ed still wants to make sure that there are no surprises. In this scenario, Ed can use our website to see who she actually is. After he uploads her Tinder picture,  our system will be able to confirm whether his match is a NYU student or some stock photo model/celebrity whose picture has been borrowed to make a fake Tinder profile.
