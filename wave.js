

	 var visible="visible";
	 var left=0;
	 var ope=false;
	 window.onload=function(){
	     document.getElementById('video-btn').onclick=function (){
	     if(visible=="visible")
	     {
	         visible="hidden";
	     }else{
	         visible="visible";
	     }
	     try{
     banner_wave_1.style="left: "+left+"px; visibility: "+visible+";";
     }catch(Error){}
     try{
     banner_wave_2.style="left: "+(left+80)+"px; visibility: "+visible+";";
     }catch(Error){}
	     };   
	 };
     function mainFunc(){
    	try{
    		banner_wave_1.style="left: "+left+"px; visibility: "+visible+";";
    	}catch(Error){}
    	try{
    		banner_wave_2.style="left: "+(left+80)+"px; visibility: "+visible+";";
    	}catch(Error){}
    	if(left>=-800 && !ope)
    	{
    		left-=3;
    	}else{
    		ope=true;
    		left+=3;
    		if(left>=0)
    		{
        		ope=false;
    		}
    	}
    }
    this.setInterval(mainFunc,150);
    function headertop_down () {
		var coverOffset = $('#content').offset().top
		$('html,body').animate({
    		scrollTop: coverOffset
		}, 600)
	}

var div = document.getElementsByClassName("headertop")[0];
alert(div);
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
  
