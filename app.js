// require modules
require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');
const chalk = require('chalk');

// import api
const weatherKey = process.env.WEATHER_API_KEY;
const coordinatesKey = process.env.COORDINATES_API_KEY;

// initialize arguments
let arguments = {
  locationInput: process.argv[2],
  flag: '',
}

// check for flag
if (process.argv[3] === '-f' || process.argv[3] === '-farhenheit') {
  arguments.flag = 'f';
} else if (process.argv[3] === '-c' || process.argv[3] === '-celsius') {
  arguments.flag = 'c';
}

// initialize variables
let name = '';

// geocoding api url
let coordinatesUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${arguments.locationInput}.json?access_token=${coordinatesKey}`;

// fetch the weather function
const getWeather = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    if(json.cod === 401) {
      console.log(chalk.red.bold('There is a problem with your openweathermap API key, please check that the key is correct and active'));
      return;
    }
    parseWeatherResponse(json);
  } catch (error) {
    console.log(error);
  }
}

// fetch the coordinates and then fetch the weather
const getCoordinates = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    if(json.message === 'Not Authorized - Invalid Token') {
      console.log(chalk.red.bold('There is a problem with your mapbox API key, please check that the key is correct and active'));
      return;
    }
    let lat = json.features[0].center[1];
    let lon = json.features[0].center[0];
    name = json.features[0].place_name;
    getWeather(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${weatherKey}`);
  } catch (error) {
    if(error.name === 'TypeError') {
      console.log(chalk.red.bold('The location you have entered is not valid, please enter a valid location'));
    } else {
      console.log(error);
    }
  }
};

// logs the data and updates message.txt
const parseWeatherResponse = (data) => {
  let currentCondition = data.current.weather[0].description;
  let dailyCondition = data.daily[0].weather[0].description;
  let celsiusTemp = (data.current.temp - 273.15).toFixed(2);
  let fahrenheitTemp = ((celsiusTemp / 5) * 9 + 32).toFixed(2);
  let firstLine = '';
  if (!arguments.flag) {
    firstLine = `Current temperature in ${name} is ${celsiusTemp}C - ${fahrenheitTemp}F.\n`;
    console.log(chalk`{bold Current temperature in} {yellow.bold ${name}} {bold is} {magenta.bold ${celsiusTemp}C - ${fahrenheitTemp}F}.`);
  } else if (arguments.flag === 'f') {
    firstLine = `Current temperature in ${name} is ${fahrenheitTemp}F.\n`;
    console.log(chalk`{bold Current temperature in} {yellow.bold ${name}} {bold is} {magenta.bold ${fahrenheitTemp}F}.`);
  } else if (arguments.flag === 'c') {
    firstLine = `Current temperature in ${name} is ${celsiusTemp}C.\n`;
    console.log(chalk`{bold Current temperature in} {yellow.bold ${name}} {bold is} {magenta.bold ${celsiusTemp}C}.`);
  }
  console.log(chalk`{bold Conditions are currently:} {green.bold ${currentCondition}}\n{bold What you should expect:} {green.bold ${dailyCondition}} {bold throughout the day.}`);
  let message = firstLine + `Conditions are currently: ${currentCondition}\nWhat you should expect: ${dailyCondition} throughout the day.\n\n`;
  fs.appendFile('message.txt', message, (err) => {
    if (err) throw err;
  });
};

getCoordinates(coordinatesUrl);
