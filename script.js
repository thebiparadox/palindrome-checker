const userInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const resultMsg = document.getElementById("result-div");


const formatInput = (str) => {
    const string = userInput.value.toString;
    const lowerCaseString = string.value.toLowerCase();
    const regex = /[\W_]/g;
    return lowerCaseString.value.replace(regex, "");
}

function result() {
    const formattedInput = formatInput();
    const reversedInput = formattedInput.split("").reverse().join("");
    if (reversedInput === formattedInput) {
        console.log("is palindrome");
    } else {
        console.log("is not palindrome");
    }
}

button.addEventListener("click", result)
