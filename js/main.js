const navBars = document.querySelectorAll('.bars');
const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const banner = document.querySelector('.banner');

navBtn.addEventListener('click',function () {
  navBars.forEach(navBar => {
    navBar.classList.toggle('clicked');
  });
  
})
const options ={};
const observer = new IntersectionObserver((entries,observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      nav.classList.add('nav-scroll');
    } else{
      nav.classList.remove('nav-scroll');
    }
    
  })
})

observer.observe(banner);