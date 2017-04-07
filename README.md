# Homework #1

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Node
	
	**A: Javascript was first designed to write programs that run on browsers (client side). NodeJS is a javascript program that you can install on your computer to write desktop & mobile applications, compile and run javascript codes locally on your computer.** 
	
	* Chrome's V8 Engine
	
	**A: V8 is a program written with C++ that allows you to write and compile javascript code on computers.**
	* GET request
	
	**A: It's a HTTP request method that allows client computers (users) to get information from the server with a given url.**
	* Server
	
	**A: Server is a computer that is designed to store data and share data with other client computers.**
	* express
	
	**A: It's a framework that makes it easier to build a server with nodeJS.** 


2. Fork and clone this repo.
		
	* Run the command `npm init` to create a `package.json` file.
	* Install express `npm install --save express`
	* Create a file called `server.js`.
	* `require` express and create your server app.
	* Tell your app to listen to port `5000` and then start your server with `node server.js`. (Install `nodemon` globally if you would like. `npm install -g nodemon`)
	* Add a route called `/name` that returns your name.
  	* Add a route called `/friends` that returns an array of some of your friends' names.
  	* Add a route called `/favorite-film` that returns an object that has details about one of your favorite movies.
  	* All of these routes are just handling `GET` requests.



#### Congratulations on finishing Homework #1!

For more information about our other courses visit: https://www.lambdaschool.com
