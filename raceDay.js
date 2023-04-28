let raceNumber = Math.floor(Math.random() * 1000);


let registeredEarly = false;
let runnerAge = 18;

if (runnerAge >= 18 && registeredEarly) {
    raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
    console.log(`Your race starts ant 9:30 am and your race number is ${raceNumber}`);
} else if ( runnerAge > 18 && !registeredEarly) {
    console.log(`Your race starts ant 11:00 am and your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log(`Your race starts ant 12:30 am and your race number is ${raceNumber}`);
} else {
    console.log('See the registration desk');
}