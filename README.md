# server_2

# Purposes

## Clone-able Template Project Kickstart

- This will be a cloneable template to kick start an app with Node, Mongo, Express, React and Redux.
- I will try to list of features you will get out of the box if you clone this to start your project.

## MERN stack training App

- This is also very commented in commits which can serve as a challenge for training yourself in the MERN stack. Each commit represents a specific technical step and the names indicate what is required to proceed. To use this as a test app, attempt to complete the steps independently, and if you cannot succeed, check the commits to see what the correct config was. Repeat until you can complete each step without referencing the solutions.
  Generate a practice app which must be recalled from the text guidance prompts alone and recreated to test your ability to rapidly deploy new projects.

## Demo project of current Code skills

This app will be public facing, open sourced, MIT licensed, so it can serve as my own dev skillset

# Setup

- Install the project, at the root dir
  `npm install`
- then `npm run dev`

# requirements

- brew
- heroku cli

# Commands

open heroku live site

- heroku open

git status

- check for changes

push to heroku new changes

- git push heroku master

check logs for heroku

- heroku logs

# Step 1

Initialize a New Express project

- generate a gitignore and ignore node modules
- generate an index.js and pull in express
- set a get command to the root URL and reply with hi: there.
- set a port to listed to the default port provided by heroku, and default to 5000 to local
- set the app to listen to the port upon launch
- Commit that project to git

# Step 2

Enable google auth for sign in

set up passportjs.org
npm install --save passport passport-google-oath20
https://www.passportjs.org/packages/passport-google-oauth20/

- create an account with google auth
- create a sign up form
- upon sign up trigger, send request to google
- let them auth there, to prove identity validated
- when they come back, take the code param - and check with google to see if its right
- once thats validated, create them a new - account and log them into the app.
