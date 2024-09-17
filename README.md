# This is the SocialAI frontend. It works with SocialAI backend

## Design and implement a social network web application with React JS
## Use OpenAI's Dall-E 3 to assist users to create and update posts
## Improve the authentication using token based registration/login/logout flow with React Router v4 and server-side user authentication with JWT


## Necessary dependency to install:
`npm i react-router-dom@6`
`npm install @mui/material @mui/styled-engine-sc styled-components @mui/icons-material @emotion/react @emotion/styled`
`npm i antd@4`
`npm i axios@1.6.7`
`npm i yet-another-react-lightbox@3.19.0 react-photo-album@2.3.1`
`npm i http-proxy-middleware@3.0.0`

## run frontend
`npm start`

## deploy to cloud
1. run npm run build command in your terminal. This will create a build folder and we will later use this folder to deploy our front-end app.
2. log in to amazon AWS
3. search for `AWS Amplify`
4. select New app > Host web app
5. Select Deploy without Git provider and Continue
6. Give it an App name. Select Drag and drop as method, and drag drop build folder there
