# chingu_weather_CLI

## Overview

This app is the solo-project for [chingu](https://www.chingu.io/) Voyage 20.

chingu_weather_CLI is a Node.js command line application to fetch weather informations based on user input. 

The retrieved informations will be shown in the console and saved in a message.txt file.

## Getting started

Clone the repository using:

```bash
git clone https://github.com/4high20/chingu_weather_CLI.git
```

or download it directly from this page:

![console](https://i.ibb.co/yXRLVcB/Screenshot-2020-05-22-at-19-09-04.png)

Install the dependencies using:

```bash
npm install
```

To use this application you will need to have API keys for openweathermap and mapbox, the two APIs that are used in this project.

If you don't have it already you can create a free account using the links below:

https://home.openweathermap.org/users/sign_up

https://account.mapbox.com/auth/signup/

After you have both API keys, you will need to create a .env file on the root directory of the project with the following code:

```
WEATHER_API_KEY="Your_openweathermap_key"
COORDINATES_API_KEY="Your_mapbox_key"
```

If your anxious to retrieve weather informations and don't feel like creating an account you can use the following test API keys:
```
WEATHER_API_KEY="807aea133e809d8a1b908020d71319c6"
COORDINATES_API_KEY="pk.eyJ1IjoibWFyY29ydWdnZXJpIiwiYSI6ImNrYWdqYTZxZTA3M3Yyc28weXRpd3h4cTQifQ.i35BFAUofjynBwxXvlW4hQ"
```

You are now set to start retrieving weather data!

## Usage

The first argument should be the location for which we want to retrieve the weather informations.

```js
node app.js london
```
![console](https://i.ibb.co/yhNXL42/Screenshot-2020-05-22-at-07-17-15.png)

A flag can be added as a second argument to retrieve the temperature only for the selected scale(Celsius or Fahrenheit).

Examples:

```js
node app.js london -f, -fahrenheit
```
![console](https://i.ibb.co/7bfjs4p/Screenshot-2020-05-22-at-07-17-33.png)

```js
node app.js london -c, -celsius
```
![console](https://i.ibb.co/5Tzswb9/Screenshot-2020-05-22-at-07-17-49.png)

You can enter the name of a City, a Region, even a whole Nation! 

Note a default will be selected if you do not place input within quotes.
(add screenshot between `node app.js "new j" -f` and `node app.js "new j -f`)


```js
node app.js Florida
```
![console](https://i.ibb.co/9ZxtLTs/Screenshot-2020-05-22-at-19-59-55.png)
```js
node app.js UK
```
![console](https://i.ibb.co/X31hBXr/Screenshot-2020-05-22-at-20-00-18.png)

If you make a mistake in the input the app will automatically guess what you were looking for:

```js
node app.js lond
```
![console](https://i.ibb.co/yhNXL42/Screenshot-2020-05-22-at-07-17-15.png)

```js
node app.js londion
```
![console](https://i.ibb.co/yhNXL42/Screenshot-2020-05-22-at-07-17-15.png)

## Error handling

The app will display user friendly error based on the situation.

If there is a problem with one of the API key, the app will log:

![console](https://i.ibb.co/fqMDH8w/Screenshot-2020-05-22-at-20-11-47.png)

While if you enter an invalid location you will receive:

![console](https://i.ibb.co/w4H07Lf/Screenshot-2020-05-22-at-20-12-51.png)

## Dependencies

* I've used [dotenv](https://www.npmjs.com/package/dotenv) to hide the API keys in a .env file
* [node-fetch](https://www.npmjs.com/package/node-fetch) is used to fetch the APIs used in this app
* [chalk](https://www.npmjs.com/package/chalk) makes the logs more visually appealing