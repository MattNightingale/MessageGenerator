// generate random number

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

console.log(randomNumber(4));

// random message data

const whatToDoToday = {
    weather: ['sunny', 'rainy', 'windy', 'snowy'],
    energy: ['tired', 'normal', 'buzzing', 'hyper'],
    activity: ['ski', 'cycle', 'read', 'walk the dog', 'go for dinner'],
    company: ['a friend', 'Wilbur', 'your partner', 'no one']
}

// to randomise each data array


   let randomWeather = whatToDoToday.weather[randomNumber(whatToDoToday.weather.length)];
   let randomEnergy = whatToDoToday.energy[randomNumber(whatToDoToday.energy.length)];
   let randomActivity = whatToDoToday.activity[randomNumber(whatToDoToday.activity.length)];
   let randomCompany = whatToDoToday.company[randomNumber(whatToDoToday.company.length)];


function whatShallIDo() {
    console.log(`The weather is ${randomWeather} and your energy is ${randomEnergy}. You should ${randomActivity} with ${randomCompany}!`);
}

whatShallIDo();