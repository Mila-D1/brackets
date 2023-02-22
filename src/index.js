module.exports = function check(str, bracketsConfig) {
  let stack = []
  let opening = {}
  let closing = {}
  bracketsConfig.forEach((c) => {
      opening[c[0]] = c[1]
      closing[c[1]] = c[0]
  })

  for (let i = 0; i < str.length; i++) {
      let c = str[i]

      if (
          closing[c] !== undefined &&
          stack.length > 0 &&
          stack.at(-1) === closing[c]
      ) {
          stack.pop()
      } else if (opening[c] !== undefined) {
          stack.push(c)
      } else {
          return false
      }
  }

  return stack.length == 0
}