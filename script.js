// get objects from DOM
const userInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const resultMsg = document.getElementById("result");

// format input
const formatInput = (str) => {
 
// if input is blank, alert user
  if (userInput.value === "") {
    alert("Please provide word or phrase");
    return;
  } else {

// converts input to lowercase string and removes all non-alphanumeric characters
  const string = userInput.value.toString();
  const lowerCaseString = string.toLowerCase();
  const regex = /[\W_]/g;
  return lowerCaseString.replace(regex, "");
  }
};

// checks if palindrome
function result() {
// gets formatted input and reverses it
  const formattedInput = formatInput();
  const reversedInput = formattedInput.split("").reverse().join("");
  
// checks if reversed input is the same as formatted input
  if (reversedInput === formattedInput) {
    resultMsg.innerText += `${userInput.value} is a palindrome.`;
  } else {
    resultMsg.innerText += `${userInput.value} is not a palindrome.`;
  }
  }

button.addEventListener("click", result);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    result();
  }
});
