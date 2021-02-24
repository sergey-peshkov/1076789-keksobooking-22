const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomGeography = function (min, max) {
  return ((Math.random() * (max - min + 1)) + min).toFixed(1);
};
