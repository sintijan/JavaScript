/*//1.uzdevums
let Fname = "Jānis";
let age = "19";
let student = "true";
console.log(Fname, age, student); //Strings
console.log("vārds Fname");

//2.uzdevums
const fruit1 = ["Banana", "Kivi", "Mango", "Aplle"];
console.log(fruit1[0]);

const fruit2 = ["Banana", "Kivi", "Mango", "Aplle"];
console.log(fruit2);

//3.uzdevums
let person = {
    Pname: "Jānis",
    Page: 25,
    Pstudent: false
}
console.log(person);

//Papildināts 
let s1=5;
let s2=5;
let s3=5;
console.log(s1==s2+""+s1==s3);

//4.uzdevums
function uzd4() {
    let x = 5
    console.log(x);
}
uzd4();

//5.uzdevums
let y = 10;
function uzd5() {
    console.log(y);
}
uzd5();

//6.uzdevums
function uzd6() {
    let x6 = 5;
    console.log(x6);
}
uzd6();

//7.uzdevums
let z = 4;
function uzd7() {
    z = 6;
    console.log(z);
}
uzd7();

//Operatori
//1.uzdevums
let x1 = 5;
let x2 = 6;
function Op1() {
    console.log(x1 + x2)
}
Op1();

//2.uzdevums
let num = 10;
num /= 5;
console.log(num);

//Plūsma
//1.uzd.
let xp1 = 5;
if (xp1 < 0) {
    console.log("Negatīvs");
} else if (xp1 > 0) {
    console.log("Pozitīvs");
} else {
    console.log("Nulle");
}

//2.uzd.
let xp2 = 15;
if (xp2 % 3) {
    console.log("Dalās");
} else {
    console.log("Nedalās");
}

//3.uzd.
let xp3 = 5;
let yp3 = 6;
if (xp3 > yp3) {
    console.log("x ir lielāks par y");
} else {
    console.log("x nav lielāks par y");
}

//4.uzd.
let diena = "piektdiena";
switch (diena) {
    case "pirmdiena":
        console.log("Nav vēl piektdiena");
        break;
    case "piektdiena":
        console.log("Nedēļas nogale ir gandrīz šeit!");
        break;
    default:
        console.log("Default!");
}

//5.uzd.
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0)
        console.log("Pāra cipars");
}


//6.uzd.
let skaititajs = 0;
while (skaititajs < 5) {
    ++skaititajs
    console.log("sveiki");
}

//Funkcijas
//1.uzd.
function greeting(firstName) {
    console.log(`Sveiki, ${firstName}`);
}
greeting("Jānis!");

//2.uzd.
function calculateArea(a, b) {
    console.log(a * b);
}
calculateArea(5, 10);

//3.uzd.
function isOdd(input) {
    return input % 2 === 0;
}
let inputx = isOdd(9);
console.log(inputx);
//4.uzd.
let calculateSum1 = [10, 12, 28];
let result = calculateSum1.reduce((x, y) => {
    return x + y;
}, 10);
console.log(result);

let calculateSum = [1, 2, 3, 4, 5];
let sum = calculateSum.reduce(function (a, b) {
    return a + b;
});
console.log(sum);

//5.uzd.
let string1 = "banāns";
let string2 = "kivi";
let salidzina = string1.localeCompare(string2);
console.log(salidzina);

let string4 = "banāns";
let string3 = "kivi";
console.log(string4 === string3);

//7.uzd.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Apple"));*/
