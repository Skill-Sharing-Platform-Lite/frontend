# Skill-Sharing Platform Front-End

**Welcome to the Skill-Sharing Platform project! 🎉**
This repository contains the **front-end** code for the Skill-Sharing Platform, built using React.js. This part of the application handles the user interface and connects to the back-end to provide data and functionality.

## 📋 Prerequisites

Before you start, make sure you have the following installed on your computer:

1. [Node.js](https://nodejs.org) (Version 14 or higher)
2. [Git](https://git-scm.com/)
3. A code editor like [VS Code](https://code.visualstudio.com/)

## Features

- User-friendly pages for Login, Home, Matchmaking, and Profile Management.
- Search and filter skills dynamically.
- Profile viewing and many more

## Tech Stack

- **React.js**: For building the user interface.
- **Axios**: For connecting to the back-end API.
- **Tailwind CSS**: For styling.

## Getting Started

### Step 1: Clone the Repository

Copy the front-end repository to your local machine:

```
git clone https://github.com/Skill-Sharing-Platform-Lite/frontend.git
cd frontend

```

### Step 2: Install Dependencies

Install the tools needed to run the front-end:

```
npm install
```

### Step 3: Start the App

run the app locally

```
npm start
```

This will open the app in your browser at **http://localhost:3000**.

## 🌐 Connecting to the Back-End

To make the front-end communicate with the back-end:

Open the package.json file then Add this line:

```
"proxy": "http://localhost:5000"
```

**NOTE** only add the above line if your package.json doesn't have one

After that Save the file and restart the front-end:

```
npm start
```

## 📂 Folder Structure

Here’s how the code is organized:

```/frontend
├── /src
│   ├── /components       # Reusable UI components
│   ├── /pages            # Main pages
│   ├── /services         # API handling
│   └── App.js            # Main app setup
├── public
├── node_modules
├── package.json
├── package-lock.json
└── .gitignore
```

## 🔧 Common Commands

### to Start the App:

`npm start`

### To Install a New Tool:

`npm install <tool-name>`

**To Stop the App**: Press **Ctrl + C** in the terminal where the app is running.

## ❓ Need Help?

If things are unclear or If you have questions or face issues, please ask on our group chat.
