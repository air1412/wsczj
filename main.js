function $(id){
	return document.getElementById(id);
}



window.onload = function(){
	var n = 0;
	var firstpage = $('m-fp');
	var times = setInterval(time,1000);
	var inter = firstpage.getElementsByTagName('a');
	inter[0].onclick = function(){firstpage.style.display = 'none';fadeOut(firstpage,800);clearInterval(times);}
	function time(){
		//if(n == 5){firstpage.style.display = 'none';fadeOut(firstpage,800);clearInterval(times);}
		var date = new Date();
		var nowdate = formatDate(date);
		var timer = $('m-fp').getElementsByTagName('span');
		timer[0].innerHTML = nowdate;
		inter[0].innerHTML = (5-n) + " 秒后进入 < 主页 >";
		n++;
	}time();
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
	obj.style.display= 'block';
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











