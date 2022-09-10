export default function zeros(n, List = Array) {
	const a = new List(n);

	for (let i = 0; i < n; ++i) a[i] = 0;

	return a;
}
