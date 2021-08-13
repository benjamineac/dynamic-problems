const allConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target]
  if (target === '') return [[]]
  const result = []

  for (let word of wordBank){
    if (target.indexOf(word) === 0){
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct(suffix, wordBank, memo)
      const targetWays = suffixWays.map(way => [word, ...way])
      result.push(...targetWays)
    }
  }
  memo[target] = result
  return result
}

console.log(allConstruct('abcdef', ['ab', 'a', 'b', 'c', 'd', 'cd', 'ef']))
console.log(allConstruct('bitsandbobs', ['b', 'its', 'and', 'bobs', 'ne']))
console.log(allConstruct('men', ['m', 'en', 'ne', 'e', 'n']))
console.log(allConstruct('matahana', ['mataha', 'hana', 'n']))
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeez', [
  'eeeeee',
  'eeeee',
  'eeee',
  'eee',
  'ee',
  'e']))