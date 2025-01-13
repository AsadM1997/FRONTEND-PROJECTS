const password_Box=document.getElementById("password");

const password_Length=12;

const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()-_=+\|[]{};:/?.>";

const allChars= upperCase+lowerCase+number+symbol;

function createPassword(){
    let password ="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(password_Length >password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    password_Box.value=password;

}


function copyPassword() {
    // Select the text inside the input box
    password_Box.select();

    // Copy the selected text to the clipboard
    navigator.clipboard.writeText(password_Box.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy password: ", err);
        });
}
