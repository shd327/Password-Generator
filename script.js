// Assignment Code
var generateBtn = document.querySelector("#generate");

var isLowerCase = confirm("Do you want Lower case letters in your password");
var isUpperCase = confirm("Do you want Upper case letters in your password");
var isNumber = confirm("Do you want numbers in your password");
var isSpecialCharacters = confirm("Do you want special characters in your password");
// Write password to the #password input
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

