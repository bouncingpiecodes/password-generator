// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = [
  ".",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  ")",
  "(",
  "+",
  "=",
  "[",
  "]",
  "}",
  "{",
  ";",
  ":",
  "'",
  ">",
  "<",
  "?",
  "/",
  "~",
];
var letters = "abcdefghijklmnopqrstuvwxyz";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  console.log("generatePassword");
  var options = [];
  var passwordNumbers = prompt(
    "How many characters would you like your password to contain",
    8
  );
  console.log(passwordNumbers);
  var specialCharacters = confirm("Click OK to confirm special characters");
  if (specialCharacters) {
    options.push("specialCharacters");
  }
  var numericCharacters = confirm(
    "Click OK to confirm including numeric numbers"
  );
  if (numericCharacters) {
    options.push("numericCharacters");
  }
  var lowerCase = confirm("Click OK to confirm using lowercase characters");
  if (lowerCase) {
    options.push("lowerCase");
  }
  var upperCase = confirm("Click OK to confirm using uppercase characters");
  if (upperCase) {
    options.push("upperCase");
  }
  var password = "";
  console.log(options);

  for (x = 0; x < passwordNumbers; x++) {
    console.log(x);
    var option = options[Math.floor(Math.random() * options.length)];
    switch (option) {
      case "numericCharacters":
        password = password + Math.floor(Math.random() * 10);
        break;
      case "lowerCase":
        password =
          password + letters[Math.floor(Math.random() * letters.length)];
        break;
      case "upperCase":
        password =
          password +
          letters[Math.floor(Math.random() * letters.length)].toUpperCase();
        break;
      case "specialCharacters":
        password =
          password + characters[Math.floor(Math.random() * characters.length)];
        break;
    }
    console.log(option);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
