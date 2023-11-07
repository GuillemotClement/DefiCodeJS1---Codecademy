
# ![logo chapeau diplôme](/ressource/diplomeCasquette.png) Défi de code JavaScript 1 - Codecademy
[Liens vers les consignes du projet](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-javascript-syntax-part-i/modules/fscj-22-practice-javascript-syntax-variables-data-types-conditionals-functions/lessons/javascript-fundamentals-code-challenge/exercises/introduction)


## ![Logo objectif](/ressource/objectif.png) Objectif 
Cet exercice permet de travailler sur les fonctions, les conditions en JavaScript.


## ![Logo consigne](/ressource/instruction.png) Consigne
Série de test proposé par Codecademy

### 1 - canIVote()
L'âge minimum le plus courant pour voter est de 18 ans. Écrivez une fonction `canIVote()` qui prend un nombre, représentant l'âge de la personne, et renvoie le booléen `true` si elle a 18 ans ou plus, et le booléen `false` si elle ne l'est pas.

### 2 - agreeOrDisagree()
Écrivez une fonction, `agreeOrDisagree()`, qui prend deux chaînes et renvoie `'You agree!'` si les deux chaînes sont identiques et `'You disagree!'` si les deux chaînes sont différentes.

### 3 - lifePhase()
Écrivez une fonction, `lifePhase()`, qui prend en compte l'age , d'une personne sous forme de nombre et renvoie la phase de sa vie dans laquelle elle se trouve.

Voici les classifications :
0-3 devrait renvoyer `'baby'`
4-12 devrait renvoyer `'child'`
13-19 devrait renvoyer `'teen'`
20-64 devrait renvoyer `'adult'`
65-140 devrait renvoyer `'senior citizen'`
Si le nombre est inférieur à 0 ou supérieur à 140, le programme devrait renvoyer `'This is not a valid age'`

### 4 - finalGrade()
Écrivez une fonction, `finalGrade()`. Cela devrait:

- prendre trois arguments de type numéro
- trouve le `averagede` ces trois nombres
- renvoie la note de la lettre (sous forme de chaîne) à laquelle `averagecorrespond`
- return `Vous avez entré une note invalide.` si l'une des trois notes est inférieure à 0 ou supérieure à 100
- 0-59 devrait revenir : `F`
- 60-69 devrait revenir : `D`
- 70-79 devrait revenir : `C`
- 80-89 devrait revenir : `B`
- 90-100 devrait revenir :`A`

Pour améliorer l'exo, créer des fonctions spécialisées pour chaque tâches

### 5 - reportingForDuty()
Write a function, `reportingForDuty()`, that has two string parameters, `rank` and `lastName`, and returns a string in the following format: `‘rank lastName reporting for duty!’`

### 6 - calculateWeight()
Écrivez une fonction, `calculateWeight()` qui prends deux paramètres : `earthWeight` `planet`
- `earthWeight` un numéro
- `planet` une chaîne

Cette fonction renvoie un nombre représentant ce à quoi ce poids terrestre équivaudrait à la `planettransmission`.

Gérez les cas suivants :
- '`Mercury`'poids = `earthWeight* 0,378`
- '`Venus`'poids = `earthWeight* 0,907`
- '`Mars`'poids = `earthWeight* 0,377`
- '`Jupiter`'poids = `earthWeight* 2,36`
- '`Saturn`'poids = `earthWeight* 0,916`
Pour toutes les autres entrées, retournez `Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.`

### 7 - truthyOrFalsy()
Il peut être difficile de savoir ce qui est vrai ou faux en JavaScript . Écrivez une fonction, `truthyOrFalsy()`, qui prend n'importe quelle valeur et renvoie `trues` i cette valeur est vraie et `false` si cette valeur est fausse .


### 8 - numImaginaryFriends()
Le nombre d’amis imaginaires d’une personne représente toujours 25 % (ou 1/4) du total de ses amis.

Écrivez une fonction, `numImaginaryFriends()`, qui prend en compte le nombre total d'amis d'une personne et renvoie le nombre d'amis imaginaires qu'elle a.

Puisque les amis ne peuvent venir qu’en nombres entiers, assurez-vous d’arrondir votre résultat au nombre entier le plus proche avant de le renvoyer.

### 9 - sillySentence()
Écrivez une fonction, `sillySentence()`, qui a 3 paramètres de chaîne et renvoie la phrase idiote avec les blancs remplis par les arguments passés dans la fonction.

### 10 - howOld()
Écrivez une fonction, `howOld()`, qui a deux paramètres numériques, `age` et `year`, et renvoie l'âge qu'avait age(ou aura) quelqu'un qui a actuellement cela pendant cette période year. Gérez trois cas différents :

Si l'année est dans le futur, vous devez renvoyer une chaîne au format suivant :
`'You will be [calculated age] in the year [year passed in]'`

Si l'année est antérieure à leur naissance, vous devez renvoyer une chaîne au format suivant :
`'The year [year passed in] was [calculated number of years] years before you were born'`

Si l'année se situe dans le passé mais pas avant la naissance de la personne, vous devez renvoyer une chaîne au format suivant :
`'You were [calculated age] in the year [year passed in]'`

### 11 - tipCalculator()
Créez une fonction, `tipCalculator()`, qui a deux paramètres, une chaîne représentant le `qualityservice` reçu et un nombre représentant le `totalcoût`.

Renvoie le pourboire, sous forme de nombre, en fonction de ce qui suit :
« mauvais » devrait renvoyer un pourboire de 5 % « ok » devrait renvoyer
un pourboire de 15 %
« bon » devrait renvoyer un pourboire de 20 %
« excellent » devrait renvoyer un pourboire de 30 %
les autres entrées devraient par défaut être 18 %


## ![Amelioration Logo](/ressource/ameliorationLogo.png) Amélioration future


## ![Logo Technologie](/ressource/technologie.png) Technologie
JavaScript ![Logo JavaScript](/ressource/javascript.png)