const generateRandomId = (length = 10) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};
export { generateRandomId };
