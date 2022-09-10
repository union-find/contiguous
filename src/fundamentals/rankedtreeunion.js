export default function rankedtreeunion(p, r, a, b) {
	if (r[a] < r[b]) {
		p[a] = b;
		return b;
	}

	if (r[a] > r[b]) {
		p[b] = a;
		return a;
	}

	p[b] = a;
	++r[a];
	return a;
}
