function calculateOddSequence(min, max) {
  let result = 0;

  // Check if min is even, if it is then add 1 to it
  if (min % 2 == 0) {
    min++;
  }

  while (min <= max) {
    result += min;
    min += 2;
  }

  return result;
}

// Main
