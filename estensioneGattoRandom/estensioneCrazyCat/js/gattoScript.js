window.onload = function () {
  fetchAnotherCatLittleWindow();
  document
    .getElementById("get_another_cat")
    .addEventListener("click", fetchAnotherCatLittleWindow);
};

function fetchAnotherCatLittleWindow() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => setCatLittleWindow(data[0]["url"]))
    .catch((err) => console.error(err));
}

function setCatLittleWindow(url) {
  document.getElementById("get_another_cat_main_img").src = url;
  //Torna in top page
  window.scrollTo({ top: 0, behavior: "smooth" });
}
