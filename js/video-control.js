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
  console.log(event.key);
  if (event.key === "Escape" && !element.classList.contains("popup")) {
    closeModalFunction();
  }
});

function video1() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1lL61bn40H0be-3HLNNIKBKiEGqBSHO3i/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video2() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1tLW_Y7O1JlhlPtuMlXZEiedvM9CTMW1Q/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video3() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1cT2i6NcjAie6QCy_fvvwsw6cLHz7TqDd/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video4() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/11uG4UiV70FiQiM7kmBlRyIaopBJk-Z5j/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video5() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1a6PXCybWNqj3RaF6rxBoTSkL_y0EkKam/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video6() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1__wCVwBGeNeya26_Bqsb-yq8Uc5jfbaM/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video7() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1ylBQjKyp0BH7XXhe1iUIXkH7QxwZd7EV/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video8() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/187Zza40cNGGOQ9requ34MoS_nmpOsy3l/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video9() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1q7uU7lGmhiHswLBjxZs8AT1FmlKpnW6S/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video10() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1-uSl8SmAVeKC5kwzLb3Sn2oRdsX6Byyr/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video11() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1cLyA8TEeuX8FxLBN_dbgEciYF9ewnHtX/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
