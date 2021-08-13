const canConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target] 
  if (target === '') return true

  for (word of wordBank) {
    if (target.indexOf(word) === 0){
      const suffix = target.slice(word.length)
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true
        return true
      }
    }
  }
  memo[target] = false
  return false
}

console.log(canConstruct('abcdef', ['ab', 'cd', 'ef']))
console.log(canConstruct('ben', ['b', 'en', 'ne']))
console.log(canConstruct('matahana', ['mataha', 'hana', 'n']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'eeeeee',
  'eeeee',
  'eeee',
  'eee',
  'ee',
  'e']))