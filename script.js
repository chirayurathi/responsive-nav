const navSlide = ()=>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('nav ul')
    const navLink = document.querySelectorAll('nav ul li')
    burger.onclick = ()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('active');
        navLink.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navFade 0.5s ease forwards ${index/7 + 0.5}s`
            }
        })
    }
}
navSlide();
