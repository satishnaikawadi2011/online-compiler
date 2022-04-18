<p align="center">
  <a href="https://compilateur-client-prod.vercel.app/" target="_blank">
    <img 
      src="https://res.cloudinary.com/dyfm31f1n/image/upload/v1650257618/compilateur/text-icon-logo_zq9ehe.png"
      alt="Compilateur"
      title="Compilateur"
      width="500"
    />
    <br/>
  </a>
</p>

<h1 align="center">COMPILATEUR</h1>
 <p align="center">
    Run your source code on your <strong>browser</strong> itself without any environment setup</b> .
    <br />
    <br />
    <a href="https://compilateur-client-prod.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/satishnaikawadi2011/online-compiler/issues">Report Bug</a>
    ·
    <a href="https://github.com/satishnaikawadi2011/online-compiler/issues">Request Feature</a>
  </p>

<p align="center">
  <a href="https://compilateur-client-prod.vercel.app/" target="_blank">
<img src="https://res.cloudinary.com/dyfm31f1n/image/upload/v1650260098/compilateur/home-ss_lklngw.png" title="Compilateur" alt="Compilateur"/>
</a>
</p>

## Table of Contents
- [Project Breakdown](#project-breakdown)
- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Features](#features)
  - [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contact](#maintainer)
- [Support](#support)
- [License](#license)
- [Deployment](#deployment)

## Project Breakdown
### 🗂️`client` - Holds the client application
- #### `.storybook` - This holds all of our storybook configuration files
- #### `src`
    - #### `api` - This folder holds API configuration and endpoints for communicating to server 
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `constants` - This folder holds constant variables used throughout the client application
    - #### `hooks` - This folder holds the custom react hooks used in the projects
    - #### `icons` - This folder holds all of the different custom icons
    - #### `pages` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `store` - This folder holds the different components and functions related to global state of the application
    - #### `styles` - This folder holds styling related files such as Provider,types,themes,etc.
    - #### `types` - This folder holds some of the custom type definitions used in the client app.
    - #### `App.tsx` - This is what renders all of our browser routes and different pages
    - #### `main.tsx` - This is what renders the react app by rendering App.tsx, should not change
- #### `index.html` - Single HTML page of our application to render different components
- #### `package.json` - Defines npm behaviors and packages for the client
- #### `tsconfig.json` - Specifies the root files and the compiler options required to compile the project.

### 🗂 `src`
- #### `box` - This folder holds the file related to command execution
- #### `constants` - This folder holds constant variables used throughout the server application
- #### `controller` - This folder holds controllers for different API endpoints
- #### `languages` - This folder holds logic to compile and run different programming languages on server
- #### `routes` - This folder holds the different API routes
- #### `types` - This folder holds some of the custom type definitions used in the server app.
- #### `utils` - This folder holds some utilities used in server app like custom types,utility functions,etc.
- #### `app.ts` - This file is the entry file of application and holds express server setup
- #### `execute-command.ts` - This file holds the function to execute commands with `child_process` module

###  🐳`.dockerignore` - Tells docker which files to ignore

###  🐳`Dockerfile` - Contains all the commands a user could call on the command line to assemble an image
    
### 📦️`package.json` - Defines npm behaviors and packages for the server

### 🔧`tsconfig.json` - This file specifies the root files and the compiler options required to compile the server app.

### 🙈`.gitignore` - Tells git which files to ignore

### 📝`README.md` - This file!

## About The Project
The motivation behind this project was that I wanted to know about how online judges on different coding platforms works and run the source codes in the browser. So for that reason I started researching on how can I built something like that in Node JS and then I created the REST API for the same with express and node.

So this project will enable anyone who has access to internet and any web browser to compile and run source codes of various languages like C,C++,Java,Python,Javascript (Node JS),Golang,Rust,Ruby,Elixir,etc. without any environment setup on their local machine.


### Built With

- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

### Features

- REST API created from scratch with Express JS and Node JS
- Can compile and run 9 different programming languages
- Uses docker container for smooth development flow
- Fast and robust Client application created with React JS
- Use of styled-components for styling react components
- Easily give user inputs to source code through Input Modal
- Testing of react components with JEST testing framework
- Use of storybook to test UI components in isolation

### Screenshots

##### 1. Options to Choose Programming Language You Want To Run
<p align="center">
<img src="https://res.cloudinary.com/dyfm31f1n/image/upload/v1650260098/compilateur/editor-options_py8lft.png" title="Compilateur" alt="Compilateur"/>
</p>

##### 2. Easily give user inputs to source code through Input Modal
<p align="center">
<img src="https://res.cloudinary.com/dyfm31f1n/image/upload/v1650260098/compilateur/editor-input_luoy08.png" title="Compilateur" alt="Compilateur"/>
</p>

##### 2. Run and See Output Results
<p align="center">
<img src="https://res.cloudinary.com/dyfm31f1n/image/upload/v1650260098/compilateur/result_ascxng.png" title="Compilateur" alt="Compilateur"/>
</p>

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- Docker
 - [Windows Installation](https://runnable.com/docker/install-docker-on-windows-10)
 - [Mac Installation](https://docs.docker.com/desktop/mac/install/)
 - [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
 
- NPM

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/satishnaikawadi2011/online-compiler
```

2. Install NPM packages for Server

```sh
npm install
```

3. Install NPM packages for Client

```sh
cd client
npm install
```

## Usage

The primary goal of this project is to help you run your source code on mobile or desktop or any other device in your browser itself without any environment setup.

_For more examples, please refer to the [Working Demo](https://compilateur-client-prod.vercel.app/)_

## Roadmap

See the [open issues](https://github.com/satishnaikawadi2011/online-compiler/issues) for a list of proposed features (and known issues).

## Maintainer
Important decisions regarding the project are taken by the following maintainer.

| Satish        |
| :-------------: |
| <img  height="100" width="100" src="https://res.cloudinary.com/dyfm31f1n/image/upload/v1650221859/github-profile/me-github_yumapj.jpg">      |
| [@satishnaikawadi2011](https://github.com/satishnaikawadi2011)      |
## Support

<a href="https://www.buymeacoffee.com/satishnaikawadi" target="_blank">
  <img src="https://res.cloudinary.com/dyfm31f1n/image/upload/v1649760399/repopup/bmc-button_bridqp.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

## License

**Compilateur** is licensed under the [MIT License](https://github.com/satishnaikawadi2011/online-compiler/blob/main/LICENSE).

## Deployment
<a href="https://compilateur-client-prod.vercel.app/"><img src="https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge"/></a>