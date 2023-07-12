//8.nodarbība
/*console.log(5 + 2);
console.log(5 - 2);
console.log(5 / 2);
console.log(5 * 2);
console.log(5 % 2);
console.log(5 ** 3);

let score8 = 99;
console.log(score8);
console.log(++score8);
console.log(--score8);

let scores8 = 99;
scores8++;
console.log(scores8);*/

//9.nodarbība
/*let uz9 = 100;
uz9 += 100;
console.log(uz9);

let uz10 = 100;
uz10 -= 100;
console.log(uz10);

let uz11 = 100;
uz11 *= 100;
console.log(uz11);

let uz12 = 100;
uz12 /= 100;
console.log(uz12);

let uz13 = 100;
uz13 %= 100;
console.log(uz13);*/

//9.nodarbība
/*let num =3;
let newNum = 3.16;
console.log(typeof num);
console.log(typeof newNum);

let mill = 1e6;
console.log(mill);

let mill1 = 1e-2;
console.log(mill1);*/

//10. un 11.nodarbība
/*const Pi = 3.15264;
const num = Pi.toFixed(2);
console.log(num);
const num1 = Pi.toPrecision(4);
console.log(num1);
const p1 = 1000;
const num2 = p1.toExponential(2);
console.log(num2);*/

//12.nodarbība
/*let book ="grāmastas nosaukums";
let autors ='Jānis Bērziņš';
let series =`nārnijas grāmata`;
let dialogs =`John asked:"i don't liek apple"`; //var rakstīt arī \ don\'t
console.log(dialogs)*/

//13.nodarbība
/*let day = "Good morning, ";
let night = "Good evening, ";
let question = "how are you?";
let greetingDay = day + question;
let greetingNight = night +question;
console.log(greetingDay);
console.log(greetingNight);
console.log(day + "have you had breakfast?");

let firstName = prompt("What ir your name?");
console.log("Hello," + firstName + ","+ question);

//let greetingDay = day.concat(question);
//console.log(greetingDay);*/

//14.nodarbība
/*let title = "Sonic the hedgehog";
let platform = "Sega";
let year = "1991";
//let info = title + "\n" + "was released by " + platform + "\n" + "in the year " + year + "."; // \n - pārnes jauna rindā;
let info = `${title} 
was released by ${platform} 
in the year ${year}.`;
console.log(info);

let num1 = 6;
let num2 = 10;
let sum = `The total is ${num1 + num2}`;
console.log(sum);*/

//15.nodarbība
/*let course = "JavaScript is cool";
console.log(course.length);//saskita burtus un atstarpes
console.log(course.toUpperCase()); //lielie burti
let course1 = "      JavaScript is cool   ";
console.log(course1.trim()); //izņem laukā atstarpes priekša un aizmugurē
let course2 = "JavaScript is cool";
console.log(course2.indexOf("a")); //saskiata indeksu a
let course3 = "JavaScript is cool";
console.log(course3.slice(0, 13)); // atstāj konkrētu burtu skaitu
let course4 = "JavaScript is not cool";
console.log(course4.replace("not", "so")); //aizstāj konkrētus vārdus
let course5 = "JavaScript is cool";
console.log(course5.charAt("6")); // burtu pēc skaita izkonsolē*/

//16.nodarbība
/*let currentDate = new Date();
//console.log(currentDay.getFullYear());
let millisecond = new Date(4654654);
//console.log(millisecond);
let dateString = new Date("Aug 30 2019 8:35");
//console.log(dateString);
let componentDate = new Date(1991, 11, 25, 14, 25);
//console.log(componentDate);

currentDate.setFullYear(1999);
console.log(currentDate.getFullYear());

console.log(
    currentDate.toLocaleString('default', {
        month: 'long',
        weekday: 'short'
    })
);*/

//17.nodarbība
/*const PI = Math.PI;
//console.log(PI.toFixed(3));

let min = Math.min(5, 6, 15, 25, 1500);
console.log(min);
let max = Math.max(5, 6, 15, 25, 1500);
console.log(max);

let pow = Math.pow(5, 3);
console.log(pow);

let random = Math.random().toFixed(1)*10;
console.log(random);

console.log(
    Math.floor(5.7)
); //Apaļo uz leju;

console.log(
    Math.round(5.7)
); //Apaļo uz augšu;*/

//18.nodarbība
/*let x = 7;
// > more than;
console.log(
    x > 10,
    x > 6
);
// >= more than;
console.log(
    x >= 10, x >= 7
);

// < less than;
console.log(
    x < 10
);
// <= less than;
console.log(
    x <= 10, x <= 7
);

//== equal to
console.log(
    x == 7,
    x == 3
);

// != NOT equal to
console.log(
    x != 7,
    x != 6
);

// === strict equality
let y = "7";
console.log(
    x === 7, x === y
)
// !== strict not equality
console.log(
    x !== y
)

console.log(
    "A" < "Z"
);

let a = "Time";
let b = "Timing";
console.log(
    a > b, "e" < "i"
)*/

//19.nodarbība
/*let a = 1; //true
a = !a;
console.log(typeof a, a);

let b = 0; //false
b = !b; //b = not false, TRUE
console.log(typeof b, b);

let x = 1; //true;
let y = 0; //false;
if (y) {
    console.log("Hello");
}

if (x && !y) {
    console.log("Hello");
} // && ir And un jābūt abiem true

if (x || y) {
    console.log("Hello");
} // || vienam ir jābūt true*/


//20.nodarbība

//21.nodarbība
//22.nodarbība
/*if (10 < 1) {
    console.log("The condition is true");
}

let game1 = "Sonic";
if (game1 === "Sonic") {
    console.log("The condition is true");
}

let game2 = "Sonic";
if (game2 === "Sonic") {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}

let roll = 5;
if (roll === 4) {
    console.log("You rolled a four");
} else if (roll === 5) {
    console.log("You rolled a five");
} else if (roll === 6) {
    console.log("You rolled six");
} else {
    console.log("You rolled less than four");
}

let num = 10 + 2;
if (num > 2 && num < 20) {
    console.log("True");
} else {
    console.log("False");
}

let user = "employee";
if (user === "guest") {
    console.log("Login Denied");
} else if (user === "employee");
console.log("Succesfully loggen in");

let myName = "Sintija";
if (myName.length > 5) {
    console.log("more than 5");
} else if (myName.length === 5) {
    console.log("exactly 5 letters");
} else {
    console.log("less than 5 letters");
}*/
