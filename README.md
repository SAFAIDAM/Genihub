# Genihub
### project Guide: 
#### first this project is a smalle community project (private one) that allows the platform users communicate with each others and create a com env between them. 
#### this project is using `node.js` `v18.17.0 version`. 
## Installing Dependencies for Client and Server Directories

## Client Directory

### To install the dependencies for the client directory, follow these steps:

#### 1. Open your terminal and navigate to the client directory:

```javascript
cd client
```

#### 2. Run the following command to install the `react-router-dom` package:

```javascript
npm install react-router-dom
```
#### 3. Run the following command to install the `Thailwind-css` package:

```javascript
npm install -D tailwindcss postcss autoprefixer
```
#### then run this next command:

```javascript
npx tailwindcss init -p
```

#### 4. then go to the `tailwind.config.js` then replace the content : [] with the following code :

```javascript
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
#### 5. copy this thailwind code then past it in the `index.css` of the vite env:
```javascript
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### This will install the necessary dependencies for client-side routing in your React application.

## Server Directory
### To install the dependencies for the server directory, follow these steps:

#### 1. Open your terminal and navigate to the server directory:
```javascript
cd server
```

#### 2. Run the following command to install the required packages:

```javascript
npm install nodemon jsonwebtoken mongoose bcrypt express
```

# for the memebers collaborators : 
## if you added new dependencies on this project or any changes please add them here .
