# React Native - User Authentication Flow with React Navigation 4

Aim of this repository is to make basic understand of how the user authentication works. You can find more details on my [blog post](https://webomnizz.com/react-navigation-switch-navigator-and-authentication-flow/).

[![Authentication Flow Gif](https://i.ytimg.com/vi/W2ZodOXowXA/hqdefault.jpg)](https://youtu.be/W2ZodOXowXA)

Requirements
* [expo-cli](https://facebook.github.io/react-native/docs/getting-started)
* [React Navigation 4](https://reactnavigation.org/docs/en/getting-started.html#install-into-an-existing-project)
* [React Navigation Stack](https://github.com/react-navigation/stack)
* [React Navigation Tabs](https://github.com/react-navigation/tabs)

Navigate the project directory and run ```npm install```. After downloading the required packages run ```npm start```.

> Please don't forget to update the API codes to **/src/screens/auth/SigninScreen.js**

```js
const response = await fetch(`https://c282a758.ngrok.io/api/login`, {
    method: 'POST', 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }, 
    body: formData
})
```