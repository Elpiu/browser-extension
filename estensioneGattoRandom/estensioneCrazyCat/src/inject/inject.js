chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Hello. This message was sent from scripts/inject.js");
      // ----------------------------------------------------------

      var a = document.getElementsByTagName("img");
      for (i = 0; i < a.length; i++) {
        getUrlCat(a[i]);
      }

      async function getUrlCat(img) {
        fetch("https://api.thecatapi.com/v1/images/search")
          .then((response) => response.json())
          .then((data) => {
            img.src = data[0]["url"];
          })

          .catch((err) => console.error(err));
      }
    }
  }, 10);
});
