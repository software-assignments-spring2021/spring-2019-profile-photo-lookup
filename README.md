[![Build Status](https://travis-ci.com/nyu-software-engineering/profile-photo-lookup.svg?branch=master)](https://travis-ci.com/nyu-software-engineering/profile-photo-lookup)

# Reverse Profile Image Search

## Introduction
Our project aims to create a general purpose reverse image search engine. Specifically, we implemented two individual modules, one focuses on celebrity and another focuses for NYU students, by using Amazon’s facial recognition API and natural language processing libraries. Given an user-uploaded image, the system detects and identifies human faces present in the image. If there is a potential match to a NYU student or a public figure, the system will return key information about the queried person, such as their name, picture, college, and facebook profile for an NYU student, or for celebrities, it returns information specific to the celebrities occupation. For example, if the celebrity is a musician, our system would return their music genres, a spotify playlist of their top songs, and their related artists. And currently, we have implemented four categories for celebrities and they are politician, actor, musician, athlete. We return different information for each category.


## Built With

* [React](http://facebook.github.io/react) is used for UI.
* [Django](https://www.djangoproject.com/) is used for back-end.

## Prerequisites

### Node.js

* Download and Install Node.js [here](http://nodejs.org/) (now includes [NPM](https://npmjs.org/)).

### Python/Anaconda
* This project requires python version 3.X (specifically 3.6 was used in development). Additionally, we recommend using the Anaconda distribution of Python to take advantage of its virtual environment funationality.

*Download the Anaconda Python 3.7 version [here](https://www.anaconda.com/distribution/#download-section).*

### Set up Conda Environment(Optional)
If you have Anaconda installed:

Create a new environment

    $ conda create -n <env_name> python=3.6
    
Activate environment

    $ conda activate <env_name>
    
Deactivate the environment

    $ conda deactivate

Replace <env_name> with the name of your environment. For more instructions, see [here](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).

If you have Anaconda, please activate your conda environment BEFORE you do the following steps.

### AWS Command-Line-Interface(CLI)
If you have Anaconda installed, then run

    $ conda install -c conda-forge awscli

If you don't, then you have to follow the instruction [here](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html).

### AWS Set Up
On your terminal, run `aws configure`

It will prompt you to enter __"AWS Access Key ID"__, __"AWS Secret Access Key"__, __"Default Region Name"__(you should enter "us-east-1"), and leave the __"output format"__ blank by just pressing enter. Please message me if you need the credentials for grading purposes.

If it says something like "aws: command not found" you should go back [here](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html) and keep following the instructions to set the program PATH and bash profile. It was really messy for me so I'd suggest you download Anaconda and use conda install if you run into this problem.

### API Setup
All API credentials should be entered in __.envs__ under app/server. There are only placeholder values in the current file.

**NOTE: the code will not run properly if API credentials are not valid! Please message me if you need the credentials for grading purposes**

Our Django backend uses Google Custom Search API for image query, Youtube API for video query, and Spotify API for playlist query.

## ReactJS
Go to __app/client__ and run

    $ npm install

### Django
Go to the directory where "requirements.txt" is located and run <br>

    $ pip install -r requirements.txt

It should install all necesary libraries for the Django Environment(new libraries will be added as project expands, run this command again if neccesary).

## Start the App
1. On two *separate* terminal windows
2. Go to folder __app/client__, do
    - `npm install`(ignore if done in previous step)
    - `npm start`
3. Go to __app/server__, do
    - `python manage.py migrate` (if starting first time)
    - `python manage.py runserver`

## Unit Test Coverage
### Front-End
1. Go to __app/client__
2. To run test
    - `npm test`
3. To generate coverage report
    - `npm run converage`
4. To view the coverage report in your browser
    - `cd coverage/lcov-report`
    - open index.html

### Back-End
1. Go to __app/server__
2. To run tests
    - `python manage.py test`
3. To see coverage report
    - `coverage run --source='.' manage.py test rekognition`
    - `coverage report`
4. To see a detailed coverage report
    - run `coverage html` instead of `coverage report`
    - the report will be save in a folder named "htmlcov" inside the "server" folder
    - open "index.html" inside "htmlcov" to see the detailed report


## Project Requirements

On project requirements, see [REQUIREMENTS.md](https://github.com/nyu-software-engineering/profile-photo-lookup/blob/master/REQUIREMENTS.md)


## Contributing

On how to contribute, see [CONTRIBUTING.md](https://github.com/nyu-software-engineering/profile-photo-lookup/blob/master/CONTRIBUTING.md)


## Authors

* **Zach Li** - [zichenli6](https://github.com/zichenli6)
* **Amanda Labuda** - [alabuda98](https://github.com/alabuda98)
* **Jing Hwan Khoo** - [khoojh](https://github.com/khoojh)
* **Wei Jie Chua** - [weijie9512](https://github.com/weijie9512)
* **Kayli O'Keefe** - [kokeefe32](https://github.com/kokeefe32)
