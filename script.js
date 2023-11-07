//1 - canIVote()
const canIVote = age => age >= 18 ? true : false;

//2 - agreeOrDisagree()
const agreeOrDisagree = (string1, string2) => string1 === string2 ? 'You agree!' : 'You disagree!';

//3 - lifePhase()
const lifePhase = age => {
    if(age >= 0 && age <= 3){
        return 'baby';
    }else if(age >= 4 && age <= 12){
        return 'child';
    }else if(age >=13 && age <= 19){
        return 'teen';
    }else if(age >= 20 && age <= 64){
        return 'adult';
    }else if(age >= 65 && age <= 140){
        return 'senior citizen';
    }else {
        return 'This is not a valid age'
    };
};

//4 - finalGrade()
const finalGrade = (note1, note2, note3) => {
    //Vérification de la valeurs de chaque notes
    if(note1 < 0 || note1 > 100 && note2 < 0 || note2 > 100 && note3 < 0 || note3 > 100){
        return 'You have entered an invalid grade.';
    };
    let average = (note1 + note2 + note3) / 3;
    if(average >= 0 && average <= 59){
        return 'F';
    }else if(average >= 60 && average <= 69){
        return 'D';
    }else if(average >= 70 && average <= 79){
        return 'C';
    }else if(average >= 80 && average <= 89){
        return 'B';
    }else if(average >= 90 && average <= 100){
        return 'A';
    }else{
        return 'You have entered an invalid grade.';
    };
};

//5 - reportingForDuty()
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`;


//6 - calculateWeight()
const calculateWeight = (earthWeight, planet) => {
    switch(planet){
        case 'Mercury':
            return earthWeight * 0.378;
            break;
        case 'Venus':
            return earthWeight * 0.907;
            break;
        case 'Mars':
            return earthWeight * 0.377;
            break;
        case 'Jupiter':
            return earthWeight * 2.36;
            break;
        case 'Saturn':
            return earthWeight * 0.916;
            break;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
            break;
    };
};

//7 - truthyOrFalsy()
const truthyOrFalsy = valeur => {
    if(valeur){
        return true;
    }else{
        return false;
    };
};

//8 - numImaginaryFriends()
const numImaginaryFriends = nbFriends => Math.ceil(0.25 * nbFriends);

//9 - sillySentence()
const sillySentence = (adj, verb, noun) => `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;

// 10 - howOld()
const howOld = (age, year) => {
// The following two lines make it so that our function always knows the current year.
let dateToday = new Date();
let thisYear = dateToday.getFullYear();
// It is totally ok if your function used the current year directly!
const yearDifference = year - thisYear
const newAge = age + yearDifference
if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`
} else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`
} else {
    return `You were ${newAge} in the year ${year}`
}
}

//11 - tipCalculator()
const tipCalculator = (quality, total) => {
    if(quality === 'bad'){
      let tips = 0;
        tips = total * 1.05;
        return tips - total;
    }else if(quality === 'ok'){
         tips = total * 1.15;
        return tips - total;
    }else if(quality === 'good'){
        tips = total * 1.20;
        return tips - total;
    }else if(quality === 'excellent'){
        tips = total * 1.30;
        return tips - total;
    }else {
        tips = total * 1.18;
        return tips - total;
    }
}