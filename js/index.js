window.onload=function(){

	var swiper=new Swiper(".swiper-container",{
			pagination:".swiper-pagination",
			paginationClickable:true,
			loop:true,
			autoplay:1000,
			autoplayDisableOnInteraction:true,
			
		});

}


// 选择城市

$(function  () {
			$('.pulldown').on('click',function(){
				if( $('.pull-select').is(':hidden') ){
					$('.pull-select').css('display','block');
					$('.pulldown img').css('transform','rotate(180deg)')
				}else{
					$('.pull-select').css('display','none');
					$('.pulldown img').css('transform','rotate(360deg)')
				}
			});
			$('.pull-select').find('li').click(function(){
				$('#pulldown-1').html( $(this).html() ); 
			})
		})



// 倒计时
var interval=1000;
function show_date_time(){

	 var lastDay=new Date("2017-10-1 00:00:00");
	var today=new Date();
	var times=lastDay.getTime()-today.getTime();
	var seconds=times/1000;
	var hour=Math.floor(seconds/60/60%24);
	var minute=Math.floor(seconds/60%60);
	var sec=Math.floor(seconds%60);
	minute=checkNum(minute);
	sec=checkNum(sec);
	document.getElementById("lastDate").innerHTML=hour+"时"+minute+"分"+sec+"秒";

}


window.setInterval(function() {
			show_date_time(2017-10-1, 'lastDate');
		}, interval);

function checkNum(num){
			if(num<10){
				num="0"+num;
			}
			return num;
		}













$(function(){
	$(".seeAll").click(function(){
			if($(".guessLike-hidden").is(':hidden')){
				$(".guessLike-hidden").css('display','block');
			}else{
				$(".guessLike-hidden").css('display','none');
			}
	})
})