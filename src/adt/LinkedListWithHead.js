import {identity, nulls} from '../fundamentals/index.js';

export const union = (back, next, a, b) => {
	next[back[a]] = b;
	back[a] = back[b];

	for (let c = next[a]; c !== b; c = next[c]) back[c] = back[b];

	return a;
};

export const find = (back, node) => back[node];

export function Universe(n, List = Array) {
	this.back = identity(n, List);
	this.next = nulls(n, List);
}

Universe.prototype.union = function (a, b) {
	return union(this.back, this.next, a, b);
};

Universe.prototype.find = function (node) {
	return find(this.back, node);
};
