// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("billedeslide");
  let dots = document.getElementsByClassName("prik");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // skift ved 4 sek
}

function changeColor(element, color) {
  element.style.backgroundColor = color; 
}
// slideshow slut
// Sprog selector starter
select_element = document.getElementById("langSelect");
let sprog = ["Dansk", "English", "Deutsch",];


// Udvider option-boks baseret på antal sprog i array'et
for (let i=0; i < sprog.length; i++) {
let opt = sprog[i];
select_element.innerHTML += "<option value=\" "+ opt +"\">"+ opt + "</option";
}

document.getElementById("langSelect").onchange = function(){
if (document.getElementById("langSelect").value == ' Dansk')
location.replace('index.html');
else if (document.getElementById("langSelect").value == ' English')
location.replace('indexEn.html');
else
location.replace('indexDe.html')
}
document.getElementById("langSelect").selectedIndex = 1;
//Sprog selector slut