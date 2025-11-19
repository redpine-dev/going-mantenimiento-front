const createArrayOfNumbers = (length: number, from: number = 1) =>
  Array.from({ length }).map((_, index) => index + from);

export { createArrayOfNumbers };
