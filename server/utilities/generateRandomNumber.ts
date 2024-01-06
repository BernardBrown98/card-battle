export const generateRandomNumber = (maxNum = 9, minNum = 0) => Math.max(minNum, Math.round(Math.random() * maxNum));
