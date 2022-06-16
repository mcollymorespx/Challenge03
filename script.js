// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    console.log("button activated")    

window.prompt("must have a least 8 characters.");

let characters = "1,2,3,4,5,6,7,8,9,0,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
let passwordLength = 8;
let passwordValue = '';

const createPassword = () => {

passwordValue = '';

for (let index = 0; index < passwordLength; index++) {
    let number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number + 1)
    
}

}





    return "the generated password";

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);