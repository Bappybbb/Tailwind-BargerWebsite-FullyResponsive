const hamberger = document.getElementById('hamberger');
const navMenu = document.getElementById('nav-menu');
const colseIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link'); // . dot must be add here

navLink.forEach(link =>
          link.addEventListener("click" , () => {
                    navMenu.classList.add('hidden')
          })
)


colseIcon.addEventListener("click" , ()=>{
   navMenu.classList.add('hidden')
})


hamberger.addEventListener("click" ,()=>{
          navMenu.classList.remove('hidden')
})