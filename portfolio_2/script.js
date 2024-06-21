// animation typing for index
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Técnica em Desenvolvimento de Sistemas🎓", "Estudante de Ciências da Computação📚", "Desenvolvedora júnior back-end Java☕"];
const typingDelay = 80;
const erasingDelay = 1;
const newTextDelay = 1100; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// menu mobile for ALL pages
const menu = document.querySelector(".menu"),
openMenu = document.querySelector(".bi-list"),
closeMenu = document.querySelector(".bi-x");

openMenu.addEventListener("click", () => {
  menu.classList.add("closeMenu");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("closeMenu");
})