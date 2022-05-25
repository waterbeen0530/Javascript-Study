let searchBtn = document.getElementById("searchBtn");
let as = document.getElementById("as");

const openWebsite = () => {
  let url = "https://www.google.com/search?q=" + as.value;
  window.open(url);
};

searchBtn.addEventListener("click", openWebsite);

function handleEnter(event) {
  if (event.keyCode == 13) {
    openWebsite();
  }
}
as.addEventListener("keydown", handleEnter);
