#   G e n i h u b 
# Installing Dependencies for Client and Server Directories

## 1- Client Directory

To install the dependencies for the client directory, follow these steps:

1. Open your terminal and navigate to the client directory:
   
 ```  
cd client
```

2. Run the following command to install the `react-router-dom` package:
```
npm install react-router-dom
```
3. Run the following command to install the `Thailwind-css` package:

```
npm install -D tailwindcss postcss autoprefixer
```
then run this next command
```
npx tailwindcss init -p
```

4. then go to the `tailwind.config.js` then replace the content : [] with the following code :
 ```
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
5. copy this thailwind code then past it in the `index.css` of the vite env:
   ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
   ```

This will install the necessary dependencies for client-side routing in your React application.

## 2- Server Directory

To install the dependencies for the server directory, follow these steps:

1. Open your terminal and navigate to the server directory:

```
cd server
```
2. Run the following command to install the required packages:
```
npm install nodemon jsonwebtoken mongoose bcrypt express
```

# for the memebers collaborators : 
## if you added new dependencies on this project or any changes please add them here .
