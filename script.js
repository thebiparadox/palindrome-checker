//returns true if str is palindrome
//returns false if str is not palindrome
function isPalindrome(str) {

    // Step 1: make str lower case
    const lowerCaseString = str.toLowerCase();
    
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
    // Step 7: get input elements from DOM
    const input = document.getElementById("text-input");
    const button = document.getElementById("check-btn");
    // Step 8: add eventlistener
    button.addEventListener("click", () => {});
    // Step 9: get string from input
    // Step 10: pass string through steps 1-6
    // Step 11: Display result in result div
    
    //return IsSame;
    }
    
    isPalindrome("TaC$$$%*ocAT");