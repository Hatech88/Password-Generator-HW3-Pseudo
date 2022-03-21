// Assignment Code
var generateBtn = document.querySelector("#generate");


// 	- Prompt user for the password criteria
//          ○ Password length 8< 128
	//      	○ Lowercase, upper case, numbers, special characters
	// 		§ Set some variables, maybe arrays 
	// - Validate the input 
	// 	○ Insure the length is 8-128
	// 	○ Ensure at least one criteria is being selected 
	// - Generate password based on selected criteria
	// - Display the password on the page
	// 	○ Step 4 is already done with the return function 


// var length = '';


// the generatePassword function is called but not defined below. So we're going to declare this function
function generatePassword(){
  var pass = '';
  var passwordLength = window.prompt("Enter your password length:");

// if statement for the length. Should we add another function just for it?
if(!passwordLength){
  alert("You must enter a number");
  return generatePassword()
}
 else if (passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be at least 8 characters and no more than 128");
  return generatePassword()
} 
else {
}

// prompt user for criteria (getting input form user) (prompt vs confirm)
var upperCase = window.confirm ("Do you want your password to include uppercase letters?");
var lowerCase = window.confirm ("Do you want your password to include lowercase letters?");
var numeric = window.confirm ("Do you want your password to have numeric values?");
var specialChar = window.confirm ("Do you want to include special characters?");


// add an if statement in case user doesn't choose any if the criteria (&& logical and)
if (!upperCase && !numeric && !specialChar && !lowerCase){
  alert("You must select at least one of the criteria");
  return generatePassword()
}


// create arrays for the criteria to choose from
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numaric = ["0","1", "2", "3", "4","5", "6", "7", "8", "9"];
let special = ["!", "@", ",", "#", "$", "%", "&", "*", "{", "}", "[", "]", "/", "_", "+", "-"];
let validChar = [];



// if statement for user selection criteria
if (upperCase) {
validChar = validChar.concat(upper[Math.floor(Math.random() * 26)])
console.log(validChar)
}

if (lowerCase) {
validChar = validChar.concat(lower[Math.floor(Math.random() * 26)])
console.log(validChar)
}

if (numaric) {
validChar = validChar.concat(numaric[Math.floor(Math.random() * 10)])
console.log(validChar)
}

if (specialChar) {
validChar = validChar.concat(special[Math.floor(Math.random() * 16)])
console.log(validChar)
}


// I need to create the loop
// start with i = 0, go through loop one, check the criteria selected by user
// if it is true, choose a random value from that array and add it to validChar variable
// keep looping by adding 1 every loop until passwordLength is achived
// once is done, return the variable pass with all the values 
// check the pass variable 
for (let i = 0; i < passwordLength; i++) {
pass += generatePassword.validChar(Math.floor(Math.random() * passwordLength.length));
}
return pass;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button:
generateBtn.addEventListener("click", writePassword);
