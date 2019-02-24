(function(){

  let togglerBtn = document.querySelector('.navbar__toggler'),
      closeBtn  = document.querySelector('#btn-close'),
      navCollapse = document.querySelector('.navbar__collapse'),
      navLinks = document.querySelectorAll('.navbar__collapse li'),
      about = document.querySelector('#about');


  togglerBtn.addEventListener('click', () => {
    navCollapse.classList.add('show');
  })

  closeBtn.addEventListener('click', () => {
    navCollapse.classList.remove('show');
  })


  navLinks.forEach(link => {
    link.onclick = function() {

      linkFirst = navLinks[1];
      while( linkFirst ) {
        if( linkFirst.tagName === "LI" ) {
          linkFirst.classList.remove('active');
        }
        linkFirst = linkFirst.nextSibling;
      }
      this.classList.add('active');
      navCollapse.classList.remove('show');
    }
  })

  window.addEventListener('scroll', function(){
    let navOffset = navCollapse.offsetTop;

    if(window.pageYOffset > navOffset){
      navCollapse.classList.add('fixed');
    } else {
      navCollapse.classList.remove('fixed');
    }
  })

})()