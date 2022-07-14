const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) navbar.classList.add("scroll");
  else navbar.classList.remove("scroll");
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate");
      else entry.target.classList.remove("animate");
    });
  },
  {
    threshold: 0.25,
  }
);
[...document.getElementsByClassName("fade-in")].forEach((element) => {
  io.observe(element);
});
