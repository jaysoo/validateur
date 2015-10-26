import { isEmpty, isString} from './lang';
import { and, not } from './../util';

export const nonEmptyString = and(isString, not(isEmpty));

export const match = regexp => and(nonEmptyString, str => regexp.test(str));
