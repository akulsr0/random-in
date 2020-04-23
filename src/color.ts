export const getRandomColorHex = (): string => {
  let color = '#';
  let colorCharacters = '0123456789ABCDEF';

  for (let i = 0; i < 6; i++) {
    color += colorCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
};
