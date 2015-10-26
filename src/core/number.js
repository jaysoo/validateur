import { and } from './../util';

export const gte = n => x => x >= n;
export const gt = n => x => x > n;
export const lte = n => x => x <= n;
export const lt = n => x => x < n;

export const range = (n, m) => and(gte(n), lte(m));