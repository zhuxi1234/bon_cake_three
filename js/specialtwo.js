//specialtwo的放大镜效果
<script>
function $(str){   //id  class tagname
	if(str.charAt(0) == "#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0) == "."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
	let lis_two= $("#imgList_two").children;
//	遍历li
	for(let i=0; i<lis_two.length; i++){
//		添加点击事件
		lis_two[i].onclick = function(){
//			获取当前图片的src
			let bgImg_two = getStyle(this,"backgroundImage");
			console.log(bgImg_two);
			$("#bigbox_two").style.backgroundImage = bgImg_two;
			$("#showbox_two").style.backgroundImage = bgImg_two;
		}
	}
	
	$("#bigbox_two").onmouseover = function(){
		$("#mirrorbox_two").style.display = 'block';
		$("#showbox_two").style.display = 'block';
	}
	
	$("#bigbox_two").onmouseout = function(){
		$("#mirrorbox_two").style.display = 'none';
		$("#showbox_two").style.display = 'none';
	}
	
	$("#bigbox_two").onmousemove = function(event){
		let ev_two = event || window.event;
		scale(ev_two);
	}
	
	function scale(ev){
//		1-获取数据
		let x_two = ev.pageX - $("#bigbox_two").offsetLeft - $("#mirrorbox_two").offsetWidth/2;
		let y_two = ev.pageY - $("#bigbox_two").offsetTop - $("#mirrorbox_two").offsetHeight/2;
//		2-边界的判断处理
		if(x_two < 0){
			x_two = 0;
		}else if(x_two > $("#bigbox_two").offsetWidth - $("#mirrorbox_two").offsetWidth){
			x_two = $("#bigbox_two").offsetWidth - $("#mirrorbox_two").offsetWidth;
		}
		if(y_two < 0){
			y_two = 0;
		}else if(y_two > $("#bigbox_two").offsetHeight - $("#mirrorbox_two").offsetHeight){
			y_two = $("#bigbox_two").offsetHeight - $("#mirrorbox_two").offsetHeight;
		}
//		3-外观改变
		$("#mirrorbox_two").style.left = x_two + 'px';
		$("#mirrorbox_two").style.top = y_two + 'px';
		//		算出遮罩层左侧距离和小图之间的比例
		let scalX_two =  x_two  / ($("#bigbox_two").offsetWidth - $("#mirrorbox_two").offsetWidth); 
		let scalY_two =  y_two / ($("#bigbox_two").offsetHeight - $("#mirrorbox_two").offsetHeight);
//		$("#showBox").style.backgroundPositionX = -scalX*(1500-$("#showBox").offsetWidth) + 'px';
//		$("#showBox").style.backgroundPositionY = -scalY*(1200-$("#showBox").offsetHeight) + 'px';
		$("#showbox_two").style.backgroundPosition = (-1*2*x_two) +'px ' + (-1*2*y_two) + 'px';
	}
</script>