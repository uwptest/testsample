
function myfunction(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
window.external.notify("#" + randomColor);

}

