
        
function hreff(){
    window.location("Index.html");
};

function zoomoutfunc(){
	alert('its on zoom finction')
	 // $('#btn-link').on('click' , function(){
	    $('.frm-wrap').addClass('animated zoomOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	        $(this).removeClass('animated fadeIn');
			//function hreff();
   			 window.location("Index.html");
	 });
};
   

