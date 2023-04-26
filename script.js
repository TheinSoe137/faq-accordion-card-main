let acc = document.getElementsByClassName("dropdown");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let card = this.nextElementSibling;
    if (card.style.display === "block") {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
}
