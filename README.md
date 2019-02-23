# Reverse Profile Image Search

## Introduction
This project aims to create a website that provides a social-media-oriented facial recognition service of NYU students and public figures using facial detection and recognition algorithms. Given an user-input image, the system applies machine learning algorithms to detect and identify human faces that are present. If there is a potential match to a NYU student or a public figure, the system will return key information about the queried person, which could include name, occupation, social media profiles, and/or Wikipedia/IMDB pages(if available).

## Getting Started

### Prerequisites

* [Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).

### Install

To install dependencies for server

    $ git clone https://github.com/nyu-software-engineering/profile-photo-lookup.git
    $ cd profile-photo-lookup/app/server
    $ npm install

To install dependencies for client

    $ cd client
    $ npm install


### Start & watch

To run server, from the root folder do

    $ cd profile-photo-lookup/app/server
    $ PORT=3001 node bin/www
    
To run client, from the root folder do

    $ cd profile-photo-lookup/app/server/client
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
