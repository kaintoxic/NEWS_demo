let list = document.querySelectorAll(".item-header");
[...list].forEach(item => console.log(item));
[...list].forEach(item => item.addEventListener("click",function(e){
  console.log(e.taregt);
}))

