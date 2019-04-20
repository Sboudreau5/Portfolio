
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


// document.getElementById('design').addEventListener('click',
// 	function() {
//     document.querySelector('.photography-grid').style.display = 'none'
//     document.querySelector('.illustration-grid').style.display = 'none'
//     document.querySelector('.design-grid').style.transition = "all 0.5s ease-in-out 0s";
//      document.querySelector('.design-grid').style.display = 'block'
  
//     setTimeout(function() {
//         document.querySelector('.design-grid').style.opacity = 1;
//     }, 1000);
    
  
// });



// document.getElementById('illustration').addEventListener('click',
// 	function() {
//     document.querySelector('.photography-grid').style.display = 'none'
//     document.querySelector('.design-grid').style.display = 'none'
//     document.querySelector('.illustration-grid').style.transition = "all 0.5s ease-in-out 0s";
//      document.querySelector('.illustration-grid').style.display = 'block'
  
//     setTimeout(function() {
//         document.querySelector('.illustration-grid').style.opacity = 1;
//     }, 1000);
    
  
// });



// document.getElementById('photography').addEventListener('click',
// 	function() {
//     document.querySelector('.design-grid').style.display = 'none'
//     document.querySelector('.illustration-grid').style.display = 'none'
//     document.querySelector('.photography-grid').style.transition = "all 0.5s ease-in-out 0s";
//      document.querySelector('.photography-grid').style.display = 'block'
  
//     setTimeout(function() {
//         document.querySelector('.photography-grid').style.opacity = 1;
//     }, 1000);
    
  
// });


// Grid fades

var timing = 500 //length of delay

document.getElementById('design').addEventListener('click',
    function() {
        showHideGrids('.design-grid')
  
});

document.getElementById('illustration').addEventListener('click',
    function() {
        showHideGrids('.illustration-grid')
  
});

document.getElementById('photography').addEventListener('click',
    function() {
        showHideGrids('.photography-grid')
  
});

function showHideGrids(el) {
    var grid = document.querySelector(el)
    if (document.querySelector('#active-grid')) {
        document.querySelector('#active-grid').style.opacity = '0'
        setTimeout(function() { 
            document.querySelector('#active-grid').id = ''
            grid.id = 'active-grid'
            setTimeout(function() {
                grid.style.opacity = '1'
            }, timing)
        }, timing)
    } else {
        grid.id = 'active-grid'
        setTimeout(function() {
                grid.style.opacity = '1'
            }, timing)
    }
}















// $("img.design-images").click(function() {
//     if ($(this).hasClass("design-images")) {
//         $(this).removeClass("design-images");
//     } else {
//         $(this).addClass("design-images-enlarged");
//     }
    
// });











    
