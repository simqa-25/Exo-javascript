const prompt = require('prompt-sync')()

// Exo 1

// let runners = parseInt(prompt("Dossard n ° : "))
// let time = parseInt(prompt("tenps d'arrivée : "))
// let name = prompt("entrez votre nom : ")
// while (runners != -1) {
//     console.log(`Le participant avec pour dossard n °${runners} est arrivé en ${time} HH MM SS et il s'apelle ${name} `);
//     runners = parseInt(prompt("Dossard n ° : "))

//     if (runners != -1) {
//         time = parseInt(prompt("tenps d'arrivée : "))
//         name = prompt("entrez votre nom : ")
//     }
// }
// console.log("Le dernier participant est arrivé");

// EXO 2
// let inthours = parseInt(prompt("Indiquez le nombre d'heure(s) : "))
// let intminutes = parseInt(prompt("Indiquez le nombre de minute(s) : "))
// let intseconds = parseInt(prompt("Indiquez le nombre de seconde(s) : "))
// for (let hours = inthours; hours >= 0; hours--) {
//     for (let minutes = intminutes; minutes >= 0; minutes--) {
//         for (let secondes = intseconds; secondes >= 0; secondes--) {
//             console.log(" Il reste " + hours + " heure(s) " + minutes + " minute(s) et " + secondes + " seconde(s) ");

//         }
//         intseconds = 59;
//     }
//     intminutes = 59;

// }

// EXO 3


// let base = 0
// let age = parseInt(prompt("Veuillez entrez un age"))
// while (isNaN !== age) {
//     let age = parseInt(prompt("Veuillez entrez un age avec des chiffres"))

// for (let index = 0; index < age;  index++) {
// base = base + (((index + 1) * 3) + 150);
// }
// }
// console.log(parseInt((index + 1) * 3) + 150 + base);



// EXO 4

// let max = null;
// let maxpos = -2;
// for (let index = 0; index < 20; index++) {

//     let number = Number(prompt("Veuillez rentrer une valeur " + (index + 1) + ":"));
//     if (max === null || number > max) {
//         max = number
//         maxpos = index + 1;
//     }
// }
// console.log(("Le nombre rentré le plus grand parmi les 20 saisis est : " + max + ", ce nombre a été rentré  à la : " + maxpos + "ème position "));



// Correction
// let nombre = 0
// let result = 0
// let position = 0

// for (let index = 0; index < 5; index++) {
//  nombre = Number(prompt("Entrez un nombre : "))
//     while (isNaN(nombre) || nombre < 0) {
//         nombre = Number(prompt("Entrez un nombre  correct avec des chiffres: "))
//     }
//     if (nombre > result) {
//         result = nombre
//         position = i + 1
//     }
// }
// console.log(result);
// console.log(position);





// EXO 5
// let person = 0;
// for (let index = 0; index < 6; index++) {
//     let size = parseFloat(prompt("Veuillez rentrez une taille " + (index + 1) + ":"));
//     if (size < 2.1) {
//         person++;
//     }
// }
// console.log(person + "personnes mesurent moins de 2.10m");

// EXO 6



// let n = parseInt(prompt("Saisir le nombre d'électeurs :"));
// let yes = 0;
// let no = 0;
// let white = 0;

// for (let index = 1; index <= n; index++) {
//     let vote = prompt("Vote de l'électeur " + index + "(Y/N/W) : ")
//     if (vote === 'Y') {
//         yes++;
//     }
//     else if (vote === 'N') {
//         no++;
//     }
//     else if (vote === 'W') {
//         white++;
//     }
//     else {
//         console.log("Erreur vous pouvez seulement voter Y/N/W"); index--
//     }

// }

// console.log(((yes * 100) / n) + " % Y " + ((no * 100) / n)+ " % N " + ((white * 100) / n) + " % W ");



// correction

// let vote = ""
// let nmbOui = 0 
// let nmbNon = 0
// let nmbBlanc = 0
// let nmbVotant = 5

// for (let i = 0; i < nmbVotant; i++) {
// vote = prompt("vote b (blanc) vote o (oui) vote n (non)")
//     while (vote != "b" && vote != "o" && vote != "n") {
//         vote = prompt("vote b (blanc) vote o (oui) vote n (non) et ne te trompe pas")
//     }
//     if (vote == "b") {
//         nmbBlanc++
//     }
//     else if (vote == "o") {
//         nmbOui++
//     }
//     else{
//         nmbNon++
//     }
// }

// console.log("oui :  " + (nmbOui / nmbVotant) * 100 + "%");
// console.log("non :  " + (nmbNon / nmbVotant) * 100 + "%");
// console.log("blanc :  " + (nmbBlanc / nmbVotant) * 100 + "%");

// EXO 7



// let nmb = Number(prompt("entre un chifre"))
// let index = 0


// for (let i = 2; i <= (nmb * 2); i++) {
//     let isPrime = true
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             isPrime = false
//             break
//         }

//     }
//     if (isPrime == true) {
//         console.log(i);

//     }
// }


// corretion

// let number = Number(prompt("entre un chiffre"))
// let isPrime = true;


// for (let i = 2; i <= number; i++) {
//     isPrime = true;
//     for (let j = 2; j < i ; j++) {
//        if (i % j == 0) {
//         isPrime = false;
//         break;
//        }

//     }
//     if (isPrime == true) {
//         console.log(i);

//     }
// }



// EXO 8

// let number = parseInt(prompt('Saisir un nombre : '));
// for (let index = number; index < (number + 6); index++) {
//     while (index !== number + 6) {
//         console.log(index);
//         index++;
//     }
// }

// EXO 9


// let years = 0;
// let carsInParis = 50;
// let carsInNantes = 200;

// while (carsInParis < carsInNantes) {
//     carsInParis = carsInParis + 100
//     carsInNantes = carsInNantes * 1.12
//     console.log(carsInNantes);
//     console.log(carsInParis);


//     years++
//     if (carsInParis > carsInNantes) {
//         break
//     }
// }
// console.log(`Il a fallu ${years} année(s) pour que le nombre de voitures à Paris dépasse celui de Nantes. `);


// EXO JEU DU PLUS OU MOINS

// function randomize(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let tries = 0
// let choice = 0
// let random = randomize(1, 100)
// while (choice != random) {
//     choice = Number(prompt("Entrez un nombre : "))
//     while (isNaN(choice)) {
//         choice = Number(prompt("Entrez un vrai nombre avec des chiffres stp"))
//     }
//     if (choice > random) {
//         console.log("Le chiffre  : " + choice + " est plus grand que le chiffre recherché");
//         tries++
//     }
//     else if (choice < random) {
//         console.log("Le chiffre  : " + choice + " est plus petit que le chiffre recherché");
//         tries++
//     }
//      if (tries >= 5) {
//         console.log("Nombre de tentatives maximum atteint , vous avez perdu.");
//         break;

//     }
//     if (choice == random) {
//         console.log("Bravo vous avez trouvé le bon nombre");
//     }
// }


