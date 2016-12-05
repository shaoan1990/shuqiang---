var qian_wrap=document.getElementsByClassName('qian_wrap')[0];
 function getElementByID(ID){
	return document.getElementById(ID);
}
 // qian_wrap.addEventListener('touchstart',function(e){
	//  	e.preventDefault();
	//  }, false); 


 //    qian_wrap.addEventListener('touchmove',touch9, false);  
   
 //         function touch9(){
 //    	arrow.style.display = "none";
 //    		//创建一张钱币，并设置动画效果
	// 	moved_money = document.createElement("img");
	// 	moved_money.src = "数钱images/人民币_03.png";
	// 	moved_money.className = "qian_moved";
	// 	var qian_wrap = document.getElementsByClassName("qian_wrap")[0];
	// 	qian_wrap.appendChild(moved_money);
		
	// 	//创建的钱币加到父节点上。
		
	// 	 var timer=setTimeout(function(){
	// 		 qian_wrap.removeChild(moved_money);
	// 	},1000);
 //    }
		//添加触摸事件，触摸上去之后，取消默认事件
	touch.on(".qian_wrap","touchstart",function(e){
		e.preventDefault();
	});

	//向上扫动的事件
	touch.on(".qian_wrap","swipeup",function(e){

		//开始扫动之后，让手隐藏
		// var p2_shou = getElementByID("p2_shou");
		// p2_shou.style.display = "none";})
