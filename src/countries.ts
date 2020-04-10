import { countries } from '../utils/countries';

export const getCountry = (): string => {
  let i = Math.floor(Math.random() * countries.length);
  return countries[i];
};
