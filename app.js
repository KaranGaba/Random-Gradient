const body = document.querySelector("body");
const generate = document.querySelector(".generate");
const copyBtn = document.querySelector(".copyColor");
const colorInfo = document.querySelector(".colorText");
let firstColor, secondColor, angle;

//Functions
function generateColor() {
  firstColor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  secondColor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  angle = random(180) + "deg";
  gradient =
    "linear-gradient(" + angle + "," + firstColor + "," + secondColor + ")";
  body.style.backgroundImage = gradient;
  colorInfo.innerHTML =
    firstColor + " <i class='fas fa-arrow-right'></i> " + secondColor;
}

function random(n) {
  let num = Math.floor(Math.random() * n) + 1;
  return num;
}

function copyCSS() {
  let copyText = `background: ${firstColor}  /* fallback for old browsers */
                  background: -webkit-linear-gradient(${angle}, ${firstColor}, ${secondColor});  /* Chrome 10-25, Safari 5.1-6 */
                  background: linear-gradient(${angle}, ${firstColor}, ${secondColor}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`;
  navigator.clipboard.writeText(copyText);
  copyBtn.setAttribute("title", "Text Copied");
}

//actions
generateColor()
generate.addEventListener("click", generateColor);
copyBtn.addEventListener("click", copyCSS);
