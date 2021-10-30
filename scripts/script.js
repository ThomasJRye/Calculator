
let lightTheme = "styles/light.css";
var state=false;

// Clears the screen on click of C button.
function clearscreen() {
  const div = document.getElementById("clear");
  if (state) {
    div.style.background = "Red";
    div.value = "Off";
    state = false;
    

  } else {
    div.style.background = "Green";
    div.value = "On"
    state = true;
  }
  
}

// Displays entered value on screen.
function liveScreen(value) {
  let res = document.getElementById("result");
  if(res.value == "undefined"){
    res.value = "";
  }
  res.value += value;
  result.value = eval(result.value)
}

function fanScreen(value) {
  let res = document.getElementById("fan");
  if(res.value == "undefined"){
    res.value = "";
  }
  
  res.value += value;
  fan.value = eval(fan.value)
}
