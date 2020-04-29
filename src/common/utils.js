export function zero(value) {
  return value < 10 ? '0' + value : value;
}

export function timeShift(time) {
  return Math.floor(time / 60000) + ':' + zero(Math.floor(time % 60000 / 1000))
}

export function timeWidth(time, totalTime) {
  return (time / totalTime) * 100 + '%'
}

export function debounce(func, delay = 500) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}