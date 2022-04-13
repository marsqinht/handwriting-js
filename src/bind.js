
const a = {
  g: 1
}

const b = function() {
  return this
}


Function.prototype.myBind = function(target) {
  const fn = this
  return function(...args) {
    return fn.apply(target, args)
  }
}

const c = b.myBind(a)

console.log('c() :>> ', c(1, 2));