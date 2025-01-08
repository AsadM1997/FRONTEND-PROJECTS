// let keyword 
// declare const
// const ki value change nahi hogi u can use const with anything

// let firstName="Mohd Asad";
// string indexing
// M O H D A S A D
// 1 2 3 4 5 6 7 8
// console.log(firstName[5]);
// length vs indexing 
// indexing start with 0 length start with 1
// i don't no meri length kitni bari hai but if u want last index
// console.log(firstName[firstName.length-1]);
// console.log(firstName.length);



// string is immutable

// trim()

// let firstName="  Asad     ";
// console.log(firstName.length);
// ya koi new variable bnaye
// let newString=firstName.trim()//Asad
// console.log(newString);
// yato usi variable mey store kra ker o/p ley 
// firstName=firstName.trim()
// console.log(firstName);

// toUppercase

// let firstName="Mohd";
// firstName=firstName.toUpperCase()
// console.log(firstName);

// tolowercase

// let firstName="Mohd";
// firstName=firstName.toLowerCase()
// console.log(firstName);
  
// slice
// slice end index ko include nahi kerta hai
// let firstName="Mohd Asad";
// firstName=firstName.slice(0,5)
// firstName=firstName.slice(3,6)
// firstName=firstName.slice(6,7)
// firstName=firstName.slice(0,8)
// firstName=firstName.slice(0,9)
// firstName=firstName.slice(0,10)
// console.log(firstName);


// typeof operator 

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

// let age = 22; 
// let firstName = "Mohd";

// console.log(typeof (age));

// 22 -> "22"
// convert number to string. 
// age = age + "";
// console.log(typeof(age)); "22"


// convert string to number. 

// let myStr = +"34";
// console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age);
  
// string concatenation 

// let string1 = "17";
// let string2 = "10";

// let newString = string1 + string2;
// console.log(newString);

// let newString = +string1 + +string2;
// console.log(newString);

// console.log(typeof (newString));


// template string 
// let age = 22;
// let firstName = "harshit"
 

// let aboutMe = `my name is ${firstName} and my age is ${age}`

// console.log(aboutMe);


// undefined let var key case mey sahi kaam kareyga const ko assign hi kreni hogi value
// null

// let firstName;
// console.log(typeof firstName);
// firstName = "Mohd";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "Mohd";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);
// bug , error 

// BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// console.log(myNumber);
// ye apko btayga ki aap javaScript mey kitna bara(big) number store ker saktey hai
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);


// booleans & comparison operator 

// booleans 
// true, false 

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);

// == vs === 
// == checks only value but === checks value as well
// console.log(num1 === num2);

// != vs !==

// console.log(num1 !== num2);


// truthy and falsy values 

// falsy values 


// false
// ""
// null 
// undefined
// 0


// if else condition 

// let age = 17;

// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }


// ternary operator 

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// ternary operator / conditional operator 

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// and  or operator 



// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
// let firstName = "arshit";
// let age = 16;

// if(firstName[0] === "H" || age>18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }

// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }



// if 
// else if 
// else if 
// else if 
// else 

// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello");
















// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello there");



// let tempInDegree = 4;

// if(tempInDegree > 40){
//     console.log("too hot");
// }else if(tempInDegree > 30){
//     console.log("lets go for swim");
// }else if(tempInDegree > 20){
//     console.log("weather is cool");
// }else if(tempInDegree > 10){
//     console.log("it is very cold outside");
// }else{
//     console.log("extremely cold");
// }



// switch statement 


// let day = 7; 


// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }


// let day = 9;

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break; 
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }
// while loop example 
// let num = 100; 
// let total = 0; //1 + 2 +3
// let i = 0;


// while(i<=100){
//     total = total + i;
//     i++;
// }


// console.log(total);

// let total = (num*(num+1))/2;
// console.log(total);

// intro to for loop 
// print 0 to 9

// for(let i = 0;i<=9;i++){
//     console.log(i);
// }

// console.log("value of i is ",i);

// for loop example 

// let total = 0;

// let num = 100; // block sey baher initialize kerney per baher bhi kaam kareyga

// for(let i = 1; i<=num; i++){
//     total = total + i;
// }

// console.log(total);

// break keywork

// continue keyword 

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break; // yaha sey jump ker jaayga baher ki aur
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue; // ye cheez wapis uper chali jaaygi
//     }
//     console.log(i);
// }
console.log("hello there");


// do while loop

// while(i<=9){
//     console.log(i);
//     i++;
// }
// ek baar chalna hi chalna hai chahey condition false hi kyo na ho 
// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);

// console.log("value of i is ", i);