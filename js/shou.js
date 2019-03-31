

//北京城市
function chenshi(){
	var nav1=document.getElementById('nav-left1');
	var showCity=document.getElementById('showCity');
	
	nav1.onmouseover=function(){
		showCity.style.display="block";
	}
	showCity.onmouseout=function(){
		showCity.style.display="none";
	}
}

 
 //热门活动
function tab(titleName,contName){
	var tabTitle=document.getElementById(titleName);
	var tabCont=document.getElementById(contName);
	var liArr=tabTitle.getElementsByTagName('li');
 	var divArr=tabCont.getElementsByClassName('tab_list');

	for(var i=0; i<liArr.length; i++){
		liArr[i].onmouseover=function(){
			for (var j = 0; j < liArr.length; j++) {
				if(this==liArr[j]){
					this.className="cur";
					divArr[j].style.display="block";
				}else{
					liArr[j].className="";
					divArr[j].style.display="none";
				}
			}
		}
	}

}


//侧边栏
function tc(){
	var topimg=document.getElementById('topimg');
	var tc=topimg.getElementsByClassName('tc_ac_lb')[0];

	topimg.onmouseover=function(){
		tc.style.display="block";
	}
	document.onmouseout=function(){
		tc.style.display="";
	}
}

//轮播图
function movebig(){
	function getId(ele){
		return document.getElementById(ele);
	}
	var lunbo=getId('lunbo');
	var inner=getId('inner');
	var ul=getId("imgArr");
	var ol=getId("liOlArr");

	var liArr=ul.getElementsByTagName("li");
	var liOlArr=ol.getElementsByTagName("li");

	var btnArr=getId('btnArr');
	var leftBtn=getId('leftBtn');
	var rightBtn=getId('rightBtn');

	var num=0;

	//1.排序，显示当前图片和小方块
	function show(idx){
		for(var i=0; i<liArr.length; i++){
			//所有图片的透明都为0
			liArr[i].style.zIndex=10-i;
			//倒序排列
			liArr[i].style.opacity=0;
			//所有的小方块去“cur”
			liOlArr[i].className="";
		}
		//当前图片的透明度为1
		liArr[idx].style.opacity=1;
		//当前小方块加cur
		liOlArr[idx].className="cur2";
	}
	//显示第一张
	show(num);

	function autoStep(){
		num++;
		if(num>liArr.length-1){
			num=0;
		}
		show(num);
	}
	var timer=setInterval(autoStep,2000);

	inner.onmouseover=function(){
		clearInterval(timer);
	}
	inner.onmouseout=function(){
		timer=setInterval(autoStep,2000);
	}
	
	for(var m=0; m<liOlArr.length; m++){
		liOlArr[m].onmouseover=function(){
			for(var n=0; n<liOlArr.length; n++){
				if(this==liOlArr[n]){
					//关联索引
					num=n;
					show(num);
				}
			}
		}
	}
}


//主导航栏
function tabNav(titleName,contName){
	var tabTitle=document.getElementById(titleName);
	var tabCont=document.getElementById(contName);
	var menucont=document.getElementById("menucont");
	var liArr=tabTitle.getElementsByTagName('li');
 	var divArr=tabCont.getElementsByClassName('menucont1');

	for(var i=0; i<liArr.length; i++){
		liArr[i].onmouseover=function(){
			for (var j = 0; j < liArr.length; j++) {
				if(this==liArr[j]){
					this.className="cur3";
					divArr[j].style.display="block";
					menucont.style.display="block";
				}else{
					liArr[j].className="";
					divArr[j].style.display="none";
					// menucont.style.display="none";
					
				}
			}
		}
		menucont.onmouseout=function(){
			menucont.style.display="none";

		}
	}


}
// function tabNav2(){
// 	var 
// }	