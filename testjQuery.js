$(document).ready(function(){
	for(i = 0; i < 10; i++){
		var div = $('<div></div>');
		var img = $('<img src ="images/pic.jpg" ></img>');
		var h4 = $('<h4>Thing PHP 5.0博客系统实战项目演练</h4>');
		var p = $('<p><span>高级</span> · 1314人在学习</p>');
		img.appendTo(div);
		h4.appendTo(div);
		p.appendTo(div);
		div.appendTo('.box1-list');
	}
})


$(document).ready(function(){
	var a = $('a');
	for(var i = 0; i < a.length;i++){
		a[i].href = "#"; 
	}
 })
