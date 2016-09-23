window.onload=function(){
	var div1=document.getElementById("div1");
	div1.onmouseover=function(){
		startmove(0);
	}
	div1.onmouseout=function(){
		startmove(-250);
	}
//定义了动画函数，其中speed是移动速度，tiger是div的宽度
}
var timer=null;
function startmove(tiger){
	clearInterval(timer);
	var div1=document.getElementById("div1");
	timer=setInterval(function(){
	var speed = (tiger-div1.offsetLeft)/20;
	speed = speed>0?Math.ceil(speed):Math.floor(speed);
	if (div1.offsetLeft ==tiger ){
		clearInterval(timer);
	}
	else{
	div1.style.left = div1.offsetLeft + speed+"px";
	}
    },30)
}
