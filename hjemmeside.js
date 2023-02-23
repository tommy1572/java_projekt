// Menu
let menu = ['NEW IN', 'GIFTS', 'CATEGORIES', 'SALE', 'BRANDS', 'ART IS FOR ALL', 'JOURNAL', 'GIFT CARD', 'CONTACT'];
let menuList = document.createElement('ul');
for (let i = 0; i < menu.length; i++) {
  let menuItem = document.createElement('li');
  menuItem.innerHTML = menu[i];
  menuList.appendChild(menuItem);
}
document.body.appendChild(menuList);

let logo = document.querySelector('.container');

logo.addEventListener('click', function() {
    menuList.classList.toggle("showmenu");
});
// Menu Slut

// pop-up starter
const popOutButton = document.getElementById("button"); 
const bg_container = document.querySelector("bgpopContainer");
const exitPopUp = document.getElementById("bg_container");

popOutButton.addEventListener("click", popOutNow);
document.addEventListener("mouseout", exitPage);

function popOutNow(e) {
    e.preventDefault();
    document.querySelector(".bgpopContainer").style.display = "flex";
}

const cancelPop = document.getElementById("close");

cancelPop.addEventListener("click", cancelPopOut)

function cancelPopOut(e) {
    e.preventDefault();
    document.querySelector(".bgpopContainer").style.display = "none";
}

function exitPage(event) {
    if (event.clientY < 50) {
        document.removeEventListener("mouseout", exitPage);
        exitPopUp.style.display = "flex";
    }
}
// pop-up slut

// slideshow
let slideShow = 0;
kørSlide();

function kørSlide() {
  let i;
  let slides = document.getElementsByClassName("billedeslide");
  let prikker = document.getElementsByClassName("prik");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideShow++;
  if (slideShow > slides.length) {slideShow = 1}    
  for (i = 0; i < prikker.length; i++) {
    prikker[i].className = prikker[i].className.replace(" active", "");
  }
  slides[slideShow-1].style.display = "block";  
  prikker[slideShow-1].className += " active";
  setTimeout(kørSlide, 4000); // skift ved 4 sek
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