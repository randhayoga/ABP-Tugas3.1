function calculateOddSequence(min, max) {
  let result = 0;
  let i = min;

  // Check if i (min) is even, if it is then add 1 to it
  if (i % 2 == 0) {
    i++;
  }

  // Iteration for odd sequence summmation
  while (i <= max) {
    result += i;
    i += 2;
  }

  return result;
}

// Main
const calculateButton = document.getElementById("btn-calculate");

calculateButton.addEventListener("click", function (event) {
  event.preventDefault();

  const min = parseInt(document.getElementById("min-value").value);
  const max = parseInt(document.getElementById("max-value").value);
  const resultDiv = document.getElementById("result-box");

  const resultValue = calculateOddSequence(min, max);

  resultDiv.innerHTML = `<input class="form-control" type="text" value="${resultValue}" aria-label="readonly input example" readonly></input>`;
});
