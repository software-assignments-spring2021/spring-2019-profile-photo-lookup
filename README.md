[![Build Status](https://travis-ci.com/nyu-software-engineering/profile-photo-lookup.svg?branch=master)](https://travis-ci.com/nyu-software-engineering/profile-photo-lookup)

# Reverse Profile Image Search

## Introduction
This project aims to create a website that provides a social-media-oriented facial recognition service of NYU students and public figures using facial detection and recognition algorithms. Given an user-input image, the system applies machine learning algorithms to detect and identify human faces that are present. If there is a potential match to a NYU student or a public figure, the system will return key information about the queried person, which could include name, occupation, social media profiles, and/or Wikipedia/IMDB pages(if available).

## Prerequisites(Django)

### Python/Anaconda
This project requires python version 3.X (specifically 3.6 was used in development). Additionally, we recommend using the Anaconda distribution of Python to take advantage of its virtual environment funationality. It allows you to create a 'sandbox-like' conda environment to install libraries and test your code without messing up the dependencies on your local machine. 

*Download the Anaconda Python 3.7 version [here](https://www.anaconda.com/distribution/#download-section).*

### Set up Conda Envrionemnt(Optional)
If you have Anaconda installed:

Create a new environment: `conda create -n <env_name> python=3.6` <br>
Use the environment: `conda activate <env_name>` <br>
Deactivate the envrionment:`conda deactivate` <br>

replace <env_name> with the name of your environment.

This is very useful if (1) the program you intend to run is based on a different version of Python than what your local machine currently has installed or (2) if you screw somthing up when you install the dependecies and libraries for you project, you can just delete the environment and start over very easily. For more instructions, see [here](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).

**If you have Anaconda, please activate your conda environment BEFORE you do the following steps.**

### AWS Command-Line-Interface(CLI)
If you have Anaconda installed, then run <br>
`conda install -c conda-forge awscli` <br>

If you don't, then you have to follow the instruction [here](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html).

### AWS Set Up
On your terminal, run `aws configure`

It will prompt you to enter __"AWS Access Key ID"__, __"AWS Secret Access Key"__, __"Default Region Name"__(you should enter "us-east-1"), and leave the __"output format"__ blank by just pressing enter. Check Slack for the credentials.

If it says something like "aws: command not found" you should go back [here](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html) and keep following the instructions to set the program PATH and bash profile. It was really messy for me so I'd suggest you download Anaconda and use conda install if you run into this problem.

### Django
Go to the directory where "requirements.txt" is located and run <br>
`pip install -r requirements.txt` <br>

It should install all necesary libraries for the Django Environment(new libraries will be added as project expands, run this command again if neccesary).

## Start the App
1. On 2 __separate__ terminals
2. Go to folder __app/client__, do
    - `npm install`
    - `nom start`
3. Go to __app/server__, do
    - `python manage.py runserver`

## Unit Test Coverage
All unit tests are in a separate module under __demo/rekognition/tests__
1. On terminal, go to rhe __demo__ folder
2. To run tests
    - `python manage.py test`
3. To see coverage report
    - `coverage run --source='.' manage.py test rekognition`
    - `coverage report`
4. To see a detailed coverage report
    - run `coverage html` instead of `coverage report`
    - the report will be save in a folder named "htmlcov" inside the "server" folder
    - open "index.html" inside "htmlcov" to see the detailed report
    - __note: a pre-generated coverage report has already been included in the repo for viewing__

## Prerequisites(React.js)

### Node.js

* [Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).

### Install

To install dependencies for client

    $ cd profile-photo-lookup/app/client
    $ npm install


### Start & watch

To run client, from the root folder do

    $ cd profile-photo-lookup/app/client
    $ npm start


### Test

To run test

    $ npm test

To generate coverage report

    $ npm run coverage

To view the coverage report in your browser

    $ cd coverage/lcov-report
    $ open index.html

## Built With

* [React](http://facebook.github.io/react) is used for UI.

## Project Requirements

On project requirements, see [REQUIREMENTS.md](https://github.com/nyu-software-engineering/profile-photo-lookup/blob/master/REQUIREMENTS.md)


## Contributing

On how to contribute, see [CONTRIBUTING.md](https://github.com/nyu-software-engineering/profile-photo-lookup/blob/master/CONTRIBUTING.md)


## Authors

* **Zach Li** - *Initial work* - [zichen-li](https://github.com/zichen-li)
* **Amanda Labuda** - *Initial work* - [alabuda98](https://github.com/alabuda98)
* **Jing Hwan Khoo** - *Initial work* - [khoojh](https://github.com/khoojh)
* **Wei Jie Chua** - *Initial work* - [weijie9512](https://github.com/weijie9512)
* **Kayli O'Keefe** - *Initial work* - [kayliokeefe](https://github.com/kayliokeefe)
