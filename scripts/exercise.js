//1.uzdevums
let Fname = "Jānis"
let age = "19"
let student = "ir"
console.log(Fname, age, student)

//2.uzdevums
const fruit = ["Banana", "Kivi", "Mango", "Aplle"];
console.log(fruit[0]);

//3.uzdevums
let person = {
    Pname: "Jānis",
    Page: "25",
    Pstudent: "false"
}
console.log(person);

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
    if (i % 2 === 0);
     console.log(i);
}


//6.uzd.
let skaititajs = 0;
while (skaititajs < 5) {
    skaititajs++;
    console.log("sveiki");
}
