document.getElementById('Hamburger-Menu').addEventListener('click',
	function() {
	document.querySelector('.side-nav').style.width = '20em'
    document.querySelector('.hamburgerimenu').style.display = 'none'
    document.querySelector('.exitmenu').style.display = 'flex'
   document.querySelector('ul').style.display = 'block'
document.querySelector('ul').style.opacity = '1'
    
    
});


document.getElementById('exitmenu').addEventListener('click',
	function() {
    document.querySelector('ul').style.display = 'none'
	document.querySelector('.side-nav').style.width = '0em'
     document.querySelector('.hamburgerimenu').style.display = 'flex'
    document.querySelector('.exitmenu').style.display = 'none'
    document.querySelector('ul').style.display = 'none'
    document.querySelector('ul').style.opacity = '0'
    
  
    
     
});
