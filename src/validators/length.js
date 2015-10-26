import { flow, dot, and } from '../util';
import { isNumber } from '../core/lang';
import { gte, gt, lte, lt } from '../core/number';

export const maxLength = n => flow(dot('length'), and(isNumber, lte(n)));

export const minLength = n => flow(dot('length'), and(isNumber, gte(n)));
