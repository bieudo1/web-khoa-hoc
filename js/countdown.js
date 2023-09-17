let d = 10;
let h = 5;
let m = 20;
let s = 38;
function start() {
  if (s === -1) {
    m -= 1;
    s = 59;
  }
  if (m === -1) {
    h -= 1;
    m = 59;
  }
  if (h === -1) {
    d -= 1;
    h = 24;
  }
  document.getElementById("d").innerText = d < 10 ? "0" + d.toString() : d.toString();
  document.getElementById("h").innerText = h < 10 ? "0" + h.toString() : h.toString();
  document.getElementById("m").innerText = m < 10 ? "0" + m.toString() : m.toString();
  document.getElementById("s").innerText = s < 10 ? "0" + s.toString() : s.toString();
}
setInterval(function () {
  s--;
  start();
}, 1000);
