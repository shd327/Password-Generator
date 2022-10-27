// Assignment Code
var generateBtn = document.querySelector("#generate");

var isLowerCase = confirm("Do you want Lower case letters in your password");
var isUpperCase = confirm("Do you want Upper case letters in your password");
var isNumber = confirm("Do you want numbers in your password");
var isSpecialCharacters = confirm("Do you want special characters in your password");

var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l", "m",
                      "n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
  , "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharString = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
newpassword = "";
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

