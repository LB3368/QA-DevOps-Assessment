/*Module 6 Assessment
Introduction
It’s time to practice and solidify the skills you learned in this module.

Independent work

This is an individual assignment. Please do not collaborate with your peers or share your work until the project is reviewed as a class.

Setup
Click here to download the code you need to for this project.

Navigate to the folder you just downloaded on the command line.

Get dependencies installed by running npm install.

Part 1: Server Setup
Start with setting up your server to serve static files so that it will be ready for deployment.

Near the top of server.js, set up middleware and/or endpoints that will serve the files from the public folder.

Start the app by running npm start.

In your web browser and play a few games of Duel Duo. Familiarize yourself with how the interface works.

To start the game, click the Draw button. This will display five random robots. You’ll pick two and the computer will pick two.

Your robots and the computer’s robots will duel each other.

The winner is calcualted by adding the robot’s total health and attack damage and then subtracting the other robot’s attack damage from the defenders’s health.

Reloading the page will reset your wins and losses.

Open and read public/index.js. While it’s not important to understand every line of how the JavaScript code is working in this project, take note of the different functions and what they appear to do to make the app work. Also, explore more of your server so you know what’s going on there too.

Remember, you can stop the server with ctrl + c in the terminal window where you started the server.

Part 2: Manual Testing
There are at least 3 known bugs in this game. Draft a plan to test the game, conduct your testing, and document any bugs that you find. Keep track of your testing documentation (plan, cases, and bugs) in a Google doc, Trello, or something similar.

Make sure you play enough times to lose at least once and win at least once.

You need to write at least 1 test case, 1 bug report, and 1 other piece of documentation (a test plan, another case, or another bug report).

When you have finished this section, download your document as a PDF/png, and save it to your project folder.

Part 3: Unit Tests
In the __tests__/shuffle.test.js file, there is a describe block waiting for tests!

Write at least 2 tests in the describe callback for the shuffle function. You may need to read through Jest documentation to find methods/matchers to use.

Some ideas:

check that shuffle returns an array

check that it returns an array of the same length as the argument sent in

check that all the same items are in the array

check that the items have been shuffled around

You can run the tests in shuffle.test.js with the following command:

$ npm test -t shuffle
...this command will run all tests in the file that have the word “shuffle” in them. This way, you can skip running the tests in __tests__/duelDuo.test.js.

Part 4: Write Automated Tests
Open and read the file called __tests__/duelDuo.test.js. There is one automated test included already.

Write at least 2 more tests for the game. Here are some ideas for tests:

Check that clicking the Draw button displays the div with id = “choices”

Check that clicking an “Add to Duo” button displays the div with id = “player-duo”

Check that when a bot is “Removed from Duo”, that it goes back to “choices”

Make sure you start the server with npm start before running the tests. You can run just the tests in duelDuo.test.js with:

$ npm test -t duelDuo
...or you can run all of your tests with npm test.

Part 5: Rollbar
Set up Rollbar in server.js so that you can log information and errors about your app.

In the Rollbar app, create a new project to get your access token. Use that to connect your app to that project.

In the endpoint handler functions, set up at least 4 rollbar events (not counting ‘Hello World’.)

Part 6: Deployment
Add and commit your code.

Set up a repo in GitHub.

/*Connect your remote repo and push your code.

In AWS EC2, set up a new app that deploys your repo. (See this doc for detailed instructions)

Include the public IP address of your instance in the ec2.md document

Interact with your live site and check Rollbar for logs!

Request Address

Make sure that your base URL in axios requests is updated to match your IP address.

Extra Credit: Deployment Sketch
Draw a sketch/picture of deployment as it relates to the broader web application development process. Be sure to include GitHub, your local development environment, and the different parts of the web application on the sketch.

You should be able to come back to this picture in the future if you need a refresher on what deployment is and how to think about it in the broader picture of web application development.

Be sure to push your code to GitHub for this assessment!

To pass this assessment you must score at least 17/24.
*/