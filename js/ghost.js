	var curr_pos = 0;
	var curr_len = 0;
	var map = [[0,75,164,267,356,431],
			   [-75,0,89,192,281,356],
			   [-164,-89,0,103,192,267],
			   [-267,-192,-103,0,89,164],
			   [-356,-281,-192,-89,0,75],
			   [-431,-356,-267,-164,-75,0]];
window.onload=function(){
	var btns = document.getElementsByClassName("btna");
	var contents = document.getElementsByClassName("content");
	var add=["第一个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 "第二个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 "第三个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 "第四个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 "第五个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 "第六个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 "第七个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 "第八个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 "第九个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 "第十个随着 Ghost 1.0 和 Hemingway Mode 的发布，今天我们又发布了“自定义文章摘要”功能。",
			 ];
	console.log(contents.length+"-"+btns.length);
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		btns[i].onclick=function(){
			var j = this.index;
			if (btns[j].innerHTML=="阅读全文") {
				btns[j].innerHTML="收起全文";
				contents[j].innerHTML = contents[j].innerHTML.replace("</p>","") + add[j] + "</p>";
			}else{
				btns[j].innerHTML="阅读全文";
				contents[j].innerHTML = contents[j].innerHTML.replace(add[j],"");
			}
		}
	}
	var line = document.getElementById("line");
	var nav_area = document.getElementsByClassName("nav-area")[0];
	var lis = nav_area.getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick=function(){
			var len = map[curr_pos][this.index]+curr_len;
			curr_len = len;
			console.log("当前位置："+curr_pos+"---移动到："+this.index+"---当前位移量："+len);
			line.style.transition="transform 300ms ease-out";
			if (this.index==2||this.index==3) {
				line.style.transform="translate("+len+"px,0px)" +" "+"scaleX("+"1.37837838"+")";
			}else{
				line.style.transform="translate("+len+"px,0px)";
			}
			curr_pos=this.index;
			console.log(line.style.transform);
		}
	}

}