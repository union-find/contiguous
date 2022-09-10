export default function identity(n, List = Array) {
	const a = new List(n);

	for (let i = 0; i < n; ++i) a[i] = i;

	return a;
}
