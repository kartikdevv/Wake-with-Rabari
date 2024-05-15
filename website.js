window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})


const productContainers = [...document.querySelectorAll('.img_container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const textContainers = [...document.querySelectorAll('.theme-name')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        textContainers.forEach(textContainer => {
            textContainer.style.left = `${-item.scrollLeft}px`;
        });
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        textContainers.forEach(textContainer => {
            textContainer.style.left = `${-item.scrollLeft}px`;
        });
    });
});

window.addEventListener('scroll', function() {
    var container = document.querySelector('.camel-container');
    var image = document.getElementById('#camel');
    var triggerHeight =850; // Adjust this to your desired scroll height
  
    if (window.scrollY > triggerHeight) {
      container.style.position = 'fixed';
      container.style.bottom = '0';
      container.style.left = '0';
      image.style.position = 'fixed';
    } else {
      container.style.position = 'relative';
      container.style.bottom = '';
      container.style.left = '';
      image.style.position = 'relative';
    }
});
  
  
  

const hamMenu = document.querySelector('. ham-menu');
const offScreenMenu = document.querySelector ('.off-screen-menu');
hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})