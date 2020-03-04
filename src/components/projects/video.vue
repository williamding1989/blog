<template>
	<div class="pro_box relative">
		<video class="pro_video" poster="static/img/pro1_bg.jpg">
			<!--浏览器兼容，一般需要2种格式，mp4和ogg-->
			<source src="static/video/1.mp4" type="video/mp4"></source>
		</video>
		<div class="up_hide">
			<a href="javascript:void(0);" class="video_pre"></a>
			<a href="javascript:void(0);" class="video_play"></a>
			<a href="javascript:void(0);" class="video_next"></a>
			<a href="javascript:void(0);" class="video_fullscreen"></a>
			<div class="video_progress">
				<span class="curTime">00:00:00</span>
				<p class="proline_box relative play_box">
					<i class="proline_arr absolute pointer play_arr"></i>
				</p>
				<span class="allTime">00:00:00</span>
			</div>
			<div class="vol_wrap">
				<a href="javascript:void(0)"></a>
				<p class="proline_box relative vol_box">
					<i class="proline_arr absolute pointer vol_arr"></i>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		mounted () {
			$(function(){
				/*
					currentTime: 播放所用时间
					duration  :  媒体总时间(只读) 在视频开始播放的时候才能获取到 
					volume  :   0 - 1 的音量相对值
					paused  :   媒体是否暂停(只读)
					ended   :   媒体是否播放完毕(只读)
				*/
				var video_num = 1 ; //视频控制
				//播放和暂停
				$('.video_play').click(function(){
					//如果视频处于暂停状态就播放，如果不在暂停状态就暂停
					if( $('video').get(0).paused ){
						$('video').get(0).play();
						$(this).css('backgroundPosition','-40px 0');
						var vtime = Math.floor( $('video').get(0).duration );
						$('.allTime').html( changetime(vtime) );		
					}else if( !$('video').get(0).paused ){
						$('video').get(0).pause();
						$(this).css('backgroundPosition','0 0');
					}
				});
				
				//全屏
				$('.video_fullscreen').click(function(){
					$('video').get(0).webkitRequestFullScreen();
					$('video').get(0).mozRequestFullScreen();
					$('video').get(0).requestFullscreen();
				});
				
				//监听视频播放事件
				$('video').get(0).ontimeupdate = function(){
					nowtime();
				}
				
				//让时间以指定的形式显示
				function changetime( obj ){
					var h = toTwo( Math.floor( obj / 3600 ) );
					var m = toTwo( Math.floor( obj % 3600 / 60 ) );
					var s = toTwo( Math.floor( obj % 60 ) );
					return ( h + ':' + m + ':' + s );
				}
				
				//视频播放时，初始时间与进度条的改变
				function nowtime(){
					$('.curTime').html( changetime( $('video').get(0).currentTime) );
					//当前时间除以总时间，获得比例值，来改变滚动条
					var n = $('video').get(0).currentTime / $('video').get(0).duration;
					$('.play_arr').css('width',$('.play_box').width()*n+20);
				}
		
				//拖拽,点击播放进度条
				$('.play_box').mousedown(function(e){
					var vtime = Math.floor( $('video').get(0).duration );
					$('.allTime').html( changetime(vtime) );	
					$('.video_play').css('backgroundPosition','-40px 0');
					var e = e || event ; 
					var x = e.clientX - $('.play_box').offset().left;
					if( x < 0 ){
						x = 0;
					}
					if( x > $('.play_box').width() ){
						x = $('.play_box').width();
					}
					//按下的点的宽度与总宽度的比例，转化成视频的播放比例
					var prop = x / $('.play_box').width();
					$('video').get(0).currentTime = prop* $('video').get(0).duration;
					$('.play_arr').css('width', x + 20 );
					$(this).mousemove(function(e){
						$('video').get(0).pause();
						var e = e || event ; 
						var x = e.clientX - $('.play_box').offset().left;
						if( x > ( $('.play_box').width() ) ){
							x = $('.play_box').width();
						}else if( x < 0 ){
							x = 0;
						}
						$('.play_arr').css('width', x + 20 );
					});
					$(this).mouseup(function(e){
						$('video').get(0).play();
						var e = e || event ;
						var x = e.clientX - $('.play_box').offset().left;
						var prop = x / $('.play_box').width();
						$('video').get(0).currentTime = prop* $('video').get(0).duration;
						$(this).off('mousemove');			
					});
				});
				
				//拖拽,点击声音进度条
				$('.vol_box').mousedown(function(e){
					$('.vol_wrap a').css('backgroundPosition','-201px 0');	
					var e = e || event ; 
					var x = e.clientX - $('.vol_box').offset().left;
					if( x < 0 ){
						x = 0;
						$('.vol_wrap a').css('backgroundPosition','-201px -40px');
					}
					if( x > $('.vol_box').width() ){
						x = $('.vol_box').width();
						$('.vol_wrap a').css('backgroundPosition','-201px 0');	
					}
					//按下的点的宽度与总宽度的比例，转化成声音大小的比例
					var prop = x / $('.vol_box').width();
					$('video').get(0).volume = prop;
					$('.vol_arr').css('width', x + 20 );
					$(this).mousemove(function(e){
						var e = e || event ; 
						var x = e.clientX - $('.vol_box').offset().left;
						if( x > ( $('.vol_box').width() ) ){
							x = $('.vol_box').width();
							$('.vol_wrap a').css('backgroundPosition','-201px 0');	
						}else if( x < 0 ){
							x = 0;
							$('.vol_wrap a').css('backgroundPosition','-201px -40px');
						}
						var prop = x / $('.vol_box').width();
						$('video').get(0).volume = prop;
						$('.vol_arr').css('width', x + 20 );
					});
					$(this).mouseup(function(e){
						var e = e || event ;
						var x = e.clientX - $('.vol_box').offset().left;
						$('.vol_wrap a').css('backgroundPosition','-201px 0');	
						var prop = x / $('.vol_box').width();
						$('video').get(0).volume = prop;
						$(this).off('mousemove');			
					});
				});
				
				
				//上一部
				$('.video_pre').click(function(){
					video_num--;
					if( video_num == 0 ){
						video_num = 1;
						return false;
					}
					$('video').attr('src','static/video/'+ video_num +'.mp4');
					$('video source').attr('src','static/video/'+ video_num +'.mp4');
					$('video').get(0).play();
				})
				
				//下一部
				$('.video_next').click(function(){
					video_num++;
					if( video_num > 2 ){
						video_num = 2;
						return false;
					}
					$('video').attr('src','static/video/'+ video_num +'.mp4');
					$('video source').attr('src','static/video/'+ video_num +'.mp4');
					$('video').get(0).play();
				});
				
				//声音控件
				$('.vol_wrap a').click(function(){
					if( $('video').get(0).volume ){
						$('.vol_arr').css('width','20px');
						$(this).css('backgroundPosition','-201px -40px');	
						$('video').get(0).volume = 0; 
					}else{
						$('.vol_arr').css('width','120px');
						$(this).css('backgroundPosition','-201px 0');	
						$('video').get(0).volume = 1; 
					}
					vol_mar = !vol_mar;
				});
				
				//底部操作栏显示与隐藏
				$('.pro_box').hover(function(){
					$('.pro_box .up_hide').stop(true).animate({
						'bottom':'0'
					},500);
				},function(){
					$('.pro_box .up_hide').stop(true).animate({
						'bottom':'-50'
					},500);
				});
			})			
		}
	}
</script>