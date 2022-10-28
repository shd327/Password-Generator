// Assignment Code
var generateBtn = document.querySelector("#generate");

// var isLowerCase = confirm("Do you want Lower case letters in your password");
// var isUpperCase = confirm("Do you want Upper case letters in your password");
// var isNumber = confirm("Do you want numbers in your password");
// var isSpecialCharacters = confirm("Do you want special characters in your password");

var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l", "m",
                      "n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
  , "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
  newpassword = [];
passwordTemp = 0;
var finalpass = "";
// Write password to the #password input

function numberGenerator() {

  for (let i = 0; i < numberArray.length; i++) {
    newpassword.push(numberArray[i])
  }

}
function lowerCaseGenerator() {
  for (let i = 0; i < lowerCaseArray.length; i++) {
    newpassword.push(lowerCaseArray)
  }
}
function specialCharacterGenerator() {
  for (let i = 0; i < specialCharArray.length; i++) {
    newpassword.push(specialCharArray)
  }
}
function upperCaseGenerator() {
  for (i = 0; i < upperCaseArray.length; i++) {
    newpassword.push(upperCaseArray)
  }
}
function generatePassword() {
    var lengthofPassword = prompt("please enter a password from 8-128");
  if (lengthofPassword >= 8 && lengthofPassword <= 128) {
    passwordTemp = lengthofPassword;
    
  }
  else {
     alert("your input is invalid please try again")
    writePassword() 
  }
  
  var isLowerCase = confirm("Do you want Lower case letters in your password");

  if (isLowerCase) {
    lowerCaseGenerator()
    console.log(newpassword)
  }
  var isUpperCase = confirm("Do you want Upper case letters in your password");
    if (isUpperCase) {
    upperCaseGenerator()
  }
  var isNumber = confirm("Do you want numbers in your password");
      if (isNumber) {
    numberGenerator()
  }
  var isSpecialCharacters = confirm("Do you want special characters in your password");
      if (isSpecialCharacters) {
    specialCharacterGenerator()
  }
  console.log(newpassword)

  for (let i = 0; i < newpassword.length; i++){
     var randomLength = Math.floor(Math.random() * newpassword.length);
    finalpass += randomLength;
    console.log(finalpass)
  }
}
function writePassword() {



  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// length of password 8 -128

// lowercase
//uppercase
// number
// special characters

