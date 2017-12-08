function Carousel1(node) {
			this.$node = node;
			//图片列表
			this.$imgs = node.find('.aa').children();
			//导航点列表
			this.$bullets = node.find('.bb').children();
			//上一张和下一张
			this.$prev = node.find('.prev');
			this.$next = node.find('.next');
			//计数用，表示当前显示哪一张，默认第一张
			this.mask = 0;
			this._init();
			this._bind();
			this.timer = 0;
			this._autoPlay();
		}
		Carousel1.prototype = {
			_init : function(){
				this.$imgs.eq(this.mask).show().siblings().hide();
				this.$bullets.eq(this.mask).addClass('active').siblings().removeClass('active');
				console.log(this.$prev);
			},
			changeClass : function(temp){
				this.$imgs.eq(temp).fadeOut();
				this.$imgs.eq(this.mask).fadeIn();
				this.$bullets.eq(this.mask).addClass('active').siblings().removeClass('active');
			},
			_bind : function(){
				var _this = this;
				this.$prev.on('click',function(){
					var temp = _this.mask;
					if (_this.mask==0) {_this.mask = 4;}else{_this.mask = _this.mask-1;}
					_this.changeClass(temp);
				});
				this.$next.on('click',function(){
					var temp = _this.mask;
					if (_this.mask==4) {_this.mask = 0;}else{_this.mask = _this.mask+1;}
					_this.changeClass(temp);
				});
				this.$bullets.on('click',function(){
					var temp = _this.mask;
					_this.mask = $(this).index();
					_this.changeClass(temp);
				});
				this.$node.on('mouseover',function(){
					console.log("in");
					clearInterval(_this.timer);
				});
				this.$node.on('mouseout',function(){
					console.log("out");
					_this._autoPlay();
				});
			},
			_autoPlay : function(){
				var _this = this;
				this.timer = setInterval(function(){
					var temp = _this.mask;
					if (_this.mask==4) {_this.mask = 0;}else{_this.mask = _this.mask+1;}
					_this.changeClass(temp);
				},3000);
			},
		}
function Carousel2(node){
			this.$wrap = node.find('.pos-r');
			this.$ul = node.find('ul');
			this.$imgs = node.find('li');
			this.width = node.width();
			this.$prev = node.find('.prev');
			this.$next = node.find('.next');
			this.loop = 4;
			this.mask = 0;
			this.timer = 0;
			this._init();
			this._bind();
			this._autoPlay();
		}
		Carousel2.prototype = {
			_init : function(){
				for (var i = 0; i < this.loop; i++) {
					var temp = this.$ul.children().eq(i).clone();
					this.$ul.append(temp);
				}
				console.log(this.$ul.children().length);
				for (var i = 0,j=15; i < this.loop; i++) {
					var temp = this.$ul.children().eq(j).clone();
					this.$ul.prepend(temp);
				}
				this.$ul.css({'left':-this.width+'px'});
			},
			_bind : function(){
				var _this = this;
				this.$prev.on('click',function(){
					_this._prevPlay();
				});
				this.$next.on('click',function(){
					_this._nextPlay();
				});
				this.$wrap.on('mouseover',function(){
					clearInterval(_this.timer);
				});
				this.$wrap.on('mouseout',function(){
					_this._autoPlay();
				});
			},
			_autoPlay : function(){
				var _this = this;
				this.timer = setInterval(function(){
					_this._nextPlay();
				},3000);
			},
			_prevPlay : function(){
				var _this = this;
				if (_this.mask==0) {
					_this.$ul.css({
						'left':-(_this.loop+1)*_this.width+'px'
					});
					_this.mask = 4;
					_this.$ul.stop().animate({
						left:-(_this.mask)*_this.width+'px'
					},300);
				}else{
					_this.mask = _this.mask - 1;
					_this.$ul.animate({
						left:-(_this.mask)*_this.width+'px'
					},300);
				}
			},
			_nextPlay : function(){
				var _this = this;
				if (_this.mask==3) {
					_this.$ul.css({
						'left':'0px'
					});
					_this.mask = 0;
					_this.$ul.stop().animate({
						left:-_this.width+'px'
					},300);
				}else{
					_this.mask = _this.mask + 1;
					_this.$ul.stop().animate({
						left:-(_this.mask+1)*_this.width+'px'
					},300);
				}
			}

		}