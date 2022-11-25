const calc = document.getElementById("calc");
const calcDisplay = document.getElementById("display");
const regexp = new RegExp("[+*/-]");

const isValid = (buttonValue) => {
  const displayedValue = calcDisplay.innerHTML;
  if (
    (!displayedValue && buttonValue === "=") ||
    (!displayedValue && buttonValue.match(regexp)) ||
    (displayedValue &&
      displayedValue[displayedValue.length - 1].match(regexp) &&
      buttonValue.match(regexp))
  ) {
    return false;
  }
  return true;
};

const calcHandler = (e) => {
  const target = e.target;
  const displayedValue = calcDisplay.innerHTML;
  if (
    target.classList.contains("calc__button") &&
    displayedValue &&
    target.innerHTML === "="
  ) {
    if (displayedValue[displayedValue.length - 1].match(regexp)) {
      return;
    }
    calcDisplay.innerHTML = eval(displayedValue);
    return;
  }

  if (target.classList.contains("calc__button") && isValid(target.innerHTML)) {
    calcDisplay.innerHTML += target.innerHTML;
  }
};

calc.addEventListener("click", (e) => calcHandler(e));
window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && calcDisplay.innerHTML) {
    calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0, -1);
  }
});
