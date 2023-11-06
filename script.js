//1 - canIVote()
const canIVote = age => age >= 18 ? true : false;

// 2 - agreeOrDisagree()
// Écrivez une fonction, `agreeOrDisagree()`, qui prend deux chaînes et renvoie `'You agree!'` si les deux chaînes sont identiques et `'You disagree!'` si les deux chaînes sont différentes.

const agreeOrDisagree = (string1, string2) => string1 === string2 ? 'You agree!' : 'You disagree!';

// ### 3 - lifePhase()
// Écrivez une fonction, `lifePhase()`, qui prend en compte l'age , d'une personne sous forme de nombre et renvoie la phase de sa vie dans laquelle elle se trouve.

// Voici les classifications :
// 0-3 devrait renvoyer `'baby'`
// 4-12 devrait renvoyer `'child'`
// 13-19 devrait renvoyer `'teen'`
// 20-64 devrait renvoyer `'adult'`
// 65-140 devrait renvoyer `'senior citizen'`
// Si le nombre est inférieur à 0 ou supérieur à 140, le programme devrait renvoyer `'This is not a valid age'`

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