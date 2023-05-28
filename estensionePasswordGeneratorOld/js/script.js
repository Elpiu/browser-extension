document.getElementById("btn-genera").addEventListener("click", buttonPressed);
document
  .getElementById("customRange1")
  .addEventListener("change", buttonPressed);

document.getElementById("anchor1").onclick = function (e) {
  e.preventDefault();
  window.open("https://www.security.org/how-secure-is-my-password/", "_blank");
};

document.getElementById("anchor2").onclick = function (e) {
  e.preventDefault();
  window.open("https://haveibeenpwned.com/", "_blank");
};

document.getElementById("anchor3").onclick = function (e) {
  e.preventDefault();
  window.open("https://github.com/Elpiu", "_blank");
};

document.getElementById("anchor4").onclick = function (e) {
  e.preventDefault();
  window.open("https://www.linkedin.com/in/elpidio-mazza-72b641155/", "_blank");
};

function buttonPressed() {
  var passw = generatePassword($("#customRange1").val());
  $("#copy-target").val(passw);
  $("#copy-target").addClass("active");
}

document.getElementById("btn-copy").addEventListener("click", copyClickboard);

function copyClickboard() {
  var copyText = document.getElementById("copy-target");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  //alert("Copied the text: " + copyText.value);
}
