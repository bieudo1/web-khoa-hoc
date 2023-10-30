const element = document.getElementById("popup");
function openModalFunction() {
  element.classList.add("on-popup");
  element.classList.remove("off-popup");
}
function closeModalFunction() {
  element.classList.add("off-popup");
  element.classList.remove("on-popup");
}
element.addEventListener("click", closeModalFunction);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !element.classList.contains("popup")) {
    closeModalFunction();
  }
});
function video1() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/0VdFwAETQnM?si=cPlGLRmR_N7Dy4Z7?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
function video2() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1w7lFpsKkJzng63Q_Ih3QGRJHHmkoYxUH/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video3() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/hs8inSGPve0?si=zCdw0dP047PVp6Wp?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
function video4() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1LxHqcDUHDnvqo9_k4HNc25HeTRjQvhMy/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video5() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZwotI00Digo?si=OLG6_RHKsMN3p92S?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
function video6() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xNmA2r-Kpxc?si=NLLyHIfKt-dDeAbk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
function video7() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xWZfwkqZApc?si=kv3y5hZWPsCFbksA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
function video8() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MEn6Jow1Ru0?si=PkytElumryIiPA_4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>?autoplay=1`;
}
