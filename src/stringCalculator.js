function add(numbers) {
  if (!numbers) return 0;

  // Handle custom delimiter
  let delimiterPattern = /[,\n]/;
  if (numbers.startsWith("//")) {
    const [delimiterLine, rest] = numbers.split("\n", 2);
    const delimiter = delimiterLine.slice(2); // strip "//"
    delimiterPattern = new RegExp(`[${delimiter}]`);
    numbers = rest;
  }

  const parsedNumbers = numbers
    .split(delimiterPattern)
    .map((n) => parseInt(n.trim()));

  const negatives = parsedNumbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  const totalSum = parsedNumbers.reduce((sum, num) => sum + num, 0);
  return totalSum;
}

module.exports = { add };
