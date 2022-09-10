import {identity, nulls, ones} from '../fundamentals/index.js';

export const union = (back, next, length, a, b) => {
	if (length[a] < length[b]) {
		const c = a;
		a = b;
		b = c;
	}

	next[back[a]] = b;
	back[a] = back[b];

	for (let c = next[a]; c !== b; c = next[c]) back[c] = back[b];

	length[a] += length[b];

	return a;
};

export const find = (back, node) => back[node];

export function Universe(n, List = Array) {
	this.back = identity(n, List);
	this.next = nulls(n, List);
	this._length = ones(n, List);
}

Universe.prototype.union = function (a, b) {
	return union(this.back, this.next, this._length, a, b);
};

Universe.prototype.find = function (node) {
	return find(this.back, node);
};
