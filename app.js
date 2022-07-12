var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

function myFunction(){
  const content = document.querySelector('.myDIV');
  if (content.style.display === "none"){
    content.style.display = "block";
    document.querySelector('.icon-plus').style.display = 'none';
     document.querySelector('.icon-minus').style.display = 'block';
  }else{
    content.style.display ="none";
    document.querySelector('.icon-plus').style.display = 'block';
     document.querySelector('.icon-minus').style.display = 'none';
  }

}
function myFunction2(){
  const content = document.querySelector('.divT');
  if (content.style.display === "none"){
    content.style.display = "block";
    document.querySelector('.plusT').style.display = 'none';
     document.querySelector('.minusT').style.display = 'block';
  }else{
    content.style.display ="none";
    document.querySelector('.plusT').style.display = 'block';
     document.querySelector('.minusT').style.display = 'none';
  }

}
const open = document.querySelector(".icon-reorder");
const close = document.querySelector(".icon-remove");

open.onclick = function(){
  document.querySelector(".mobile-navi").style.display ="block";
  close.style.display="block";
  open.style.display ="none";
}
close.onclick = function(){
  document.querySelector(".mobile-navi").style.display ="none";
  close.style.display="none";
  open.style.display ="block";
}

let parent = document.querySelector('.mobileView-wrapper').parentElement;

while (parent) {
    const hasOverflow = getComputedStyle(parent).overflow;
    if (hasOverflow !== 'visible') {
        console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mobileSlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}