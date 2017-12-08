 
  $(document).ready(function(){
  	var links = $("#foot").find("a");
  	console.log(links.length);
 	for (var i = 0; i < links.length; i++) {
 		console.log($(links[i]).children("img")[0].src);
  		links[i].index= i;
  		$(links[i]).bind("click",function(){
  			for (var j = 0; j < links.length; j++) {
  				var curr_path = $(links[j]).children("img")[0].src;
 				curr_path = curr_path.replace("_1","");
 				console.log(curr_path);
 				$($(links[j]).children("img")[0]).attr("src",curr_path);
  			}
  			var path = $(links[this.index]).children("img")[0].src;
  			$($(links[this.index]).children("img")[0]).attr("src",path.replace(".","_1."));
  		});
  	}

  	var swiper = new Swiper('.lunbo', {
        slidesPerView: 2.2,
        paginationClickable: true,
        spaceBetween: 21,
        freeMode: true
    });
    var swiper1 = new Swiper('.movie', {
        slidesPerView: 3.2,
        paginationClickable: true,
        spaceBetween: 21,
        freeMode: true
    });
     var swiper2 = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
  });

  