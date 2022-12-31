## Adopt a Pet!

In this project, you will be building a pet adoption website that allows users to view all the adoptable pets of a particular species and view the profiles of specific adoptable pets.

NOTE: This project is meant to be written using React Router v5. React Router v6 introduces breaking changes and the project will not work using these instructions if install with v6 via the default `command npm install react-router-dom`.

1. Install Dependencies
```
npm install
```

2. Install `react-router-dom`
```
npm install --save react-router-dom@5.2.0
```

3. Go to **package.json** and under scripts change from: 
```
"start": "react-scripts start",
```

to:
```
"start": "react-scripts --openssl-legacy-provider start"
```

To check that the installation was successful, ensure that react-router-dom appears in the "dependencies" object located within the project’s package.json file.

