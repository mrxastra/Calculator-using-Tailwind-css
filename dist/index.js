let currentDisplay = '';
function liveClick(buttonValue){
  currentDisplay += buttonValue;
  document.querySelector('#Display').innerText = currentDisplay;
  // console.log(document.querySelector('#Display').value = currentDisplay);
}
function clearr(cDisplay){
  cDisplay = '';
  currentDisplay = '';
  document.querySelector('#Display').innerText = cDisplay;
}
function calculate(){
  let equalto = eval(currentDisplay);
  document.querySelector('#Display').innerText = equalto;
}