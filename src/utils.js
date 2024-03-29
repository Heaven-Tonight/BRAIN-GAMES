// eslint-disable-next-line import/prefer-default-export
export const generateRandomNum = (max = 50, min = 0) => {
  const randomNum = (Math.random() * (max - min) + min);
  return Math.floor(randomNum);
};
