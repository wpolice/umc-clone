let over = document.getElementById('table1');
let showContent = document.getElementById('show');

function getShow() {
    over.style.display="block";
}

function getHide() {
    over.style.display="none";
}

showContent.addEventListener('mouseover', getShow);
showContent.addEventListener('mouseleave', getHide);



let nextbtn = document.getElementById('next');
let content = document.getElementById('img1');

function show(){
    nextbtn.style.display='block'
}
function hide(){
    nextbtn.style.display='none'
}
content.addEventListener('mouseover', show);
content.addEventListener('mouseleave', hide);


let video = document.getElementById('video');
function videostr(){
    video.style.display='block'
}
function videostop(){
    video.style.display='none'
}

setTimeout(videostr, 5000);
setTimeout(videostop, 10000);


const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

/* 스크롤 event가 발생했을 때 */
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight => ${navbarHeight}`);
   
  /* 현재 ScrollY 축의 값 > 메뉴바의 높이 */
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark"); /* #navbar.navbar--dark */
    
  } else {
    navbar.classList.remove("navbar--dark"); /* #navbar */
  }
});