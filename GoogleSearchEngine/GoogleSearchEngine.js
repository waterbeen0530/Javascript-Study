const searchBtn = document.getElementById("searchBtn");
const as = document.getElementById("as");

const openGoogle = () => {
  let url = "https://www.google.com/search?q=" + as.value;
  window.open(url);
};

searchBtn.addEventListener("click", openGoogle);

function handleEnter(event) {
  if (event.keyCode == 13) {
    openGoogle();
  }
}
as.addEventListener("keydown", handleEnter);
