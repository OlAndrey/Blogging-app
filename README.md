# Blogging-app
A small post application built on MERN. With authorization and the ability to create, modify and delete posts, and attach images to them. Also their comments. Counting the number of post views and displaying them.

## Technologies and Libraries Used :
- [MongoDB](https://cloud.mongodb.com/) - document database.
- [Express](https://expressjs.com/) - Node.js web framework.
- [React](https://reactjs.org/) - a client-side JavaScript framework.
- [Node.js](https://nodejs.org/) - the premier JavaScript web server.
- [Redux](https://redux.js.org/) - a state management library that allows developers to manage the state of an application in a centralized store.
- [Cloudinary](https://cloudinary.com/) -  provides cloud-based image and video management services.
- [jsonwebtoken](https://redux.js.org/) - a way of securely transmitting information between parties as a JSON object.
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - a password-hashing function used for password storage in web applications.
- [Material-UI(MUI)](https://v4.mui.com/) - a popular React component library that provides pre-designed, customizable UI components.

The project was also developed with the help of [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

## Getting Started
To get a local copy up and running follow these simple example steps.

  ```
  $ git clone git@github.com:OlAndrey/Blogging-app.git
  $ cd blogging-app
  ```
  - Create a `.env` file in the backend directory
  - MONGODB_URL - Insert the correct connection URL for your MongoDB database

    `mongodb+srv://<username>:<password>@<username>.fxrpe.mongodb.net/BlogDB?retryWrites=true&w=majority`
   
  - JWT_SECRET - is a secret key used to sign JSON Web Tokens (JWTs) to ensure that the data in them can be trusted and has not been altered. 
  
  - CLOUDINARY - used to store images attached to posts.
  
    `CLOUDINARY_CLOUD_NAME : cloud_name`

    `CLOUDINARY_API_KEY : api_key` 

    `CLOUDINARY_API_SECRET : api_secret`
  
#### Backend
- cd into backend and write npm install or npm i in command terminal

  ```
  $ cd server
  $/server npm install
  ```

- Write npm run dev to start the backend server

  ```
  $/server npm run dev
  ```

#### Frontend
- cd into my-project and write npm install or npm i in command terminal

  ```
  $ cd client
  $/client npm install
  ```

- Write npm start to start the react server

  ```
  $/client npm start
  ```

## [Project Live Link](https://blogging-app-li92.vercel.app/)

## Working

### HomePage

User can view articles by other users and login/signup to our website.

![](https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706624/snapshot-1_lnudgx.png)

### Login Page

User can login to our website. If user is not found, error is generated .

![](https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706623/snapshot-2_khi1zw.png)

### SignUp Page

User can signup to our website. No two user can have same email id.

![](https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706623/snapshot-3_r04yjm.png)

### Add Article Page

After logging in user can post article or comment on other articles to our website.

![](https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706623/snapshot-4_vbtcwa.png)

### Article Page

User can see full article and comment on the article.

![](https://res.cloudinary.com/dtpqmlah5/image/upload/v1682706623/snapshot1_glsglq.png)

## Support

Reach out to me at one of the following places!

- Email at <a href="mailto:oleynik.andrey01@gmail.com">`oleynik.andrey01@gmail.com`</a>
