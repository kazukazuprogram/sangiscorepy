function onload() {
  document.getElementById('form').onsubmit = function () {
    console.log("Submitted.");
    return false;
  };
}
