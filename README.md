# chingu_weather_CLI

chingu_weather_CLI is a Node.js command line application to fetch weather informations based on user input. 

The retrieved informations will be shown in the console and saved in a message.txt file.

## Getting started

Download the files from the repository or clone it.

Install the dependencies.

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
node app.js london -f
```
![console](https://i.ibb.co/7bfjs4p/Screenshot-2020-05-22-at-07-17-33.png)

```js
node app.js london -celsius
```
![console](https://i.ibb.co/5Tzswb9/Screenshot-2020-05-22-at-07-17-49.png)
