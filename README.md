<a name="readme-top"></a>

<div align="center">
<br/>

  <h3><b>Microverse README Template</b></h3>

</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 [Metrics-webapp] <a name="about-project"></a>

> Hi!
**[Metrics-webapp]** is a single webpage created with React and Redux that allow users to get information about Covid cases by Continents. This webapp uses corona.lmao.ninja Api.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>
- HTML
- CSS
- JavaScript
- React
- Webpack
- Linters
- Jest
- React Library
- Redux

### Key Features <a name="key-features"></a>
- **[Home page.]**
- **[Details page.]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](No deployment yet)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps:

### Prerequisites

In order to run this project you need:

- Internet connection and browser
- A source code editor(preferably Visual Studio Code)
- Browser
- Install nodeJS along with NPM
- Interactions
  - Home page
    - When the page loads, the webapp shows the list of categories that could be filtered out by some parameter, for example by the category name.
    - Along with the category name, you will display some numeric values per category that come from the API.
    - When the user clicks (or taps) on a category item, the application navigates to the details page.

  - Details page
    - In the details page, the webapp retrieves data from the API to show detailed data in the category.
    - When the user clicks on the "Back" button (<), the user navigates to the home page.

- Testing requirements
  - Create unit tests for pure functions in your Redux code.
  - Create integration tests for your application using the React Testing Library.
    - You may need to mock the access to the API, so that your tests don't send actual requests.
    - You may need to mock the connection to the Redux Store.

- Technical requirements
  - The project is a single-page application (SPA) built with React and Redux.
  - The data retrieved from the API should be stored in the Redux store.
  - You should filter the data that you retrieve from the API using a Filter stateless component.
  - Every page (the main page and the pages for each item) should have a unique route within the SPA.
  - The project should be deployed and accessible online (add a link to the online version of your app to your README file.

Setting up this project locally:
#### On your terminal:
- Clone this repository to your computer: https://github.com/ONJoseph/metrics-webapp.git
- Open the project on your code editor: "cd metrics-webapp" and "code ."
- Install npm package: npm install.
- Run website: npm run start.

-Local environment with `https://github.com/ONJoseph/metrics-webapp.git`

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install

Install this project with:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)
- Run `npm i` on the root of the project and you're good to go. All of the necessary packages will be installed for you!

### Usage

To run the project, execute the following command:

- Clone the repository using `https://github.com/ONJoseph/metrics-webapp.git`
- Change directory into the project folder: `cd metrics-webapp`
- Run `npm install`
- Run `npm start`
- A new browser will open automatically with application loaded

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

You can deploy this project using:

- Run `npm run build` for Webpack to generate the dist files corresponding to your actual /src file

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="Joseph Ogbole"></a>

- GitHub: [@ONJoseph](https://github.com/ONJoseph)
- Twitter: [@ONJoseph1](https://twitter.com/ONJoseph1)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/o-n-joseph-ba8425147/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Project 2: Add reducers and actions.**
- [ ] **Project 3: Use Redux in React components.**
- [ ] **Project 4: Connect to API.**
- [ ] **Project 5: Styling.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ONJoseph/metrics-webapp/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project please give a ⭐️ to show your support!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank:

- [Microverse](https://www.microverse.org/)
- Code Reviewers
- Coding Partners
- Microverse README template.
- Original design idea by [Nelson Sakwa](https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)) in Behance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/ONJoseph/metrics-webapp/blob/Day1/LICENCE.md) licensed.
