# Reverse Profile Image Search

## Introduction
This project aims to create a website that provides a social-media-oriented facial recognition service of NYU students and public figures using facial detection and recognition algorithms. Given an user-input image, the system applies machine learning algorithms to detect and identify human faces that are present. If there is a potential match to a NYU student or a public figure, the system will return key information about the queried person, which could include name, occupation, social media profiles, and/or Wikipedia/IMDB pages(if available).

## Prerequisites(Django)

### Anaconda/Python
Anaconda is an extremely useful platform/distribution for Python that I urge everyone to have. It allows you to create a 'sandbox-like' conda environment to install libraries and test your code without messing up the dependencies on your local machine. You don't absolutely need it, but you might have trouble instaling the command-line-interface for AWS on MacOS if you don't have anaconda(you can skip this step for now and come back later if needed).

*Download the Anaconda Python 3.7 version [here](https://www.anaconda.com/distribution/#download-section).*

### Set up Conda Envrionemnt(if you have Anaconda installed)
Create a new environment: `conda create -n <env_name> python=3.6` <br>
Use the environment: `conda activate <env_name>` <br>
Deactivate the envrionment:`conda deactivate` <br>

replace <env_name> with the name of your environment.

This the 'sandbox-like' environment that I was talking about before. All libraries and dependencies you install in this environment are self-contained and does not affect your local machine. Two biggest reasons that it is useful is (1) if the the program you use runs on a different version of Python compare to what your machine has, there would be conflicts and (2) if you screw somthing up when you install the dependecies and libraries for you project, you can just delete the environment and start over very easily. For more instructions, see [here](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).

**If you have Anaconda, please activate your conda environment BEFORE you do the following steps.**

### AWS Command-Line-Interface(CLI)
If you have Anaconda installed, then run <br>
`conda install -c conda-forge awscli` <br>

If you don't, then you have to follow the instruction [here](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html).

### AWS Set Up
On your terminal, run `aws configure`

It will prompt you to enter __"AWS Access Key ID"__, __"AWS Secret Access Key"__, __"Default Region Name"__(you should enter "us-east-1"), and leave the output format blank by just pressing enter. Check Slack for the credentials.

If it says something like "aws: command not found" you should go back [here](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html) and keep following the instructions to set the program PATH and bash profile. It was really messy for me so I'd suggest you download anaconda if you run into this problem.


### Django
Go to the directory where "requirements.txt" is located and run <br>
`pip install -r requirements.txt` <br>

It should install all necesary libraries for the Django Environment(new libraries will be added as project expands, run this command again if neccesary).

### Getting the App Running
1. Open your terminal
2. Go into folder __RIS__
3. Run the server: `python manage.py runserver`
3. Go to the url provided on the terminal 

## Prerequisites(React/Node.js)

### Node.js

* [Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).

### Install

To install dependencies for server

    $ git clone https://github.com/nyu-software-engineering/profile-photo-lookup.git
    $ cd profile-photo-lookup/app/server
    $ npm install

To install dependencies for client

    $ cd profile-photo-lookup/app/client
    $ npm install


### Start & watch

To run server, from the root folder do

    $ cd profile-photo-lookup/app/server
    $ PORT=3001 node bin/www
    
To run client, from the root folder do

    $ cd profile-photo-lookup/app/client
    $ npm start
    

## Built With

* [ExpressJS](https://expressjs.com/)
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
