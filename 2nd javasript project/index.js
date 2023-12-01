// // window.addEventListener("mousemove", function (details){
//       var rect = document.querySelector("#rect");

//  var xval = gsap .utils.mapRange(0, window.innerWidth,100+rect.getboundingClientRect().width/2, window.innerWidth-(100+ rect.getboundingClientRect().width/2), details.clientX);
// gsap.to("#rect", {
// left: xval,
// ease: power3,
// });
// // });
let cursor=document.querySelector("body");
let rect = document.querySelector("#rect");

cursor.addEventListener("mousemove",(event)=>{
    console.log(event.x);
    if (event.x>innerWidth/2)
      rect.style.left = `${
        window.innerWidth / 2 + Math.pow(event.x - window.innerWidth / 2, 0.9)
      }px`;
      else{
         rect.style.left = `${
           window.innerWidth /2 -
           Math.pow(window.innerWidth /2-event.x, 0.9)
         }px`;
      }
})