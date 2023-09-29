const tagH = document.querySelectorAll(".slow-loading");
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}
const observer = new IntersectionObserver(handleIntersection);
tagH.forEach((tag) => observer.observe(tag));
