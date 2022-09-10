:rice: [@union-find/contiguous](https://union-find.github.io/contiguous)
==

<p align="center">
<a href="https://commons.wikimedia.org/wiki/File:Disjoint_sets.svg">
<img alt="A collection of disjoint sets" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Disjoint_sets.svg" width="300">
</a><br/>
<a href="https://commons.wikimedia.org/w/index.php?title=User:Svjo">
User:Svjo
</a>
/
<a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>
</p>

Contiguously-allocated disjoint-set data structures for JavaScript.
See [docs](https://union-find.github.io/contiguous).
Parent is
[js-data-structures](https://github.com/make-github-pseudonymous-again/js-data-structures).

```js
U.find( a ) === U.find( b ) ; // false
U.union( A , B ) ;
U.find( a ) === U.find( b ) ; // true
```

[![License](https://img.shields.io/github/license/union-find/contiguous.svg)](https://raw.githubusercontent.com/union-find/contiguous/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@union-find/contiguous.svg)](https://www.npmjs.org/package/@union-find/contiguous)
[![Tests](https://img.shields.io/github/workflow/status/union-find/contiguous/ci?event=push&label=tests)](https://github.com/union-find/contiguous/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/union-find/contiguous.svg)](https://github.com/union-find/contiguous/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/union-find/contiguous.svg)](https://github.com/union-find/contiguous/issues)
[![Downloads](https://img.shields.io/npm/dm/@union-find/contiguous.svg)](https://www.npmjs.org/package/@union-find/contiguous)

[![Code issues](https://img.shields.io/codeclimate/issues/union-find/contiguous.svg)](https://codeclimate.com/github/union-find/contiguous/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/union-find/contiguous.svg)](https://codeclimate.com/github/union-find/contiguous/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/union-find/contiguous/main.svg)](https://codecov.io/gh/union-find/contiguous)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/union-find/contiguous.svg)](https://codeclimate.com/github/union-find/contiguous/trends/technical_debt)
[![Documentation](https://union-find.github.io/contiguous/badge.svg)](https://union-find.github.io/contiguous/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@union-find/contiguous)](https://bundlephobia.com/result?p=@union-find/contiguous)

## :dancing_women: Related

  - [`@union-find/non-contiguous`](https://github.com/union-find/non-contiguous):
    Implementation of the same data structures with nodes and pointers instead
    of arrays.

## :scroll: References

  - [Wikipedia page on disjoint-set data structures](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)
