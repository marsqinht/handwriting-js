/**
 *  add(1,2,3)
 *  add(1)(2)(3)
 *
 */


function curry(fn, ...args) {
  const fnArgsLength = fn.length
  let saveArgs = args
  return function pre(...newArgs) {

    saveArgs = [...saveArgs, ...newArgs]

    if(saveArgs.length < fnArgsLength) {
      return pre
    } else {
      return fn.apply(this, saveArgs)
    }
  }
}


const add = (a, b, c, f) => {
  return a + b + c + f
}


const add1 = curry(add, 1)


console.log(add1(2)(3)(4));