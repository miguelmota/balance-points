# balance-points

> Find the balance points of an array.

A balance point is where the left side of the index is equal to the right side of the index. This function returns an array of indices of balance points.

# Install

```bash
npm install balance-points
```

```bash
bower install balance-points
```

# Usage

```javascript
const balancepoints = require('balance-points');

console.log(balancePoints([3, -2, 0, 4, 6, -5])); // [3]
console.log(balancePoints([1, 0, 0, 1])); // [1, 2]
console.log(balancePoints([2, -1, 1, -1, 1])); // [0]
console.log(balancePoints([-4, -7, 6, 2, 9, -3])); // [4]
console.log(balancePoints([])); // []
```

# Test

```bash
npm test
```

# License

MIT
