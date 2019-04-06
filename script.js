document.getElementById('Hamburger-Menu').addEventListener('click',
	function() {
	document.querySelector('.side-nav').style.width = '20em'
    document.querySelector('.hamburgerimenu').style.display = 'none'
    document.querySelector('.exitmenu').style.display = 'flex'
     document.querySelector('ul').style.opacity = '1'
    document.querySelector('.about-icon').style.opacity = '1'
     document.querySelector('.home-icon').style.opacity = '1'
    document.querySelector('.contact-icon').style.opacity = '1'
    document.querySelector('.portfolio-icon').style.opacity = '1'
   document.querySelector('ul').style.display = 'block'
    
    
});


document.getElementById('exitmenu').addEventListener('click',
	function() {
	document.querySelector('.side-nav').style.width = '0em'
     document.querySelector('.hamburgerimenu').style.display = 'flex'
    document.querySelector('.exitmenu').style.display = 'none'
    document.querySelector('ul').style.opacity = '0' 
    document.querySelector('home-icon').style.opacity = '0'
 document.querySelector('about-icon').style.opacity = '0'
     document.querySelector('.contact-icon').style.opacity = '0'
    document.querySelector('.portfolio-icon').style.opacity = '0'
     document.querySelector('ul').style.display = 'none'
    
     
});
