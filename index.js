// [INIT]
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Get elements from the DOC (HTML)
let passwordOneHTMLElement = document.getElementById("passwordOne");
let passwordTwoHTMLElement = document.getElementById("passwordTwo");

// generate random password
function generatePassword() {
    // resetting the HTML password elements..
    passwordOneHTMLElement.textContent = "";
    passwordTwoHTMLElement.textContent = "";
    
    // for the required length of the password to be generated 
    for (let i = 0; i < 15; i++) {
        /**
         * Frist password
         */
        const randomCharacter1 = characters[Math.floor(Math.random() * characters.length)];

        // Add onto the html element
        passwordOneHTMLElement.textContent += randomCharacter1;
        
        /**
         * Second password
         */
        const randomCharacter2 = characters[Math.floor(Math.random() * characters.length)];

        // Add onto the html element
        passwordTwoHTMLElement.textContent += randomCharacter2;
    }
}



