const randomNumber = (number) => Math.floor(Math.random() * Math.floor(number));

export const random6Numbers = () => {
  const MAX_NUMBER = 36;
  let numbers: number[] = [];
  while (numbers.length < 6) {
    const number = randomNumber(MAX_NUMBER);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
};

const getScore = (number) => {
  const div = number / 9;
  if (div < 1) {
    return number + 1;
  } else if (div < 2) {
    return Math.floor((number - 8) % 10);
  } else if (div < 3) {
    return Math.floor((number - 17) % 10);
  } else {
    return Math.floor((number - 26) % 10);
  }
};

export const getSum = (number1, number2, number3) => {
  const sum = (getScore(number1) + getScore(number2) + getScore(number3)) % 10;
  return sum > 0 ? sum : 10;
};
