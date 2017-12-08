function Carousel(node){
			this.$node = node;
			this.$pagenation = node.find('.pagenation').children().eq(0).children();
			this.$picList = node.find('.row').children();
			this.mask = 0;
			this._init();
			//绑定事件
			this._bind();
			//自动播放
			this._autoPlay();
		}
		Carousel.prototype = {
			_init : function(){
				console.log(this.$pagenation.length);
				//初始化第一张图片，并且将其他图片不显示

				this.$picList.eq(this.mask).show();

				//初始化导航点
				this._displayBullet();
			},
			_displayBullet : function(){
				this.$pagenation.removeClass('active');
				this.$pagenation.eq(this.mask).addClass('active');
			},
			_bind : function(){
				var _this = this;
				this.$pagenation.on('click',function(){
					var temp_mask = _this.mask;
					_this.mask = $(this).index();
					//将当前图片fadeout
					_this.$picList.eq(temp_mask).hide();
					//将下一张图片fadeIn
					_this.$picList.eq(_this.mask).fadeIn();
					_this._displayBullet();
				})
			},
			_autoPlay : function(){
				var _this = this;
				timer = setInterval(function(){
					if (_this.mask==2) {
						var temp_mask = _this.mask;
						_this.mask = 0;
						_this.$picList.eq(temp_mask).fadeOut(200);
						_this.$picList.eq(_this.mask).delay(200).fadeIn(200);
						_this._displayBullet();
					}else{
						_this.$picList.eq(_this.mask).fadeOut(200);
						_this.mask = _this.mask + 1;
						_this.$picList.eq(_this.mask).delay(200).fadeIn(200);
						_this._displayBullet();
					}
				},3000);
			}
		}
function Carousel1(node,win){
		this.$win = $(win);
		this.$node = node.find(".banner-wrap");
		this.$ul = node.find('.banner-wrap ul');
		this.$li = this.$ul.children();
		this.width = this.$li.eq(0).width();
		this.$btn_left = node.find('.banner-wrap .left');
		this.$btn_right = node.find('.banner-wrap .right');
		this.length = this.$ul.children().length; 
		this.midIndex = 0;
		this.sumWidth = 0;
		this.t = 0;
		//当点击速度过快时，组件的动画来不及变化，所以需要设置一个时间来限制按钮的点击间隔
		this.time = 0;
		//初始化
		this._init();
		//绑定事件
		this._bind();

	}
	Carousel1.prototype = {
		_init : function(){
			//初始时，中心图片的下标
			this.midIndex = Math.floor(this.length/2);
			this._changeClass();
			var _this = this;
			this.t = setTimeout(function(){
				_this.$li.each(function(){
					_this.sumWidth = _this.sumWidth + $(this).width();
					_this.$ul.css("marginLeft",-(_this.sumWidth/2-_this.$node.width()/2)+"px").css("opacity",1);
				});
			},300);
			this.time = new Date();
		},
		_bind : function(){
			var _this = this;
			this.$btn_right.on('click',function(){
				if (new Date() - _this.time > 350) {
					_this.time = new Date();
					_this.midIndex = _this.midIndex + 1;
					if (_this.midIndex == _this.length) {
						_this.midIndex = 0;
					}
					_this.$ul.stop().animate({
						'marginLeft':-(_this.sumWidth/2-_this.$node.width()/2+_this.width)+'px'
					},300,function(){
						_this.$ul.css("marginLeft",-(_this.sumWidth/2-_this.$node.width()/2)+"px").append(_this.$ul.children().first());
					});
					_this._changeClass();
				}
			});
			this.$btn_left.on('click',function(){
				if (new Date() - _this.time > 350) {
					_this.time = new Date();
					_this.midIndex = _this.midIndex - 1;
					if (_this.midIndex == -1) {
						_this.midIndex = 8;
					}
					_this.$ul.stop().animate({
						'marginLeft':-(_this.sumWidth/2-_this.$node.width()/2-_this.width)+'px'
					},300,function(){
						_this.$ul.css("marginLeft",-(_this.sumWidth/2-_this.$node.width()/2)+"px").prepend(_this.$ul.children().last());
					});
					_this._changeClass();
				}
			});
			//当浏览器resize时
			this.$win.on('resize',function(){
				clearTimeout(_this.t);
				_this.t = setTimeout(function(){
						_this.sumWidth = 0;
						_this.width = _this.$li.eq(0).width();
						_this.$li.each(function(){
							_this.sumWidth = _this.sumWidth + $(this).width();
						});
						_this.$ul.stop().animate({"marginLeft":-(_this.sumWidth/2-_this.$node.width()/2)+"px"},300);
					
				},300);
			});
		},
		_changeClass : function(){
			this.$li.eq(this.midIndex).addClass('mid').siblings().removeClass('mid slide');
			if (this.midIndex==0) {
				this.$li.eq(8).addClass('slide');
			}else{
				this.$li.eq(this.midIndex-1).addClass('slide');
			}
			if (this.midIndex==8) {
				this.$li.eq(0).addClass('slide');
			}else{
				this.$li.eq(this.midIndex+1).addClass('slide');
			}
		}
	}