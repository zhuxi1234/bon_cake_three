
//功能：获取某个DOM元素的样式属性的兼容性写法
//参数：dom元素，样式属性名
//返回值：样式属性的值

function getStyle(domObj,attr){
	if(domObj.currentStyle){//domObj.currentStyle如果能够正确获取到，那就真
		return domObj.currentStyle[attr];//当对象的属性名是变量时，用方括号而不是点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}	
}

////hidebox的放大镜效果
//function growUp(){
//	$("#bigbox").onmousemove=function(event){
//		let evt=event || window.event;
//		let mirrorWidth=$("#mirrorbox").offsetWidth;
//		let mirrorHeight=$("#mirrorbox").offsetHeight;
//		let left1=evt.pageX-this.offsetLeft-mirrorWidth/2;
//		let top1=evt.pageY-this.offsetTop-mirrorHeight/2;
//		
//		if(left1<0){
//			left1=0;
//		}
//		if(left1>this.offsetWidth-mirrorWidth){
//			left1=this.offsetWidth-mirrorWidth
//		}
//		if(top1<0){
//			top1=0;
//		}
//		if(top1>this.offsetHeight-mirrorHeight){
//			top1=this.offsetHeight-mirrorHeight
//		}
//		
//		$("#mirrorbox").style.left=left1+"px";
//		$("#mirrorbox").style.top=top1+"px";
//		$("#showbox").style.backgroundPosition=(-2*left1)+"px "+(-2*top1)+"px ";
//	}
//}