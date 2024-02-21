export function periodCalc(count) {

  // OBJECTIVE
  // Pre-calculate a proper interval period for the Stopowatch component.
  // So the stopwatch should run during plus/minus 5 seconds before showing the final result.
  // This is for a good user's experience.

    let period;

    if (count <= 0) return
  
    if (count <= 5) {
      period = 1000
    } else if (count > 5 && count <= 10) {
      period = 500
    } else if (count > 10 && count <= 20) {
      period = 250
    } else if (count > 20 && count <= 40) {
      period = 150
    } else if (count > 40 && count <= 80) {
      period = 80
    } else if (count > 80 && count <= 160) {
      period = 50
    } else {
      period = 20
    }

    return period
}
