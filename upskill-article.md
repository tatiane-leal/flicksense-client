# Tatiane Sala - Upskill (MEAN Stack) + Tabnine as AI Assistant

[![MongoDB](https://img.shields.io/badge/-MongoDB-4DB33D?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)[![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)[![Angular](https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io/)[![Node.js](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)[![Tabnine](https://img.shields.io/badge/-Tabnine-6C63FF?style=flat-square&logo=tabnine&logoColor=white)](https://www.tabnine.com)

## **Introduction**
The purpose of this article is sharing what I'm learning during my bench time at 3Pillar Global. I'm using this idle time to brush-up my existing Angular skills by discovering what's new on Angular 17 and also learning Express.js, MongoDB (NoSQL) and Node.js with the intent of becoming a Full Stack Developer and contribute even more on my next project assigment at 3Pillar Global.

## **Technologies summary**
To acquire knowledge in the MEAN stack, discover latest on Angular's new release and try Tabnine for VS Code, I opted for developing a Full Stack web application which I named **FlickSense**. Here's an overview of what it helped me learn so far:

# **Backend:**
### Node.js
- **Core Modules (HTTP, FS, Path)**: Fundamental Node.js modules enabling the creation of web servers (`HTTP` when not using Express.js), file system operations (`FS`), and handling file paths (`Path`).
- **NPM (Node Package Manager)**: The package manager for Node.js, used to install and manage third-party modules and dependencies.
- **Async/Await**: Syntax used to write asynchronous code in a more synchronous fashion, simplifying the handling of asynchronous operations.
- **Error Handling and Logging**: Techniques to effectively catch and manage errors in a Node.js application and record them for debugging and monitoring purposes.
- **Spread and Rest operators**: ES6 syntax for expanding elements into individual items (`Spread`) and combining multiple elements into a single array (`Rest`).

### Express.js
- **Server Setup and Configuration with Express.js**: Establishing a server and configuring it using Express.js, a minimal and flexible Node.js web application framework.
- **CORS / Allowed Origins**: Setting up Cross-Origin Resource Sharing in Express.js to control which domains are permitted to access resources on the server.
- **Middlewares**: Functions that have access to the request and response objects in Express.js, and can modify them or trigger the next function in the stack.
- **RESTful API Development (Adding CRUD endpoints (get / post / put / delete)**: Designing and implementing API endpoints following REST principles for creating, reading, updating, and deleting resources.

### MongoDB
- **Database Connection**: Establishing a connection between a Node.js application and a MongoDB database.
- **Mongo DB Schemas**: Defining the structure of documents within a MongoDB collection using schemas.
- **Mongo DB CRUD Operations (Find / FindOne)**: Implementing create, read, update, and delete operations in MongoDB, with methods like `find` and `findOne` for retrieving documents.

### JWT Authentication
- **Authentication and Authorization (JWT) with Bcrypt**: Securing a Node.js application by implementing JSON Web Token-based authentication and using Bcrypt for password hashing.

### Env
- **Setting up Environment Variables**: Using environment variables to manage configuration settings and increase security of secret keys.

### API Development and Testing Tools
- **Postman**: A comprehensive API platform for building, testing, documenting, and sharing APIs, featuring extensive collaboration tools and support for multiple protocols.

# **Frontend:** 
### Angular 17 (Brushing up and Discovering new features)
- **Stand Alone Components**: A new feature allowing components to be declared and used without an accompanying Angular module, simplifying app architecture.
- **Resolvers**: Services that pre-fetch data before activating a route, ensuring components have data upon initialization.
- **Route Guards**: Techniques for controlling navigation away from or to a route based on certain conditions, enhancing security and user experience.
- **ng-template and ng-container**: Angular directives for dynamic HTML rendering without creating additional DOM elements, aiding in conditional and structural templating.
- **HTTP Interceptors**: Services that intercept and modify HTTP requests and responses globally, useful for tasks like adding headers or handling errors.
- **RxJS operators**: Functional programming tools used in Angular for transforming, combining, and managing asynchronous streams of data.
- **Reactive Forms**: A model-driven approach to handling form inputs and validation, offering more control and flexibility.
- **Angular Material Components**: A collection of high-quality UI components built for Angular, facilitating the development of consistent, visually appealing interfaces.
- **How to inject Services without NgModule**: Techniques for providing services in Angular 17 without the need for an NgModule, streamlining service injection.
- **How to provide routes for the entire app without having the AppModule and RouterModule present**: Methods for defining application-wide routes in Angular 17 without relying on modules, enhancing the application.
- **How to provide Interceptors**: Strategies for registering HTTP interceptors globally or for specific modules in Angular applications.
- **How to avoid creating a new local instance of a service that was already provided in root**: Best practices for ensuring a single instance of a service is used application-wide, preventing duplicate instances.

#### Angular Material
- **Components**: Utilizing a wide range of UI components for rapid development.
- **Form Controls**: Managing form inputs and validation with pre-built components.
- **Layout**: Creating responsive layouts with Angular Flex-Layout integration.

#### Flexbox
- **Flex Container vs. Flex Items**: Differentiating parent (container) and child (items) flex properties.
- **Flex Direction**: Setting item flow with `flex-direction`.
- **Alignment**: Spacing and aligning items with `justify-content` and `align-items`.
- **Flex Wrap**: Managing multi-line item layouts with `flex-wrap`.
- **Flex Properties**: Adjusting item size and space distribution with `flex-grow`, `flex-shrink`, and `flex-basis`.

# **Project Overview**
**FlickSense** is a **MEAN** Full Stack Web Application that collects the user's review about a particular movie(s) and provides a sentiment analysis indicating if the user's review was happy, neutral or negative. To do that, the application integrates 3rd party API's such as TMDB (The Movie Database) for listing movies and OpenAI for analysing user's review and providing feedback.

| GitHub Repository | README |
| ------ | ------ |
| [FlickSense Client](https://github.com/tatiane-leal/flicksense-client) | [README](https://github.com/tatiane-leal/flicksense-client/blob/main/README.md) |
| [FlickSense Server](https://github.com/tatiane-leal/flicksense-server) | [README](https://github.com/tatiane-leal/flicksense-server/blob/main/README.md) |

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.



## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
   
   Check out these other articles to find out what else I've been learning:
    - SQL (Comming soon)
    - AI Concepts (Coming soon)
