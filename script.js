let contentLeft = document.querySelector('.content--left');
let contentRight = document.querySelector('.content--right');

function mostrar() {
    contentLeft.style.opacity = 1;
    setInterval(() => {
        contentRight.style.opacity = 1;
    }, 4000);
}
setInterval(() => {
    mostrar();
}, 2000);
function mostrarCoracao() {
    document.querySelector('.coracao').style.opacity = 1;
}
setInterval(() => {
    mostrarCoracao();
}, 7000);







let slide = document.querySelector('.slide');

let buttonLeft = document.querySelector('.btnLeft');
let buttonRight = document.querySelector('.btnRight');
let marginLeft = 0;


buttonRight.addEventListener('click', function(){
    marginLeft -= 550;
    slide.style.marginLeft = `${marginLeft}px`;
    console.log(`${marginLeft}`)
    if (marginLeft <= -5000) {
        marginLeft = 500;
    }
});
buttonLeft.addEventListener('click', function(){
    marginLeft += 550;
    slide.style.marginLeft = `${marginLeft}px`;
    console.log(`${marginLeft}`);
    if (marginLeft > 0 ) {
        marginLeft = -550;
    }
});
function clicar(){
    marginLeft -= 550;
    slide.style.marginLeft = `${marginLeft}px`;
    if (marginLeft <= -5000) {
        marginLeft = 550;
    }
}
setInterval(() => {
    clicar();
}, 5000);
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.getElementById('heart-container').appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  setInterval(createHeart, 1000);
  
  let coracao = document.querySelector('.coracao');

  let coracaoTxt = document.querySelector('.txt--coracao');
  coracao.addEventListener('click', () => {

    console.log('clicou no coração!')

    coracaoTxt.style.display = 'block';

    
  coracaoTxt.addEventListener('click', () =>{
    coracaoTxt.style.display = 'none';
  });
  })

