document.querySelector("#generate").addEventListener("click", writePassword);

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialcharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function getpasswordcriteria() {
    var confirmlength = (prompt("How many characters? 8-128 characters"));
    while(confirmlength <= 7 || confirmlength >= 129);
    var userchosenumbers = confirm("do you want numbers?");
    var userchoselowercase = confirm("do you want lowercase?");
    var userchoseuppercase = confirm("do you want uppercase?");
    var userchosespecialcharacters = confirm("do you want special characters?");
    var options = {
      userchosenumbers: userchosenumbers,
      userchoselowercase: userchoselowercase,
      userchoseuppercase: userchoseuppercase,
      userchosespecialcharacters: userchosespecialcharacters,
    };
    return options;
}

function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}

function generatePassword() {
  var userchose = getpasswordcriteria();
  var charactersarr = [];
  var passwordarr = [];
  if (userchose.userchosenumbers) {
    charactersarr = charactersarr.concat(numbers)
  }
  if (userchose.userchoselowercase) {
    charactersarr = charactersarr.concat(lowercase)
  }
  if (userchose.userchoseuppercase) {
    charactersarr = charactersarr.concat(uppercase)
  }
  if (userchose.userchosespecialcharacters) {
    charactersarr = charactersarr.concat(specialcharacters)


    for (var i = 0; i < 128; i++) {
      passwordarr.push(charactersarr[createRandom(charactersarr.length)])
    }
    return passwordarr;
  }
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);