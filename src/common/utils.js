export function timeShift(time) {
  return (parseInt(time / 60000) + parseInt(time % 60000 / 1000) / 100).toFixed(2)
}

export function timeWidth(time, totalTime) {
  return (time / totalTime) * 100 + '%'
}