const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []
  for (let i = 0; i <= targetSum; i++){
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num]
      }
    }
  }
  return table[targetSum]
}

console.log(howSum(5, [1,2,3]))
console.log(howSum(200, [4,5,6]))
console.log(howSum(10, [3,6,9]))
console.log(howSum(20, [19,1]))