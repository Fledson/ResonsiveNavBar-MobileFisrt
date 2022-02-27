/*==================== ATIVAR LINK DAS SEÇÕES NA ROLAGEM ====================*/
// pegando o id de todas as seções
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
  // pegando o numero de px rolados da pagina
  const scrollY = window.pageYOffset
  // console.log(scrollY);
    sections.forEach(current =>{
        // pegando a altura do elemento
        const sectionHeight = current.offsetHeight
        // retorna a medida, em pixels, da distância do elemento atual em relação ao topo (esse - )
        const sectionTop = current.offsetTop - 300
       
        // pegando o id da sessão
        const sectionId = current.getAttribute('id')
        console.log(sectionId, 
          scrollY > sectionTop && 
          scrollY <= sectionTop + sectionHeight,
          'scrollY: ' + scrollY , 'sectionTop '+sectionTop,'sectionHeight '+ sectionHeight ,'sum '+(sectionTop + sectionHeight)
          )
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== ADICIONANDO UMA BORDA NO HEADER =====================*/ 
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)