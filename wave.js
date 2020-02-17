
	 var visible="visible";
	 window.onload=function(){
	     document.getElementById('video-btn').onclick=function (){
	     if(visible=="visible")
	     {
	         visible="hidden";
	     }else{
	         visible="visible";
	     }
		try{
     			banner_wave_1.style="visibility: "+visible+";";
     		}catch(Error){}
     		try{
     			banner_wave_2.style="visibility: "+visible+";";
     		}catch(Error){}
	     };   
	 };
    function headertop_down () {
		var coverOffset = $('#content').offset().top
		$('html,body').animate({
    		scrollTop: coverOffset
		}, 600)
	}

var div = document.getElementsByClassName("headertop")[0];
var wave1 = document.createElement("div");  
wave1.setAttribute('id', 'banner_wave_1'); 
var wave2 = document.createElement("div");  
wave2.setAttribute('id', 'banner_wave_2'); 
var down = document.createElement("div");  
down.setAttribute('class', 'headertop-down faa-float animated'); 
down.setAttribute('onclick', 'headertop_down()');  
var i = document.createElement("i");
i.setAttribute('class', 'fa fa-chevron-down'); 
i.setAttribute('aria-hidden', 'true'); 
var span = document.createElement("span");
span.appendChild(i);
down.appendChild(span);

div.appendChild(wave1);
div.appendChild(wave2);
div.appendChild(down);
  
