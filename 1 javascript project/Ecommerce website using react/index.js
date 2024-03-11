var menuItems = document.getElementById ("menuItems");
menuItems.style.maxHeight = "0px";
function menutoggle(){
      if(menuItems.style.maxHeight == "0px")
      {
            menuItems.style.maxHeight = "200px";

      }
      else{
            menuItems.style.maxHeight = "0px";

      }
      
}


var productImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].onclick = function()
{
      productImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function()
{
      productImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function()
{
      productImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function()
{
      productImg.src = SmallImg[3].src;
}



var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var indicator = document.getElementById("indicator");
function register(){

      RegForm.style.transform = "translateX(0px)";
      LoginForm.style.transform = "translateX(0px)";
}
function login(){

      RegForm.style.transform = "translateX(300px)";
      LoginForm.style.transform = "translateX(300px)";
}
