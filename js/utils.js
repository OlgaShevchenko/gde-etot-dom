var hour_s = '08';
		var minutes_s = 40;
		var seconds_s = 37;		
		function act_timer(){
		    seconds_s--;
		    if(seconds_s==-01){seconds_s=59; minutes_s=minutes_s-1;}
		    else minutes_s=minutes_s;
		    if(seconds_s<=9) seconds_s="0" + seconds_s;
		    if(minutes_s=='00' && seconds_s=='00') { minutes_s=20; seconds_s=00; }
		    minutes_sh = minutes_s;
		    if(minutes_s < 10) minutes_sh = '0'+ minutes_s;
		    
		    $('#time').html(hour_s+"&nbsp:&nbsp"+minutes_sh+"&nbsp:&nbsp"+seconds_s);
		    setTimeout("act_timer()", 1000);
		}
		$(document).ready(function(){
		    act_timer();
		});
		$(window).scroll(function(){
	            if($(this).scrollTop()>40){
	                $('.main-menu').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<40){
	                $('.main-menu').removeClass('fixed');
	            }
	        });