# Pizza-app

This application is about creating your own pizza and make your best pizza orders.The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Using Html and css for structure

## Base Idea of the Project

The main idea for the project is to be able to access a pizza app, where you can not only order from the pizzas usually pizzas-app offer you, but you can create your own pizza, according to your tastes and according to the ingredients you prefer. And then you can share with others your idea about the pizza. You can order it and make other people order it.

## Description and how to use

Before logging in, the Home page will be accessible, where you can see more information on the staff who work, how they work, the ingredients they use and their contacts. You will have access to the public menu, which the pizzeria itself offers. Without being login, you will not be able to place any order and you will not be able to access the customer catalog, where are all the pizzas created by registered and logged in users only. As a logged in user, you will have access to this catalog, you can also comment, put a like to the pizzas of others users, and above all you can create your own pizza, and of course, place your order.You will also be able to access your personal area, where you will see the pizzas you have created and the orders you have made.

### Used Language

For the application I used the English language, but for the names of the pizzas and their ingredients I used the Italian language, because I think it is a good idea to leave them in their original state. Since the pizza is an originally Italian product, the ingredients sound great in Italian.

## Available Scripts

### SoftUni Practice Server `node server.js` 

As a rest service, open folder server in terminal and type 'node server.js'. You should see that:
Server started on port 3030. You can make requests to http://localhost:3030/.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### To create a pizza
To create your own pizza, you can use the images, accessible in the pizza-images folder at this link: https://www.dropbox.com/sh/6mmhgx4orwxeey1/AACRyIutYtdFlhqaFZQcL8tia?dl=0


## Architecture

The project is divided into folders of pages and components, with .jsx i .css fail within them of each component, page. There is a common folder that contains PrivateRoute.js, which acts as a Route Guard for unauthorized access. UserContext.js and PizzaContext.js created in the context folder. UseLocalStorage.js helps maintain data persistence when the page is reloaded. In the services folder are userService.js, pizzaService.js, commentService.js and LikeService.js, which are the ones who communicate with the server and take care of the execution of requests. App.js contains all amounts of components and pages, contexts, etc. and mainly deals with the routes.

## License

Distributed under the MIT License. See LICENSE.txt for more information.

## Contact
Denitsa Dimitrova, email: dimitrova.denise@gmail.com

Project Link: https://github.com/DeniD-star/Pizza-app.git

## App deployed on Firebase

Links: 
https://pizza-app-project.firebaseapp.com/
https://pizza-app-project.web.app/



