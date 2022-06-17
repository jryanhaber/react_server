# server_2

Purposes

- Generate a practice app which must be recalled from the text guidance prompts alone and recreated to test your ability to rapidly deploy new projects.
- Allow for links for things not retained to be able to access the training from which this is based.

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

- create an account with google auth
- create a sign up form
- upon sign up trigger, send request to google
- let them auth there, to prove identity validated
- when they come back, take the code param - and check with google to see if its right
- once thats validated, create them a new - account and log them into the app.
