const terggle = document.querySelector(".terggle");
const navList = document.querySelector(".nav-list");

terggle.addEventListener("click", function () {
  if (navList.classList.contains("active")) {
    navList.classList.remove("active");
 
  } else {
    navList.classList.add("active");
   
  }
});
