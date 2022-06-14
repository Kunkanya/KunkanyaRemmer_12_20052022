![Create react app](https://img.shields.io/badge/build_with-create_react_app-09D3AC?style=for-the-badge&logo=Create-React-App)
![NodeJs](https://img.shields.io/badge/Node.js-16.14.0-339933?style=for-the-badge&logo=Node.js)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

![SportSee Logo](src/asset/logo.png)


The SportSee app will show the user's profile page for sport activities. The dashboard page will allow the user to track number of sessions performed as well as the number of calories burned by sport activity

# Table of contents #
1. [General information](#General)
2. [Pre-requisites](#Pre-requisites)
3. [How to run this project](#runProject)
4. [JSDoc](#JSDoc)

## 1. <a name="General">General information </a>
Sportsee is a project 12 from Openclassroom for Front-end developer course.
For this project, I use [**React**](https://reactjs.org/) to create an application ,also [**axios**](https://github.com/axios/axios) to call API Back-end and [**Recharts**](https://recharts.org) to create the graphics. 

## 2.<a name="Pre-requisites">Pre-requisites</a> 

- [NodeJS (at least **version 14.17**)](https://nodejs.org/en/)
- [Yarn (**version 1.22.15**)](https://yarnpkg.com/)
- [Npm (at least **version 6.14.13**)](https://docs.npmjs.com/cli/v6/commands/npm-install)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## 3.<a name="runProject">How to run this project</a> 
 
   ### 3.1 Back-end 
   
   In order to use Backend please follow the steps below.
- Fork the repository from OpenClassroom https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
- Clone it on your computer.
- The **`$ yarn`** command will allow you to install the dependencies.
- The **`$ yarn run dev`** command will allow you to run the micro API. It will be run on port http://localhost:3000.
- How to use Back-end. Please follow the instructions in the **README.md** file in that repository.

### 3.2 Front-end
- Fork this repository https://github.com/Kunkanya/KunkanyaRemmer_12_20052022
- Clone it on your computer
- The **`$ npm install `** allow you to install npm.
- The **`$ npm install axios`** allow you to install axios.
- The **`$ npm start`** command in the terminal will allow you to run the app in the development mode. Open http://localhost:8000 to view it in your browser.

### 3.3 API and Mock Database
This app can be retrieved data from 2 differents sources which are from API (Back-end) or from Mock Database which is in the directory **`'../src/asset/data.json'`**
  
**Use Mock Database**
- To use mock data please go to the file **`'../src/service/Api/Axios.jsx'`** 
- Go to line **`13`** and set the variabel : **`mock_env = true`**

**Use Back-end** 
- To get data from Back-end please go to the file **`'src/service/Api/Axios.jsx'`** 
- Go to line **`13`** and set the variabel : **`mock_env = false`**

## 4.<a name="JSDoc">JSDoc</a>

This project use JSDoc for API documentation.
You can open **`'doc/index.html'`** with live-server in your browser to see details.  