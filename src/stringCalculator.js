function add(numbers) {
  if (numbers === "") return 0;

  const delimiterPattern = /[\n,]/; // Matches comma or newline
  const rawParts = numbers.split(delimiterPattern); // Split input
  const trimmedParts = rawParts.map((part) => part.trim()); // Remove extra spaces
  const parsedNumbers = trimmedParts.map((part) => parseInt(part)); // Convert to integers

  const sum = parsedNumbers.reduce((acc, num) => acc + num, 0);
  return sum;
}

module.exports = { add };
