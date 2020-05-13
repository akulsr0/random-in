import { getNDigit } from './src/numbers';
import { getRandomBetween } from './src/numbers';
import { getRandomFloatBetween } from './src/numbers';
import { getNRandomBetween } from './src/numbers';

import {
  getName,
  getMaleName,
  getFemaleName,
  getMaleFirstName,
  getFemaleFirstName,
  getLastName,
  getIndianName,
  getIndianMaleName,
  getIndianFemaleName,
  getIndianMaleFirstName,
  getIndianFemaleFirstName,
  getIndianLastName,
} from './src/names';

import { getDateBetween, getRandomDateFuture } from './src/date';

import {
  getAlphanumericPassword,
  getLowercasePassword,
  getUppercasePassword,
  getAlphaPassword,
  getAlphaLowercasePassword,
  getAlphaUppercasePassword,
  getNumericPassword,
} from './src/passwords';

import { getCountry } from './src/countries';

import { getRandomEmail } from './src/email';

import { getRandomColorHex } from './src/color';

import { getRandomProgrammingLanguage } from './src/programming';

module.exports.getNDigit = (n: number): number => {
  return getNDigit(n);
};
module.exports.getRandomBetween = (min: number, max: number): number => {
  return getRandomBetween(min, max);
};

module.exports.getRandomFloatBetween = (min: number, max: number): number => {
  return getRandomFloatBetween(min, max);
};

module.exports.getNRandomBetween = (
  n: number,
  min: number,
  max: number
): number[] => {
  return getNRandomBetween(n, min, max);
};

module.exports.getName = (): string => {
  return getName();
};

module.exports.getMaleName = (): string => {
  return getMaleName();
};

module.exports.getFemaleName = (): string => {
  return getFemaleName();
};

module.exports.getMaleFirstName = (): string => {
  return getMaleFirstName();
};

module.exports.getFemaleFirstName = (): string => {
  return getFemaleFirstName();
};

module.exports.getLastName = (): string => {
  return getLastName();
};

module.exports.getIndianName = (): string => {
  return getIndianName();
};

module.exports.getIndianMaleName = (): string => {
  return getIndianMaleName();
};

module.exports.getIndianFemaleName = (): string => {
  return getIndianFemaleName();
};

module.exports.getIndianMaleFirstName = (): string => {
  return getIndianMaleFirstName();
};

module.exports.getIndianFemaleFirstName = (): string => {
  return getIndianFemaleFirstName();
};

module.exports.getIndianLastName = (): string => {
  return getIndianLastName();
};

module.exports.getDateBetween = (start: Date, end: Date): Date => {
  return getDateBetween(start, end);
};

module.exports.getRandomDateFuture = (futureYear: number): Date | Error => {
  return getRandomDateFuture(futureYear);
};

module.exports.getAlphanumericPassword = (n: number): string => {
  return getAlphanumericPassword(n);
};

module.exports.getLowercasePassword = (n: number): string => {
  return getLowercasePassword(n);
};

module.exports.getUppercasePassword = (n: number): string => {
  return getUppercasePassword(n);
};

module.exports.getAlphaPassword = (n: number): string => {
  return getAlphaPassword(n);
};

module.exports.getAlphaLowercasePassword = (n: number): string => {
  return getAlphaLowercasePassword(n);
};

module.exports.getAlphaUppercasePassword = (n: number): string => {
  return getAlphaUppercasePassword(n);
};

module.exports.getNumericPassword = (n: number): string => {
  return getNumericPassword(n);
};

module.exports.getCountry = (): string => {
  return getCountry();
};

module.exports.getRandomEmail = (): string => {
  return getRandomEmail();
};

module.exports.getRandomColorHex = (): string => {
  return getRandomColorHex();
};

module.exports.getRandomProgrammingLanguage = (): string => {
  return getRandomProgrammingLanguage();
};
