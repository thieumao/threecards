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

export const isWin = (list: number[]) => {
  if (list.length != 6) {
    return undefined;
  }
  const score1 = getSum(list[0], list[1], list[2]);
  const score2 = getSum(list[3], list[4], list[5]);
  if (score1 > score2) {
    return true;
  } else if (score1 < score2) {
    return false;
  }
 
  const list1 = [list[0], list[1], list[2]];
  const list2 = [list[3], list[4], list[5]];
  // chat ro
  const atRo = 27;
  if (list1.indexOf(atRo) > -1) return true;
  if (list2.indexOf(atRo) > -1) return false;
  for (let i = 35; i > atRo; i--) {
    if (list1.indexOf(i) > -1) return true;
    if (list2.indexOf(i) > -1) return false;
  }
  // chat co
  const atCo = 18;
  if (list1.indexOf(atCo) > -1) return true;
  if (list2.indexOf(atCo) > -1) return false;
  for (let i = atRo - 1; i > atCo; i--) {
    if (list1.indexOf(i) > -1) return true;
    if (list2.indexOf(i) > -1) return false;
  }
  // chat bich
  const atBich = 9;
  if (list1.indexOf(atBich) > -1) return true;
  if (list2.indexOf(atBich) > -1) return false;
  for (let i = atCo - 1; i > atBich; i--) {
    if (list1.indexOf(i) > -1) return true;
    if (list2.indexOf(i) > -1) return false;
  }
  // chat tep
  const atTep = 0;
  if (list1.indexOf(atTep) > -1) return true;
  if (list2.indexOf(atTep) > -1) return false;
  for (let i = atBich - 1; i > atTep; i--) {
    if (list1.indexOf(i) > -1) return true;
    if (list2.indexOf(i) > -1) return false;
  }
  return undefined;
}