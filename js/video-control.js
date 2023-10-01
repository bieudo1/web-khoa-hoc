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
function video2() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1ilH5Uk0BkYBW-eLJXjA6m1c51sp9OvHN/preview" width="640" height="480" allow="autoplay"></iframe>`;
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
  ).innerHTML = `<iframe src="https://drive.google.com/file/d/1avexx3rFYpRXLe3hncid8Bbu6LBO4_lK/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
function video9() {
  openModalFunction();
  document.getElementById(
    "feedback"
  ).innerHTML = `<iframe class="video" src="https://drive.google.com/file/d/1q7uU7lGmhiHswLBjxZs8AT1FmlKpnW6S/preview" width="640" height="480" allow="autoplay"></iframe>`;
}
