import { programmingLangs } from '../utils/programming';

export const getRandomProgrammingLanguage = (): string => {
    let i = Math.floor(Math.random() * programmingLangs.length);
    return programmingLangs[i];
};