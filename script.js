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

// ### 4 - finalGrade()
// Écrivez une fonction, `finalGrade()`. Cela devrait:

// prendre trois arguments de type numéro
// trouve le `averagede` ces trois nombres
// renvoie la note de la lettre (sous forme de chaîne) à laquelle `averagecorrespond`
// return `Vous avez entré une note invalide.` si l'une des trois notes est inférieure à 0 ou supérieure à 100
// 0-59 devrait revenir : `F`
// 60-69 devrait revenir : `D`
// 70-79 devrait revenir : `C`
// 80-89 devrait revenir : `B`
// 90-100 devrait revenir :`A`

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