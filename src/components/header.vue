<template>
	<div class="wrap">
		<div class="header con clearfix">
			<div class="logo_wrap f_l" @mousemove='logon_in($event)' @mouseleave="logon_out">
				<!--<img src="img/logo.png" alt="logo图片"/>-->
			</div>
			<!--手机状态下导航图标-->
			<div class="tel_pic f_r" @click='shownav'></div>
			<!--手机状态下导航图标-->
			<div class="top_nav f_r">
				<ul class="clearfix">
					<li class="cube">
						<router-link tag='a' to='/home'>Home</router-link>
						<!--立方体-->
						<div class="cube">
							<!--前面-->
							<router-link class="font" tag='div' to='/home'>Home</router-link>
							<!--下面-->
							<router-link class="bottom" tag='div' to='/home'>首页</router-link>
						</div>					
					</li>
					<li class="cube">
						<router-link tag='a' to='/aboutme'>About me</router-link>
						<div class="cube">
							<!--前面-->
							<router-link class="font" tag='div' to='/aboutme'>About me</router-link>
							<!--下面-->
							<router-link class="bottom" tag='div' to='/aboutme'>关于我</router-link>
						</div>
					</li>
					<li class="cube">
						<router-link tag='a' to='/projects'>Projects</router-link>
						<div class="cube">
							<!--前面-->
							<router-link class="font" tag='div' to='/projects'>Projects</router-link>
							<!--下面-->
							<router-link class="bottom" tag='div' to='/projects'>项目</router-link>
						</div>
					</li>
					<li class="cube">
						<router-link tag='a' to='/tips'>Tips</router-link>
						<div class="cube">
							<!--前面-->
							<router-link class="font" tag='div' to='/tips'>Tips</router-link>
							<!--下面-->
							<router-link class="bottom" tag='div' to='/tips'>感悟</router-link>	
						</div>
					</li>
					<li class="cube">
						<router-link tag='a' to='/contact'>Contact</router-link>
						<div class="cube">
							<!--前面-->
							<router-link class="font" tag='div' to='/contact'>Contact</router-link>
							<!--下面-->
							<router-link class="bottom" tag='div' to='/contact'>联系我</router-link>
						</div>						
					</li>
				</ul>
			</div>
		</div>	
	</div>
</template>

<script>
	export default{
		mounted () {			
			//logo特效
			boom_pic('.logo_wrap',10,10);
			setTimeout(function(){
				$('.logo_wrap>div').addClass('act');
			},200);
			var index;
			//点击导航
			$('.top_nav li').click(function(){
				index = $(this).index() ;
				//头部导航固定选中属性
				$(this).children('.cube').css('transform','rotateX(90deg)').parent().siblings().children('.cube').css('transform','');
			});
		},
		methods: {
			shownav () {
				//手机页面导航按钮点击
				if( $('.top_nav').height() == 0 ){
					$('.top_nav').height('auto');
				}else{
					$('.top_nav').animate({
						'height' : '0'
					},500);
				}		
			},
			logon_in (e) {
				var x = e.clientX - $('.logo_wrap').offset().left; //x值
				var y = e.clientY - $('.logo_wrap').offset().top;  //y值
				$('.logo_wrap>div').each(function(i){
					var x_val =Math.pow( ( x - $(this).position().left ),2);//x的差值
					var y_val =Math.pow( ( y - $(this).position().top ),2);//y的差值
					var distance = Math.sqrt( x_val + y_val ); //距离
					if( distance < 40 ){
						$(this).removeClass('act');
					}else{
						$(this).addClass('act');
					}
				});				
			},
			logon_out () {
				$('.logo_wrap>div').addClass('act');
			}
		}
	}
</script>