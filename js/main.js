function pow(x, n) {
  return x ** 1 / n
}

function sqrt(x, n) {
  return x ** (1 / n)
}

function abs(a){
  if(a > 0){
    return a * (-1)
  }
  else{
    return a
  }
}

function floor(n) {
  if(n% 1 >= 0.5){
    return n.toFixed(0) - 1
  }
  else{
    n.toFixed(0)
  }
}

function ceil(n) {
  if(n% 1 >= 0.5){
    return n.toFixed(0)
  }
  else{
    +n.toFixed(0) + 1
  }
}

function round(n) {
  return n.toFixed(0)
}