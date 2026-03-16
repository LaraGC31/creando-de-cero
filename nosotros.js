function  diasemana() {
  for (let i =1; i <=5 ;i++) {
    let o = document.getElementById("diasemana"+i).addEventListener("click",function () {
      alert(document.getElementById("diasemana"+i).textContent);
    })
  }
}

window.onload=function() {
  diasemana();
}