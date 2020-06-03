const nav = document.querySelector('.nav');

// NAVBAR SCROLL EFFECT

window.onscroll = function(){
    this.console.log(window.scrollY);
    let scrollTop = window.scrollY;
    this.console.log(scrollTop);
    if(scrollTop !== 0){
        nav.classList.add('navChange');
    }else{
        nav.classList.remove('navChange');
    }
}
