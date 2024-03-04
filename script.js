//returns true if str is palindrome
//returns false if str is not palindrome
const userInput = document.getElementById("#text-input");
function isPalindrome(input) {
    // Step 1: make str lower case
    const lowerCaseString = input.toLowerCase();
    // Step 2: Clean up str
    const regex = /[\W_]/g;
    const cleanedUpString = lowerCaseString.replace(regex, "");
    // Step 3: Split str into individual letters
    const splitString = cleanedUpString.split("");
    // Step 4: Reverse the order of the letters
    const reversedLetters = splitString.reverse();
    // Step 5: Join the letters back into one str
    const reversedString = reversedLetters.join("");
    // Step 6: Compare that reversed str is the same as the cleaned up str
    const isSame = reversedString === cleanedUpString;
    //return IsSame;
    }

const resultText = document.getElementById("#result");
const showResults = `strong${userInput}strong is ${isPalindrome}`;

    
const button = document.getElementById("check-btn");

button.addEventListener("click", () => {
    isPalindrome(userInput.value);
    userInput.value = "";
    })

const pTag = document.createElement('p');
pTag.className = 'user-input';
pTag.innerHTML = showResults;