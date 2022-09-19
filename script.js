// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = [".", "!", "@", "#", "$", "%", "^", "&", "*", ")", "(", "+", "=", "[", "]", "}", "{", ";", ":", "'", ">", "<", "?", "/", "~"];
var letters = "abcdefghijklmnopqrstuvwxyz";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  console.log("generatePassword")
  var passwordNumbers = prompt("How many characters would you like your password to contain", 8);
  console.log(passwordNumbers);
  var specialCharacters = confirm("Click OK to confirm special characters");
  var numericCharacters = confirm("Click OK to confirm including numeric numbers");
  var lowerCase = confirm("Click OK to confirm using lowercase characters");
  var upperCase = confirm("Click OK to confirm using uppercase characters");
for (x = 0; x < passwordNumbers; x ++) {
  console.log(x);
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
