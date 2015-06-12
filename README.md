# MEAN Stack Token Authentication Boilerplate

MEAN stack (MongoDB, ExpressJS, AngularJS, Node.js) token authentication boinerplate with user and role management.

## What you need

You will need to install a couple things globally to get going:
- <a href = 'http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/'>MongoDB</a>
- <a href = 'https://nodejs.org/'>Node.js</a>

## Setup

In your terminal you will need to:
- Navigate to your local repo ``` cd /path/to/repo/ ```
- Get all the dependencies to run the application with ``` npm install ```
- Compile the appication source with ``` grunt compile ```
- In a new terminal window, start the process for your MondoDB ``` mongod ```
- In a new terminal window, start the Node.js server process for populating the db with an admin user and role ``` node populate.js ```
- In the same terminal window, start the Node.js server to run the application ``` node server.js ```

## Good to go?

Navigate to ``` http://localhost:8000/ ``` in your browser. If you see a login page your all set! 

The username and password to login is ``` admin ```