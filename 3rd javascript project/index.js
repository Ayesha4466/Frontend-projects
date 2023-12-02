const btn=document.querySelector("#throttle");     
const throttleFunction=(func, delay)=>{
  let prev = 0; 
  return (...args) => {
    let now = new Date().getTime(); 
    console.log(now-prev, delay); 
    if(now - prev> delay){ 
      prev = now;
      return func(...args);  
    }
}
}
document.querySelector("#center")
.addEventListener("mousemove", throttleFunction((dets)=>{
      var div = document.createElement("div");
      div.classList.add('imagediv');
      div.style.left = dets.clientX+ 'px'; 
      div.style.top = dets.clientX+ 'px'; 
      div.style.bottom = dets.clientX+ 'px'; 
      div.style.right = dets.clientX+ 'px'; 



   var img =  document.createElement("img");
   img.setAttribute("src","https://cdn.pixabay.com/photo/2023/11/24/10/15/cockatoo-8409655_640.jpg");
   div.appendChild(img);

document.body.appendChild(div);





setTimeout(function(){
div.remove();
},2000)
    }, 500)
    );