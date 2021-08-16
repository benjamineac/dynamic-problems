const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []
  for (let i = 0; i <= targetSum; i++){
    if (table[i] !== null) {
      for (let num of numbers) {
        if (!table[i + num] || table[i + num].length > [...table[i], num].length){
          table[i + num] = [...table[i], num]
        }    
      }
    }
  }
  return table[targetSum]
}
console.log(bestSum(5, [1,2,3]))
console.log(bestSum(200, [4,5,6]))
console.log(bestSum(10, [3,6,9]))
console.log(bestSum(20, [19,1]))