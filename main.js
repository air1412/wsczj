function $(id){
	return document.getElementById(id);
}



window.onload = function(){
	var n = 0;
	var firstpage = $('m-fp');
	var times = setInterval(time,1000);
	var inter = firstpage.getElementsByTagName('a');
	inter[0].onclick = function(){firstpage.style.display = 'none';clearInterval(times);}
	function time(){
		if(n == 5){firstpage.style.display = 'none';clearInterval(times);}
		var date = new Date();
		var nowdate = formatDate(date);
		var timer = $('m-fp').getElementsByTagName('span');
		timer[0].innerHTML = "将于 "+ (5-n) + " 秒后进入主页　|　"+ nowdate ;
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


















