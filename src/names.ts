import {
  names,
  maleNames,
  femaleNames,
  indianMaleFirstNames,
  indianFemaleFirstNames,
  indianLastNames,
} from '../utils/names';

export const getName = (): string => {
  let i = Math.floor(Math.random() * names.length);
  return names[i];
};

export const getMaleName = (): string => {
  let i = Math.floor(Math.random() * maleNames.length);
  return maleNames[i];
};

export const getFemaleName = (): string => {
  let i = Math.floor(Math.random() * femaleNames.length);
  return femaleNames[i];
};

export const getMaleFirstName = (): string => {
  let maleFirstName: string = getMaleName().split(' ')[0];
  return maleFirstName;
};

export const getFemaleFirstName = (): string => {
  let femaleFirstName: string = getFemaleName().split(' ')[0];
  return femaleFirstName;
};

export const getLastName = (): string => {
  let lastName: string = getName().split(' ')[1];
  return lastName;
};

export const getIndianName = (): string => {
  let isMale = Boolean(Math.round(Math.random()));
  if (isMale) {
    return getIndianMaleName();
  } else {
    return getIndianFemaleName();
  }
};

export const getIndianMaleName = (): string => {
  return `${getIndianMaleFirstName()} ${getIndianLastName()}`;
};

export const getIndianFemaleName = (): string => {
  return `${getIndianFemaleFirstName()} ${getIndianLastName()}`;
};

export const getIndianMaleFirstName = (): string => {
  let i = Math.floor(Math.random() * indianMaleFirstNames.length);
  return indianMaleFirstNames[i];
};

export const getIndianFemaleFirstName = (): string => {
  let i = Math.floor(Math.random() * indianFemaleFirstNames.length);
  return indianFemaleFirstNames[i];
};

export const getIndianLastName = (): string => {
  let i = Math.floor(Math.random() * indianLastNames.length);
  return indianLastNames[i];
};
