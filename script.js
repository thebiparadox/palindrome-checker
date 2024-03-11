const userInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const resultMsg = document.getElementById("result-div");

const formatInput = (str) => {
  const string = userInput.value.toString();
  const lowerCaseString = string.toLowerCase();
  const regex = /[\W_]/g;
  return lowerCaseString.replace(regex, "");
};

function result() {
  const formattedInput = formatInput();
  const reversedInput = formattedInput.split("").reverse().join("");
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
