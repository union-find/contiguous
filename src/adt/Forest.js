import {identity} from '../fundamentals/index.js';

export const union = (p, a, b) => {
	p[find(p, b)] = find(p, a);

	return a;
};

export const find = (p, x) => {
	while (x !== p[x]) x = p[x];

	return x;
};

export function Universe(n, List = Array) {
	this.p = identity(n, List);
}

Universe.prototype.union = function (a, b) {
	return union(this.p, a, b);
};

Universe.prototype.find = function (x) {
	return find(this.p, x);
};
