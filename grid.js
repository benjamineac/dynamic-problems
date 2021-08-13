const grid = (m, n, memo = {}) => {
  const k = (m + ',' + n)
  if (k in memo) return memo[k]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  memo[k] = grid(m - 1, n, memo) + grid(m, n - 1, memo)
  return memo[k]

}
console.log(grid(7, 3))