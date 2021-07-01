# Proyecto E
## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)

## General Info
***
The project consists of a client and a server, which consumes an external api to obtain content to display, and makes use of a database to save the accounts. In addition, the server has jsonwebtoken to make use of its endpoints.
On the client side, react and bootstrap are used for the components.

## Technologies
***
A list of technologies used within the project:
* axios 0.21.1
* react 17.0.2
* express 4.17.1
* jsonwebtoken 8.5.1
* pg 8.6.0
* sequelize 6.6.2
* nodemon 2.0.7
     
 

## Installation
***
Clone the repository 
```
$ git clone https://github.com/leonel-t/Proyeto-E.git
``` 
Install and start the server.
```
$ cd api
$ npm install
$ npm start
``` 
Install and start the client. 
```
$ cd client
$ npm install
$ npm start
``` 
Also you will have to tell your sql database that has the user model that is being used.