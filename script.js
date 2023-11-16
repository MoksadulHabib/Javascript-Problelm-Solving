
      // Question number 01.

const numberOne = 35;
const numberTwo = 70;

var max = Math.max(numberOne, numberTwo);
console.log("Maximum number is a : " + max);


      // Question number 02.

var number = 9;

if (number > 0){
  console.log("The number is positive");
}else if( number < 0){
  console.log("The number is Negetive");
}else if( number ===0){
  console.log("The number is Zero");
}else{
  console.log("Invalied Condition");
}



      // Question number 03.

var divisibleNumber = 20;

if( divisibleNumber % 10 == 0 ){
  console.log("A number is a divisible by 10");
}else{
  console.log("A number is a not divisible by 10");
}


      // Question number 04.

var numbers = 20;

if(numbers % 2 == 0) {
    console.log("The number is even.");
}else {
    console.log("The number is odd.");
}


      // Question number 05.

function checkAlphabet(char) {
  let alphabet = new RegExp(/^[a-z]/i);
  if(alphabet.test(char)) {
      return " This is a ALPHABET";
  }else {
      return "OTHER";
  }
}
    
console.log("Output : ", checkAlphabet('A'));


      // Question number 06.


var temperature = 35;

if(temperature >= 30){
  console.log("temperature is Hot");
}else if(temperature <= 25){
  console.log("temperature is Cold");
}else{
  console.log("temperature is Normal");
}


      // Question number 07.


      var x=9; 

      var y=17; 

      var z=13; 

      if(x>y && x>z) {

        console.log("X = "+x+" is the  maximum number"); 

      }else if(z>x && z>y) {
        console.log("Z = "+z+" is the  maximum number");

      }else console.log("Y = "+y+" is the  maximum number"); 

     
      // Question number 08.

var expression = 25;

expression % 2  === 0 ? console.log("Number is Even") : console.log("Number is Odd");



      // Question number 09.

var numOne = 40;
var numTwo = 35;

if( numOne >30 && numTwo > 30){
  console.log("Both are greater than 30");
}else{
  console.log("Both are not greater than 30");
}






      // Question number 10.

var age = 15;

if(age >= 13 && age <= 19 ){
  console.log("The person is a Teenager");
}else{
  console.log("The person is not a Teenager");
}








