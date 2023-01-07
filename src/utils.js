const getRandomNum = (min, max) => {
  const result = Math.floor(min + Math.random() * (max + 1 - min));
  return result;
};

export default getRandomNum;
