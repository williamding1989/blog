   	$(function(){
		to_top('.to_top');
	});
   //省略号
   /*
               给需要显示省略号的地方加入class .dot(需要设置盒子宽高)
   */
   $(".dot").each(function(){
        $(this).dotdotdot({
            ellipsis: '... '
        });
    });
    $(window).resize(function(){
        $(".dot").each(function(){
            $(this).dotdotdot({
                ellipsis: '... '
            });
        });
    });


	//随机颜色
	function color(){
		var col = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
		var res = '';
		for( var i = 0; i < 6 ; i ++){
			var num = parseInt( Math.random()*15 );
			res += col[num] ;
		}
		return '#' + res;
	}
	
	//返回顶部
	function to_top( obj ){
		$( obj ).click(function(){
			$('html,body').animate({
				'scrollTop' : '0'
			},500);
		});
	}
	
	
	//用于时间补位
	function toTwo( obj ){
		if( obj < 10 ){
			obj = '0' + obj;
		}
		return obj;
	}
	
	
	/*
	   文本长度截取,显示省略号
	  obj:对象
	  num_end:截取的结束位数
	*/
	function str_slice(obj,num_end){
		$(obj).each(function(){
			var demoHtml = $(this).html();
			if( demoHtml.length > num_end ){
				$(this).html(demoHtml.slice(0,num_end)+'...');
			};
		});
	}
	
	
	//页面入场动画
	/*
		obj:入场动画的对象(指定统计的class)
		className:具体动画的class名字
	*/
	function action( obj , className){
		var sc = $(window).scrollTop();
	    $(window).scroll(function(){
	   	 	sc = $(window).scrollTop();
	    });
	   
	    var wh =  $(window).height();
	    $(window).resize(function(){
	   	 	wh = $(window).height();
	    });
	    
		$( obj ).each(function(i){
			if( ( $(this).offset().top - sc ) < ( wh - $(this).height()/2 )  ){
				$(this).addClass( className );
			}else{
				$(this).removeClass( className );
			}
		})
	}
	
	
	//swip封装
	/*
	 	info: swip数据的json
		swip_target : swip的大盒子id/class
		swip_auto : 自动播放 默认自动
	 	swip_pagination : swip底部分页的id/class
	 	swip_pagination_Type : 分页类型，默认 小圆点bullets,fraction数字分式
	 	swip_speed : 切换速度 
	 	swip_prevButton : 左按钮
	 	swip_nextButton : 右按钮
	 	swip_effect : 切换效果 默认 slide ，'fade'淡入淡出
 		slide_num : 一页显示li的数量
		slide_group : 多少li为一组进行移动
		slide_margin : li之间的距离
		slide_offsetLeft : li与左侧屏幕的距离
		loop : 是否循环 默认true
	*/
	function go_swip(info){
		var mySwiper = new Swiper( info.swip_target , {
			autoplay: info.swip_auto,//自动滑动
			autoplayDisableOnInteraction : false,
			pagination : info.swip_pagination ,//分页器id/class
			paginationType : info.swip_pagination_Type || 'bullets' ,//分页器类型
			paginationClickable :true,
		 	speed: info.swip_speed || 800,
			prevButton: info.swip_prevButton || 'null',//左边按钮id/class
			nextButton: info.swip_nextButton || 'null',//右边按钮id/class
			effect : info.swip_effect || 'slide',//切换效果
			slidesPerView : info.slide_num || 1, //一页显示li的数量
			slidesPerGroup : info.slide_group || 1,//多少li为一组进行移动
			spaceBetween : info.slide_margin || 0,//li之间的距离
			slidesOffsetBefore : info.slide_offsetLeft || 0,//li与左侧屏幕的距离
			slidesOffsetAfter : info.slide_offsetRight || 0,//li与右侧屏幕的距离
			initialSlide : 0,//初始显示的li的索引
			observer: true,//当li节点被修改的时候自动更新Swiper
			observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
			grabCursor : true,//鼠标抓手形状，触屏看不到 
			loop: info.loop,  //循环
			onSlideChangeEnd:info.fun || 'null' //切换结束时候的回调函数 
		})
	}
	
	
	//爆炸图片效果
	/*
	 	obj:插入位置
	 	row:行个数
	 	col:列个数
	*/
	function boom_pic(obj,row,col){
		//每个小块的宽度
		var w = $(obj).width()/row;
		//每个小块的高度
		var h = $(obj).height()/col;
		for( var i = 0 ; i < row ; i ++ ){
			for( var j = 0 ; j < col ; j ++ ){
				var html = document.createElement('div');
				$(html).css({
					'width' : w + 'px',
					'height' : h + 'px',
					'opacity' : '0',
					'position' : 'absolute',
					'top' : h*i + 'px',
					'left' : w*j + 'px',
					'backgroundPosition' : -w*j + 'px ' + (-h*i) + 'px',
					'transition': 'all '+ Random(0.5,1) +'s ease-in',
					'transform' : 'translate3d('+Random(-200,200)+'px,'+Random(-200,200)+'px,'+Random(-300,300)+'px) scale( '+Random(1.5,2.5)+') rotateY('+Random(100,360)+'deg) rotateX('+Random(100,360)+'deg)'
				});
				$(obj).append(html);
			}
		}
	}

	//随机范围
	function Random(start,end){    
	    return Math.random()*(end-start)+start;    
	}	
	
	
	//倒计时
	/*
	 time:json格式
	 time.start :开始时间   如:'2016/11/18 10:47:00'
	 time.end:结束时间
	 time.type:倒计时类型
	 对应id已经写死，如有需求 自行扩展
	*/
	function Countdown(time){
	    var EndTime= new Date(time.end).getTime();     //设置结束时间
		var NowTime ;
		//如果不设置开始时间，默认当前时间
	    if(time.start){
	    	NowTime = new Date().getTime() > new Date(time.start).getTime() ? new Date().getTime() : new Date(time.start).getTime();
	    }else{
	    	NowTime = new Date().getTime();
	    }	
		var t =EndTime - NowTime;                      //时间毫秒差值
		var d=0;    //天数
		var h=0;    //小时
		var m=0;	//分钟
		var s=0;	//秒数
		//到天数
		if( time.type == '1'){
			if(t>=0){
			  	d=toTwo(Math.floor(t/1000/60/60/24));
			  	h=toTwo(Math.floor(t/1000/60/60%24));
			  	m=toTwo(Math.floor(t/1000/60%60));
			    s=toTwo(Math.floor(t/1000%60));
			    document.getElementById("t_d").innerHTML = d;
				document.getElementById("t_h").innerHTML = h;
				document.getElementById("t_m").innerHTML = m;
				document.getElementById("t_s").innerHTML = s;
			}
			//只到小时
		}else if( time.type == '2' ){
			if(t>=0){
			  	d=toTwo(Math.floor(t/1000/60/60/24));
			  	h=toTwo( parseInt( Math.floor(t/1000/60/60%24) )+ parseInt(d*24) );
			  	m=toTwo(Math.floor(t/1000/60%60));
			    s=toTwo(Math.floor(t/1000%60));
				document.getElementById("t_h").innerHTML = h;
				document.getElementById("t_m").innerHTML = m;
				document.getElementById("t_s").innerHTML = s;
			}
		}
	}
	
	
	/* 
	 	字体自适应
	(function (doc, win) {
	      var docEl = doc.documentElement,
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	        recalc = function () {
	          var clientWidth = docEl.clientWidth;
	          if (!clientWidth) return;
	          docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
	        };
	
	      if (!doc.addEventListener) return;
	      win.addEventListener(resizeEvt, recalc, false);
	      doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);
	*/
	
	
	/*水纹按钮
		target: 父元素
		area: 点击区域
		r：圆形半径
		color:圆形颜色
	*/
	function wave_btn( target , area , r ,color){
		$(area).mousedown(function(e){
			var e = e || event ; 
			var x = e.clientX - $(this).offset().left;
			var y = e.clientY - $(this).offset().top;
			var oDiv = document.createElement('div');
			$(oDiv).css({
				'left' : x , 
				'top' : y,			
				'position': 'absolute',
				'borderRadius': '50%',
				'background': color
			});
			$(oDiv).animate({
				'width' : r+'px',
				'height' : r+'px',
				'left' : x- r/2 ,
				'top' : y - r/2 ,
				'opacity' : 0
			},800,function(){
				var This = (this);
				setTimeout(function(){					
					This.remove();
				},200);
			});
			$(target).append(oDiv);
		})
	}	

