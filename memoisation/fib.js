const fib =  (num, memo = {}) => {
  if (num in memo) return memo[num]
  if (num <= 2) return 1
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo)
  return memo[num]
}