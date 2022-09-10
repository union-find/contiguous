import {rankedtreeunion, _RankedTreeUniverse} from '../fundamentals/index.js';

export const union = rankedtreeunion;

export const find = (p, node) => {
	let parent = p[node];

	for (; p[parent] !== parent; parent = p[node]) {
		p[node] = p[parent];
		node = p[node];
	}

	return parent;
};

export const Universe = _RankedTreeUniverse(union, find);
