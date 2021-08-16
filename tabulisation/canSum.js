const canSum = (targetSum, numbers) => {
  const table = Array(targetSum+1).fill(false)
  table[0] = true
  for (let i = 0; i <= targetSum; i++){
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true
      }
    }
  }
  return table[targetSum]
}

console.log(canSum(5, [1,2,3]))
console.log(canSum(200, [4,5,6]))
console.log(canSum(10, [3,6,9]))
console.log(canSum(20, [19,1]))