
let textChange = document.getElementById("h1");
let btn = document.getElementById("button");
btn.addEventListener("click", function () {
    if (textChange.textContent === "The most affordable learning platform") {
      textChange.textContent = "PW Skills";
    } else {
      textChange.textContent = "The most affordable learning platform";
    }
  })