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
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1HVTUWDtSIsAxuatjtk6uaZ3Y7Zuc-HZJ/preview" width="640" height="480" allow="autoplay"></iframe>`;
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
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1KmHjL5K54pYDVrb42MlodKSXGcn_n2Ln/preview" width="640" height="480" allow="autoplay"></iframe>`;
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
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1F3AKcncC6gl4FB7lfjNSy16bweXmg6VV/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video6() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1FBRgxRJFB2vX5yTZnKmHtPZthQ-vUUK3/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video7() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1y6zjtNO2ItjmIZC8s4b20OvvEVgwtOG2/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video8() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1Kwln6iOuih5zpy3m3OhoMmCTFExmDvzc/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
