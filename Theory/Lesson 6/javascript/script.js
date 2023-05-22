//IF 
const condition = 2;

if (condition) {
     console.log('works, because condition is true')
}

const userName = 'Random Name';
if (userName !== ''){
     console.log('Hello '+ userName);
}

console.log('');
//IF ELSE

const hasTickt = true;
const isAdult = false;
const isVIP = true;

if (hasTickt && isAdult == true) {
     console.log('ok');
}else {
     console.log('not ok');    
}

if (hasTickt && isAdult || isVIP ) {
     console.log('ok');
}else {
     console.log('not ok');    
}


const personAge = '';

if (personAge <= 9 && typeof personAge === 'number') {
     console.log('Kid');
}else if ( personAge <= 18 && typeof personAge === 'number') {
     console.log('Young men');
}else if ( personAge <= 70 && typeof personAge === 'number'){
     console.log('Adult');
}else if (personAge > 70 && typeof personAge === 'number'){
     console.log('Elder');
}else{
     console.log('Wrong input');
}

console.log('');
// IF NESTING

const guestName = '';
const guestAge = 22;

if (guestName){
     if(guestName){
          console.log('Hello ' + guestName);
     }
     if(guestAge > 18){
          console.log("You're welcome");
     }else{
          console.log("You're not old enough");
     }
}else{
     console.log("You're not on a list");
}

console.log('');
// SWITCH

const dayOfTheWeek = 'Fri';

switch (dayOfTheWeek) {
     case 'Mon' : console.log('today is '+ dayOfTheWeek);
     break;

     case 'Tue' : console.log('today is '+ dayOfTheWeek);
     break;

     case 'Wed' : console.log('today is '+ dayOfTheWeek);
     break;

     case 'Thu' : console.log('today is '+ dayOfTheWeek);
     break;

     case 'Fri' : console.log('today is '+ dayOfTheWeek);
     break;

     case 'Sat' : console.log('today is '+ dayOfTheWeek);
     break;

     case 'Sun' : console.log('today is '+ dayOfTheWeek);
     break;

     default : console.log('Wrong input');
}

console.log('');
// CONDITIONAL OPERATOR ->  condition ? true : false;

const pointsScore = 200;

console.log(20 && 1 ? 'True' : 'False');
console.log(20 > 18 && undefined ? 'Option A' : 'Option B');
console.log(20 > 18 || 0 ? 'Option A' : 'Option B');

let gameResult = 0;
let killedEnemies = 13;

const levelCompleted = gameResult += killedEnemies > 10 ? true : false;

if (levelCompleted){
     console.log('You completed level');
}else {
     console.log('You failed');
}

