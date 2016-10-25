function $(id){
	return document.getElementById(id);
}



window.onload = function(){
	var n = 0;
	var timer = $('m-top').getElementsByTagName('span');
	var times = setInterval(time,1000);
	function time(){
		var date = new Date();
		var nowdate = formatDate(date);
		timer[1].innerHTML = "Now is " + date.getFullYear();
		timer[2].innerHTML = padding(date.getMonth()+1);
		timer[3].innerHTML = padding(date.getDate());
		timer[4].innerHTML = padding(date.getHours());
		timer[5].innerHTML = padding(date.getMinutes());
		timer[6].innerHTML = padding(date.getSeconds());
		fadeIn(timer[6],300);
		n++;
	}time();
}

function scrollit() {
	var i = 1;
	var autoccroll = setInterval(function(){
		if (i<=600) {
			scroll(1,i);
			i += 5;
		}else if(i<=700){
			scroll(1,i);
			i += 3;
		}else if(i<=800){
			scroll(1,i);
			i++;
		}else{
			clearInterval(autoccroll);
		}
	},1);


}



 function padding(number){
        return number < 10 ? '0' + number : '' + number;
}
function formatDate(date){
	return date.getFullYear() + '-' 
		+ padding(date.getMonth() + 1) + '-' 
		+ padding(date.getDate()) + ' ' 
		+ padding(date.getHours()) + ':'
		+ padding(date.getMinutes()) + ':'
		+ padding(date.getSeconds());
}



function fadeIn(obj,time){//淡入函数  实现time毫秒后显示，原理是根据透明度来完成的
	var startTime = new Date(); 
	obj.style.opacity = 0;//设置下初始值透明度
	var timer = setInterval(function(){
		var nowTime = new Date();
		var prop = (nowTime-startTime)/time;
		if(prop >= 1){
			prop = 1;//设置最终系数值
			clearInterval(timer);
		}
		obj.style.opacity = prop;//透明度公式： 初始值+系数*（结束值-初始值）
	},10);//每隔10ms执行一次function函数
};


function fadeOut(obj,time){//淡出函数  实现time毫秒后显示，原理是根据透明度来完成的
	var startTime = new Date(); 
	obj.style.opacity = 1;//设置下初始值透明度
	obj.style.display= 'block';
	var timer = setInterval(function(){
		var nowTime = new Date();
		var prop = 1-(nowTime-startTime)/time;
		if(prop == 0){
			prop = 0;//设置最终系数值
			clearInterval(timer);
		}
		obj.style.opacity = prop;//透明度公式： 初始值+系数*（结束值-初始值）
	},10);//每隔10ms执行一次function函数
};











