# chingu_weather_CLI

chingu_weather_CLI is a Node.js command line application to fetch weather informations based on user input. 

The retrieved informations will be shown in the console and saved in a message.txt file.

## Getting started

Download the files from the repository or clone it.

Install the dependencies.

```bash
npm install
```

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