/* Create a function "weatherForecast" with two parameters "city" and "weather".

If second argument is absent, "weather" parameter should get value "Great weather!".

1. First solve this WITHOUT default function parameter.
2. Comment previous solution and solve same task WITH default function parameter.

NOTE: Carefully compare your results with test calls results
*/

//* 1. First solve this WITHOUT default function parameter.
const weatherForecast1 = (city, weather) => {

	weather !== undefined ? weather : weather = "Great weather";

	return `previsão do tempo para ${city}: ${weather}`;
};

console.log(weatherForecast1("Dubai", "Sunny"));
// Weather forecast for Dubai: Sunny

console.log(weatherForecast1("London", "Light rain"));
// Weather forecast for London: Light rain

console.log(weatherForecast1("Paris"));
// Weather forecast for Paris: Great weather!

console.log(weatherForecast1("Miami", ""));
// Weather forecast for Miami:

console.log(weatherForecast1("Las Vegas", undefined));
// Weather forecast for Las Vegas: Great weather!

separador();

//* 2. Comment previous solution and solve same task WITH default function parameter.
const weatherForecast2 = (city, weather = "Great weather") =>
	`previsão do tempo para ${city}: ${weather}`;

console.log(weatherForecast2("Dubai", "Sunny"));
// Weather forecast for Dubai: Sunny

console.log(weatherForecast2("London", "Light rain"));
// Weather forecast for London: Light rain

console.log(weatherForecast2("Paris"));
// Weather forecast for Paris: Great weather!

console.log(weatherForecast2("Miami", ""));
// Weather forecast for Miami:

console.log(weatherForecast2("Las Vegas", undefined));
// Weather forecast for Las Vegas: Great weather!

function separador() { console.log("-------------------------------------"); }
