	$(document).ready(function() {
		$("#language").hover(function() {
			$(this).children('ul').show();
		}, function() {
			$(this).children('ul').hide();
		});
		
	 	$(".cate>li").mouseover(function(event) {
	 		event.stopPropagation();
	 		$(".subnav").hide();
	 		$(".bigcateline").removeClass('bigcatehover');
	 		$(this).children('.subnav').show();
	 		$(this).children('.bigcateline').addClass('bigcatehover');
	 	});

	 	$(".cate>li").mouseleave(function(event) {
	 		event.stopPropagation();
	 		$(".subnav").hide();
	 		$(".bigcateline").removeClass('bigcatehover');
	 		$(".subnavul").find("a").removeAttr('style');
	 		// $(".subnav").each(function(index, el) {
	 		// 	$(this).find('.sabnavul').hide()
	 		// 	$(this).find('.sabnavul').eq(0).show();
	 		// });
	 	});

	 	$(".subnavul>li").mouseover(function(event) {
	 		event.stopPropagation();
	 		$(".subnavul>li").find('a').css({
	 			color: '#636363',
	 			background: '#fff'
	 		});
	 		$(this).find('a').css({
	 			color: '#fff',
	 			background: '#ff8000'
	 		});
	 		var index = $(this).attr("data-index")-1;
	 		$(this).parent().siblings('.sabnavul').hide();
	 		$(this).parent().siblings('.sabnavul').eq(index).find(".sabnavimg").hide();
	 		$(this).parent().siblings('.sabnavul').eq(index).show();
	 		$(this).parent().siblings('.sabnavul').eq(index).find(".sabnavimg").eq(0).show();
	 	});

	 	$(".sabnavul>li").mouseover(function(event) {
	 		event.stopPropagation();
	 		$(this).parents(".sabnavul").find('.sabnavimg').hide();
	 		$(this).children('.sabnavimg').show();
	 	});

	 	$(".closex").click(function(event) {
	 		/* Act on the event */
	 		$(".mobilemeun").removeClass("mobilemeunleft").addClass('mobilemeunright');
	 	});

	 	$(".bars").click(function(event) {
	 		$(".mobilemeun").removeClass("mobilemeunright").addClass('mobilemeunleft');
	 	});

	 	$(window).resize(function(event) {
	 		if($(window).width()>1020){
	 			$(".mobilemeun").removeClass("mobilemeunleft").addClass('mobilemeunright');
	 		}
	 		
	 	});

	 	$(".mobilecate a").click(function(event) {
	 		event.stopPropagation();
	 		window.location.href = $(this).attr("date-url");
	 	});

	 	$(".mobilecate .meundown").click(function(event) {
	 		event.stopPropagation();
	 		$(this).parents("li:first").children("ul").slideToggle("fast");
	 	});

	 	$(".wechat").hover(function() {
	 		$(".qr_body").show()
	 	}, function() {
	 		$(".qr_body").hide()
	 	});



		getScreenWidth()
		window.onresize = function(){
			getScreenWidth()
		}
		function getScreenWidth(){
			var screenWdth=$(window).width();
			if(screenWdth>=768){
				onShow()
			}else{
				offShow()
			}
		}
		function onShow(){
			slowShow($(".body_camera_top"), $(".body_camera_top p"));
			slowShow($(".model .value"), $(".value_text p"));
			slowShow($(".model .future"), $(".future_text p"));
		}

		function offShow(){
			cancelShow($(".model .value"), $(".value_text p"));
			cancelShow($(".model .future"), $(".future_text p"));
		}
		function slowShow(ele,eleson){
			ele.on("mouseover",function(){
				$(this).find(".bgc").css({"z-index":"1"});
				eleson.addClass("show")
				eleson.show("slow")
				eleson.css({"top":"100px"})
			})
			ele.on("mouseleave",function(){
				eleson.css({"top":"300px", "transition": "all 0.4s","display":"none"})
				$(this).find(".bgc").css({"z-index":"-1"});
			})
		}
		function cancelShow(ele,eleson){

			ele.on("mouseover",function(){
			})
			ele.on("mouseleave",function(){
			})
		}
	});