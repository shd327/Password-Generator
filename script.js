// Assignment Code
var generateBtn = document.querySelector("#generate");

// lowercaseArray
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l", "m",
                      "n","o","p","q","r","s","t","u","v","w","x","y","z"];
// UppercaseArray
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
  , "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // numberArray
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// specialCharacterArray
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
  newpasswordArray = [];
passwordLength = 0;
var finalpass = [];

// Write password to the #password input

// Adds number array to newpassword array
function numberGenerator() {

  for (let i = 0; i < numberArray.length; i++) {
    newpasswordArray.push(numberArray[i])
  }

}
// Adds lowercase array to newpassword array
function lowerCaseGenerator() {
  for (let i = 0; i < lowerCaseArray.length; i++) {
    newpasswordArray.push(lowerCaseArray[i])
  }
}
// Adds special character array to newpassword array
function specialCharacterGenerator() {
  for (let i = 0; i < specialCharArray.length; i++) {
    newpasswordArray.push(specialCharArray[i])
  }
}
// Adds uppercase array to newpassword array
function upperCaseGenerator() {
  for (i = 0; i < upperCaseArray.length; i++) {
    newpasswordArray.push(upperCaseArray[i])
  }
}
function generatePassword() {
  // prompt for password length
  var lengthofPassword = prompt("please enter a password from 8-128");
  // check if password input meets condition
  if (lengthofPassword >= 8 && lengthofPassword <= 128) {
    passwordLength = lengthofPassword;
    
  }
  else {
     alert("your input is invalid please try again")
    writePassword() 
  }
  // user input  for lowercase returns true or false
  var isLowerCase = confirm("Do you want Lower case letters in your password");
// runs lowerCaseGenerator function if condition is met
  if (isLowerCase) {
    lowerCaseGenerator()
   
  }
    // user input for uppercase  returns true or false
  var isUpperCase = confirm("Do you want Upper case letters in your password");
  // runs upperCaseGenerator function if condition is met
    if (isUpperCase) {
    upperCaseGenerator()
  }
    // user input for numbers  returns true or false
  var isNumber = confirm("Do you want numbers in your password");
  // runs numberGenerator function if condition is met
      if (isNumber) {
    numberGenerator()
  }
    // user input for special characters  returns true or false
  var isSpecialCharacters = confirm("Do you want special characters in your password");
  // runs specialCharacterGenerator function if condition is met
      if (isSpecialCharacters) {
    specialCharacterGenerator()
  }
// iterates through length of password length
  for (let i = 0; i < passwordLength; i++){

    // Randomily generate a index value to the nearest interger between 0 and length of newpasswordArray
    //  returns index value
    
    var randomLength = Math.floor(Math.random() * newpasswordArray.length);
    // stores the value of the index of randomlength of newpasswordArray to indexValue
  var indexValue = newpasswordArray[randomLength]
// pushed indexValue to the end of the finalpass array
    finalpass.push(indexValue)
  }
// converts the array into a string
  return finalpass.join("")

}
function writePassword() {

// runs generatePassword function and stores the return value to var password

  var password = generatePassword();

// queryselector to grab the id of password
  var passwordText = document.querySelector("#password");
// displays the value of password to the html element
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


