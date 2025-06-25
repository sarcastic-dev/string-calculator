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

  const parsed = numbers.split(delimiterPattern).map((n) => parseInt(n.trim()));

  const sum = parsed.reduce((sum, num) => sum + num, 0);
  return sum;
}

module.exports = { add };
