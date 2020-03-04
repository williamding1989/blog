<template>
	<div>
 		<div class="bigbox">
	  		<div class="outer relative">	  		
				<!--按钮区域-->
				<div class="box_btn">
					<span class="active">1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
				</div>
				<!--按钮区域-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
				<!--每个小块-->
				<div class="piece">
					<div class="ban_font"></div>
					<div class="ban_bottom"></div>
					<div class="ban_back"></div>
					<div class="ban_top"></div>
				</div>
				<!--每个小块-->
	  		</div>	
	  	</div>
	</div>
</template>

<script>
	export default {
		mounted () {
			$('.piece').each(function(i){
				$(this).css({
					'left':i*80+'px',
					'transitionDelay':i*0.05+'s'
				});
				$(this).children('div').css('backgroundPosition',-i*80+'px 0');
			});
	
			var index = 0;
			$('.box_btn>span').click(function(){
				index = $(this).index();
				$('.piece').css('transform','rotateX('+index*90+'deg)');
				$(this).addClass('active').siblings().removeClass('active');
			});
			
			var timer = setInterval(function(){
				rot();
			},5000);
			
			$('.outer').hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(function(){
					rot();
				},5000);
			});
			
			
			function rot(){
				index++;
				index %= 4 ;
				$('.piece').stop(true).css('transform','rotateX('+index*90+'deg)');
				$('.box_btn>span').eq(index).addClass('active').siblings().removeClass('active');
			}			
		}
	}
</script>

<style scoped>
.bigbox{
	width: 860px;
	margin: 0 auto;
	padding-top: 100px;
}
.outer{
	width: 800px;
	height: 360px;
	margin: 0 auto;
	-webkit-perspective:10000000;
	
}
.piece{
	transform-style: preserve-3d;
	position: absolute;    		
	width: 80px;
	height: 100%;
	top: 0;
	transition: all 0.8s;
}
.piece>div{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size:801px 360px;
}
.ban_font{
	transform: translateZ(180px);
	background: url('../../../static/img/flash1.png') no-repeat;
}
.ban_back{
	transform: translateZ(-180px) rotateX(180deg);
	background: url('../../../static/img/flash3.png') no-repeat;
}
.ban_top{
	transform: translateY(-180px) rotateX(90deg);
	background: url('../../../static/img/flash2.png') no-repeat;
}
.ban_bottom{
	transform: translateY(180px) rotateX(-90deg);
	background: url('../../../static/img/flash4.png') no-repeat;
}	    	
.box_btn{
	position: absolute;
	bottom: 0;
	text-align: center;
	width: 100%;
	z-index: 2;
}
.box_btn span{
	display: inline-block;
	margin-right: 5px;
	width: 30px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	font-weight: 500;
	border-radius: 50%;
	cursor: pointer;
}
.box_btn span.active{
	background: red;
}	
</style>