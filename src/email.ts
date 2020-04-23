import { randomEmails } from '../utils/emails';
import { getName } from './names';

export const getRandomEmail = (): string => {
  let i = Math.floor(Math.random() * randomEmails.length);
  let nameLower = getName().split(' ').join('').toLowerCase();
  return `${nameLower}@${randomEmails[i]}`;
};
