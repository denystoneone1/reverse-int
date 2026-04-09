module.exports = function reverse(n) {
  const absoluteValue = Math.abs(n);

  const reversedNumberString = String(absoluteValue)
    .split('')
    .reverse()
    .join('');

  return Number(reversedNumberString);
};
