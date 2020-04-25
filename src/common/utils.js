export function zero(value) {
  return value < 10 ? '0' + value : value;
}

export function timeShift(time) {
  return Math.floor(time / 60000) + ':' + zero(Math.floor(time % 60000 / 1000))
}

export function timeWidth(time, totalTime) {
  return (time / totalTime) * 100 + '%'
}
