import {rankedtreeunion, _RankedTreeUniverse} from '../fundamentals/index.js';

export const union = rankedtreeunion;

export const find = (p, node) => {
	let it = node;

	for (; it !== p[it]; it = p[it]);

	while (p[node] !== it) {
		const parent = p[node];
		p[node] = it;
		node = parent;
	}

	return it;
};

export const Universe = _RankedTreeUniverse(union, find);
