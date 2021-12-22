var isCardFacingFront = true;
var isLightOn = false;

function flipCard() {
  console.log("flipCard();")
  if (isCardFacingFront === true) {
    document.getElementById("card-1-front").style.display = "none";
    document.getElementById("card-1-back").style.display = "block";
    isCardFacingFront = false;
  }
  else {
    document.getElementById("card-1-front").style.display = "block";
    document.getElementById("card-1-back").style.display = "none";
    isCardFacingFront = true;
  }
}


function toggleLight() {
  console.log("toggleLight();")
  if (isLightOn === false) {
    document.getElementById("light").style.display = "block";
    isLightOn = true;
  }
  else {
    document.getElementById("light").style.display = "none";
    isLightOn = false;
  }
}