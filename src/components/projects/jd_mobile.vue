<template>
	<div>
		<div id="wrapper">
			<!--头部搜索框-->
			<div class="jd-search" id="search">
				<header>
					<div class="jd-logo">
						<a href="#"><i class="sprite-icon"></i></a>
					</div>
					<div class="search">
						<form>
							<span class="sprite-icon"></span>
							<input type="search" placeholder="面膜超级品类日，每满199减100！">
						</form>
					</div>
					<div class="login"><a href="#">登录</a></div>
				</header>
			</div>
			<!--banner轮播-->
			<div id="slider" class="clearfix">
				<div class="slider-touch">
					<ul class="swiper-wrapper">
						<li class="swiper-slide"><a href="#"><img src="static/img/1.jpg"></a></li>
						<li class="swiper-slide"><a href="#"><img src="static/img/2.jpg"></a></li>
						<li class="swiper-slide"><a href="#"><img src="static/img/3.jpg"></a></li>
						<li class="swiper-slide"><a href="#"><img src="static/img/4.jpg"></a></li>
						<li class="swiper-slide"><a href="#"><img src="static/img/5.jpg"></a></li>
						<li class="swiper-slide"><a href="#"><img src="static/img/6.jpg"></a></li>
						<li class="swiper-slide"><a href="#"><img src="static/img/7.jpg"></a></li>
						<li class="swiper-slide"><a href="#"><img src="static/img/8.jpg"></a></li>
					</ul>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<!--nav导航-->
			<div id="nav" class="clearfix">
				<nav>
					<a href="#">
						<img src="static/img/nav1.png">
						<span>京东超市</span>
					</a>
					<a href="#">
						<img src="static/img/nav2.png">
						<span>京东超市</span>
					</a>
					<a href="#">
						<img src="static/img/nav3.png">
						<span>京东超市</span>
					</a>
					<a href="#">
						<img src="static/img/nav4.png">
						<span>京东超市</span>
					</a>
					<a href="#">
						<img src="static/img/nav5.png">
						<span>京东超市</span>
					</a>
					<a href="#">
						<img src="static/img/nav6.png">
						<span>京东超市</span>
					</a>
					<a href="#">
						<img src="static/img/nav7.png">
						<span>京东超市</span>
					</a>
					<a href="#">
						<img src="static/img/nav8.png">
						<span>京东超市</span>
					</a>
				</nav>
			</div>
			<!--广告位置-->
			<div class="adv"></div>
			<!--主要内容区域-->
			<main>
				<!--掌上秒杀-->
				<div class="floor clearfix">
					<div class="floor-container">
						<div class="title-wrap">
							<span class="sprite-icon secskill-icon fl"></span>
							<h2 class="secskill-title fl">掌上秒杀</h2>
							<div class="secskill-timer fl">
								<span class="secskill-time" id="secskill-hour">00</span>
								<span class="secskill-time-colon">:</span>
								<span class="secskill-time" id="secskill-min">00</span>
								<span class="secskill-time-colon">:</span>
								<span class="secskill-time" id="secskill-sec">00</span>
							</div>
							<div class="secskill-move fr">
								<span>更多秒杀</span>
								<span class="sprite-icon"></span>
							</div>
						</div>
						<div class="secskill-content">
							<ul class="swiper-wrapper">
								<li class="swiper-slide">
									<a class="line" href="#">
										<img src="static/img/skill1.jpg"/>
									</a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill2.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill3.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill4.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a href="#"><img src="static/img/skill5.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill6.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a href="#"><img src="static/img/skill7.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill8.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill9.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill10.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill11.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill12.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill13.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill14.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill15.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill16.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a href="#"><img src="static/img/skill17.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill18.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a href="#"><img src="static/img/skill19.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide">
									<a class="line" href="#"><img src="static/img/skill1.jpg"/></a>
									<p>&yen;15</p>
									<p>&yen;32.1</p>
								</li>
								<li class="swiper-slide all-slides">
									<a href="#" class="sprite-icon">查看全部</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!--京东超市-->
				<div class="floor jd-shop clearfix">
					<div class="floor-container topLine">
						<div class="item">
							<a class="line" href="#"><img src="static/img/jdshop1.jpg"></a>
						</div>
						<div class="item">
							<a class="line" href="#"><img src="static/img/jdshop2.jpg"></a>
						</div>
						<div class="item">
							<a href="#"><img src="static/img/jdshop3.jpg"></a>
						</div>
					</div>
					<div class="floor-container topLine">
						<div class="item">
							<a class="line" href="#"><img src="static/img/jdshop4.jpg"></a>
						</div>
						<div class="item">
							<a href="#"><img src="static/img/jdshop5.jpg"></a>
						</div>
					</div>
				</div>
				<!--轮播广告-->
				<div class="floor advert clearfix">
					<div class="floor-container">
						<div class="advert-pro1">
							<ul class="swiper-wrapper">
								<li class="swiper-slide">
									<a href="#"><img src="static/img/floor31.jpg"></a>
								</li>
								<li class="swiper-slide">
									<a href="#"><img src="static/img/floor32.jpg"></a>
								</li>
							</ul>
						</div>
						<div class="swiper-pagination1"></div>
					</div>
				</div>
				<!--特色市场-->
				<div class="floor clearfix">
					<div class="floor-title">
						<a href="#">特色市场</a>
					</div>
					<div class="floor-container topLine">
						<div class="left">
							<a href="#" class="line"><img src="static/img/ts1.jpg"></a>
						</div>
						<div class="right">
							<a href="#"><img src="static/img/ts2.jpg"></a>
							<a href="#" class="topLine"><img src="static/img/ts3.jpg"></a>
						</div>
					</div>
					<div class="floor-container topLine">
						<div class="left">
							<a href="#" class="line"><img src="static/img/ts4.jpg"></a>
						</div>
						<div class="right">
							<a href="#"><img src="static/img/ts5.jpg"></a>
						</div>
					</div>
				</div>
				<!--轮播广告-->
				<div class="floor advert clearfix">
					<div class="floor-container">
						<div class="advert-pro2">
							<ul class="swiper-wrapper">
								<li class="swiper-slide">
									<a href="#"><img src="static/img/floor51.jpg"></a>
								</li>
								<li class="swiper-slide">
									<a href="#"><img src="static/img/floor52.jpg"></a>
								</li>
							</ul>
						</div>
						<div class="swiper-pagination2"></div>
					</div>
				</div>
				<!--主题街-->
				<div class="floor clearfix">
					<div class="floor-title">
						<a href="#">主题街</a>
					</div>
					<div class="floor-container topLine">
						<div class="left">
							<a href="#" class="line"><img src="static/img/ztj1.jpg"></a>
						</div>
						<div class="right">
							<div class="top">
								<a href="#"><img src="static/img/ztj2.jpg"></a>
							</div>
							<div class="bottom topLine">
								<a href="#" class="line"><img src="static/img/ztj3.jpg"></a>
								<a href="#"><img src="static/img/ztj4.jpg"></a>
							</div>
						</div>
					</div>
					<div class="floor-container topLine ztj">
						<a href="#" class="line"><img src="static/img/ztj5.jpg"></a>
						<a href="#" class="line"><img src="static/img/ztj6.jpg"></a>
						<a href="#" class="line"><img src="static/img/ztj7.jpg"></a>
						<a href="#"><img src="static/img/ztj8.jpg"></a>
					</div>
					<div class="floor-container topLine ztj">
						<a href="#" class="line"><img src="static/img/ztj9.jpg"></a>
						<a href="#" class="line"><img src="static/img/ztj10.jpg"></a>
						<a href="#" class="line"><img src="static/img/ztj11.jpg"></a>
						<a href="#"><img src="static/img/ztj12.jpg"></a>
					</div>
				</div>
				<!--轮播广告-->
				<div class="floor advert clearfix">
					<div class="floor-container">
						<div class="advert-pro3">
							<ul class="swiper-wrapper">
								<li class="swiper-slide">
									<a href="#"><img src="static/img/floor71.jpg"></a>
								</li>
								<li class="swiper-slide">
									<a href="#"><img src="static/img/floor72.jpg"></a>
								</li>
							</ul>
						</div>
						<div class="swiper-pagination3"></div>
					</div>
				</div>
				<!--品牌推荐-->
				<div class="floor brand clearfix">
					<div class="floor-title">
						<a href="#">品牌推荐</a>
					</div>
					<div class="floor-container topLine">
						<div class="item">
							<a class="line" href="#"><img src="static/img/brand1.jpg"></a>
						</div>
						<div class="item">
							<a class="line" href="#"><img src="static/img/brand2.jpg"></a>
						</div>
						<div class="item">
							<a href="#" class="line"><img src="static/img/brand3.jpg"></a>
						</div>
					</div>
				</div>
				<!--轮播广告-->
				<div class="floor clearfix">
					<div class="floor-container">
						<div class="advert-pro">
							<ul>
								<li><a href="#"><img src="static/img/99.jpg"></a></li>
							</ul>
						</div>
						<div class="slider-btn">
						</div>
					</div>
				</div>
				<!--为你推荐-->
				<div class="recommend clearfix">
					<div class="layout">
						<span>为你推荐</span>
					</div>
				</div>
				<!--推荐产品-->
				<div class="recommend-pro clearfix">
					<ul>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend1.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend2.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend1.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend2.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend1.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend2.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend1.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend2.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend1.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend2.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend1.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
						<li>
							<div class="product">
								<a href="#"><img src="static/img/recommend2.jpg"></a>
								<span>博视乐boshile双目眼镜式头戴放大镜9892G 带灯LED 多目镜调换 钟表仪器修理</span>
							</div>
							<span class="product-price">&yen;<span class="big-price">65</span><span class="small-price">.00</span></span>
							<a href="#" class="guess-pro">看相似</a>
						</li>
					</ul>
				</div>
				<div class="continue topLine">
					<a href="#">点击继续加载</a>
				</div>
			</main>
			<footer>
				<div class="jd-link topLine">
					<ul>
						<li><a href="#">登录</a></li>
						<li><a href="#">注册</a></li>
						<li><a href="#">反馈</a></li>
						<li><a href="#">返回顶部</a></li>
					</ul>
				</div>
				<div class="jd-platform topLine">
					<ul>
						<li><a href="#" class="platform1">客户端</a></li>
						<li><a href="#" class="platform2">触屏版</a></li>
						<li><a href="#" class="platform3">电脑版</a></li>
					</ul>
				</div>
				<div class="jd-copyright topLine">Copyright © 2004-2016 京东JD.com 版权所有</div>
			</footer>
		</div>
		<div id="menu">
			<ul>
				<li><a href="#"><img src="static/img/footer1.png"></a></li>
				<li><a href="#"><img src="static/img/footer2.png"></a></li>
				<li><a href="#"><img src="static/img/footer3.png"></a></li>
				<li><a href="#"><img src="static/img/footer4.png"></a></li>
				<li><a href="#"><img src="static/img/footer5.png"></a></li>
			</ul>
		</div>
		<div class="goTop" id="goTop"><a href="javascript:;"><img src="static/img/scroll-to-top-icon.png"></a></div>
	</div>
</template>

<script>
	export default {
		mounted () {
			window.onload = function(){
				var mySwiper = new Swiper('.slider-touch', {
					autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
					autoplayDisableOnInteraction : false,//手指触屏滑动之后，重新开启自动轮播
					initialSlide :0,//初始显示的li的索引
					speed : 1000,//滑动的速度
					observer:true,//当li节点被修改的时候自动更新Swiper
					observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
					grabCursor : true,//鼠标抓手形状，触屏看不到
					pagination : '.swiper-pagination',//下面的图标跟随切换
					loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
				});
				var mySwiper1 = new Swiper('.advert-pro1', {
					autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
					initialSlide :0,//初始显示的li的索引
					speed : 1000,//滑动的速度
					observer:true,//当li节点被修改的时候自动更新Swiper
					observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper	
					pagination : '.swiper-pagination1',//下面的图标跟随切换
					loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
				});
				var mySwiper2 = new Swiper('.advert-pro2', {
					autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
					initialSlide :0,//初始显示的li的索引
					speed : 1000,//滑动的速度
					observer:true,//当li节点被修改的时候自动更新Swiper
					observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper	
					pagination : '.swiper-pagination2',//下面的图标跟随切换
					loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
				});
				var mySwiper3 = new Swiper('.advert-pro3', {
					autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
					initialSlide :0,//初始显示的li的索引
					speed : 1000,//滑动的速度
					observer:true,//当li节点被修改的时候自动更新Swiper
					observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper	
					pagination : '.swiper-pagination3',//下面的图标跟随切换
					loop : true,//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
				});
				var mySwiper4 = new Swiper('.secskill-content', {
					initialSlide :0,//初始显示的li的索引
					speed : 1000,//滑动的速度
					observer:true,//当li节点被修改的时候自动更新Swiper
					observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper	
					slidesPerView : 3,
				});
			
				//吸顶盒事件
				var search = document.getElementById("search");
				var goTop = document.getElementById("goTop");
				window.onscroll = function(){
					var h = document.body.scrollTop;
					//console.log(h);
					if (h>0)
					{
						search.style.background = "rgba(208,55,67,0.85)";
					}else if(h==0){
						search.style.background = "rgba(0,0,0,0)";
					}
					if (h>400)
					{
						goTop.style.display = "block";
					}else{
						goTop.style.display = "none";
					}
				}
				goTop.onclick = function(){
					document.body.scrollTop = 0;
				}
			
				//倒计时
				//设置结束时间
				var endTime = new Date();
				endTime.setFullYear(2018);
				endTime.setMonth(1);
				endTime.setDate(30);
				endTime.setHours(12);
				endTime.setMinutes(0);
				endTime.setSeconds(0);
				var endTimer = endTime.getTime();//获取结束时间
				//console.log(endTimer);
				var secskill_hour = document.getElementById("secskill-hour");
				var secskill_min = document.getElementById("secskill-min");
				var secskill_sec = document.getElementById("secskill-sec");
				//转换时间
				function changeTime(time,obj1,obj2,obj3){
					var nowTime = new Date();
					var sec = (time - nowTime.getTime())/1000;
					//console.log(sec);
					if (sec > 0)
					{
						var hour = Math.floor(sec/3600);//小时
						sec = sec%3600;//剩下多少秒钟
						var min = Math.floor(sec/60);//分钟
						sec = Math.floor(sec%60);//秒
						obj1.innerHTML = addZero(hour,2);
						obj2.innerHTML = addZero(min,2);
						obj3.innerHTML = addZero(sec,2);
					}else{
						clearInterval(timer);
					}
				}
				var timer = setInterval(function(){
					changeTime(endTimer,secskill_hour,secskill_min,secskill_sec);
				},1000);
				changeTime(endTimer,secskill_hour,secskill_min,secskill_sec);
			
				//补零功能
				function addZero(time,n){
					var str = '' + time;
					while (str.length < n)
					{
						str = "0" + time;
					}
					 return str;
				}
			}
		}
	}
</script>

<style scoped>
html { 
	font-family: "Helvetica Neue",Helvetica, sans-serif;
	/*谷歌浏览器字体最小字体12px*/
	-webkit-text-size-adjust: 100%;/*100%/none 关闭字体大小自动调整功能*/
	/*a标签及拥有 :active伪类的元素有默认的高亮框*/
	-webkit-tap-hightlight-color: transparent;
	/*禁止文本被选中*/
	-webkit-user-select: none;
}
body{
	overflow-x:hidden;
	/*开启moblie网页快速滚动和回弹的效果*/
	-webkit-overflow-scrolling: touch;
	font-size: 12px;
}
*{
	margin: 0;
	padding: 0;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
a{
	display:block;
	width:100%;
	color: #333;
	text-decoration: none;
}
a.line,.topLine{
	position:relative;
}
a.line:after,.topLine:after{
	content:"";
	position:absolute;
	right:0;
	top:0;
}
a.line:after{
	height:100%;
	width:1px;
	-webkit-transform:scaleX(0.5);
	transform:scaleX(0.5);
	border-right:1px solid #ccc;
}
.topLine:after{
	height:1px;
	width:100%;
	-webkit-transform:scaleY(0.5);
	transform:scaleY(0.5);
	border-top:1px solid #ccc;
}
img{
	border: 0;
	display: block;
	width:100%;
	vertical-align: middle;
}
input{
	-webkit-appearance: none;
	outline: none;
	border: none;
}
.fl{
	float:left;
}
.fr{
	float:right;
}
.clearfix:after{
	content:"";
	display:block;
	width:100%;
	height:0;
	clear:both;
}
li,ol{
	list-style:none;
}

.sprite-icon{
	display:inline-block;
	background:url("../../../static/img/jd-sprites.png") no-repeat;
	background-size:200px 200px;
}
#wrapper{
	width:100%;
	max-width:640px;
	min-width:300px;
	margin:0 auto;
	height:1000px;
}
/*--头部搜索框--*/
.jd-search{
	position:fixed;
	left:0;
	top:0;
	right:0;
	margin:auto;
	width:100%;
	max-width:640px;
	min-width:300px;
	height:40px;
	z-index:9999;
	/*background:red;*/
}
.jd-search header{
	position:relative;
	width:100%;
	height:100%;
}
.jd-search header div.jd-logo{
	position:absolute;
	left:10px;
	top:9px;
	width:56px;
	height:40px;
}
.jd-search header div.jd-logo i{
	width:56px;
	height:21px;
	background-position:0 -109px;
}
.jd-search header div.search{
	width:100%;
	height:100%;
	padding-left:76px;
	padding-right:48px;
}
.jd-search header div.search form{
	display:inline-block;
	width:100%;
	height:30px;
	background:#fff;
	border-radius:15px;
	margin-top:5px;
	overflow:hidden;
}
.jd-search header div.search form span{
	display:inline-block;
	width:20px;
	height:20px;
	background-position:-60px -109px;
	margin-left:8px;
	vertical-align:middle;
}
.jd-search header div.search form input{
	display:inline-block;
	width:80%;
	height:100%;
}
.jd-search header div.login{
	position:absolute;
	right:10px;
	top:0;
	height:40px;
	line-height:40px;
	font-size:15px;
}
.jd-search header div.login a{
	color:#fff;
}

/*banner轮播*/
#slider{
	position:relative;
	width:100%;
}
#slider div.slider-touch{
	width:100%;
	overflow:hidden;
}
#slider div.slider-touch ul{
	width:1000%;
	/*-webkit-transform:translateX(-10%);
	transform:translateX(-10%);*/
	overflow:hidden;
}
#slider div.slider-touch ul li{
	width:10%;
	float:left;
}
div.swiper-pagination{
	position:absolute;
	width:100%;
	bottom:8px;
	left:0;
	text-align:center;
}
div.swiper-pagination span.swiper-pagination-bullet{
	display:inline-block;
	width:6px;
	height:6px;
	border:1px solid #FFF;
	border-radius:50%;
	margin:0 2px;
}
.swiper-pagination-bullet-active{
	background:#fff;
}

/* nav 导航*/
#nav{
	width:100%;
}
#nav nav{
	width:100%;
	padding-top:11px;
}
#nav nav a{
	width:25%;
	float:left;
	text-align:center;
	margin-bottom:10px;
}
#nav nav a img{
	width:40px;
	height:40px;
	margin:0 auto 6px;
}

/*广告位置*/
.adv{
	width:100%;
}
/*主要内容块*/
main{
	display:block;
	width:100%;
	background:#F5F5F5;
}
.floor{
	width:100%;
	margin-top:8px;
}
.floor div.floor-container{
	width:100%;
	overflow:hidden;
}
/*掌上秒杀*/
.floor:nth-child(1){
	background:#fff;
}
.title-wrap{
	width:100%;
}
.title-wrap span.secskill-icon{
	margin-left:10px;
	margin-top:4px;
	width:18px;
	height:22px;
	background-position:-84px -109px;
}
.title-wrap h2.secskill-title{
	font-size:15px;
	color:#CA1327;
	margin:10px 3px 0 4px;
}
.title-wrap div.secskill-timer{
	margin:10px 0 0 10px;
}
.title-wrap div.secskill-timer span.secskill-time{
	display:inline-block;
	width:18px;
	height:18px;
	background:#000;
	border-radius:2px;
	color:#fff;
	text-align:center;
	line-height:18px;
}
.title-wrap div.secskill-move{
	margin-top:10px;
	color:#aaa;
	padding-right:10px;
}
.title-wrap div.secskill-move span.sprite-icon{
	width:7px;
	height:13px;
	background-position:-186px -50px;
}
.secskill-content{
	width:100%;
	overflow:hidden;
	padding-top:10px;
}
.secskill-content ul{
	width:700%;
}
.secskill-content ul li{
	width:4.76%;
	float:left;
	text-align:center;
}
.secskill-content ul li.all-slides{
	width:31px !important;
    height: 72px;
    font-size: 10px;
}
.secskill-content ul li.all-slides a{
	padding-top:12px;
	width:20px;
	color: #666;
	background-color: #f5f5f5;
	background-position:-104px -110px;
}
.secskill-content ul li a img{
	display:inline-block;
	width:80%;
}
.secskill-content ul li p:nth-child(2){
	color:#F17A5C;
	margin-top:8px;
	font-size:14px;
}
.secskill-content ul li p:nth-child(3){
	color:#aaa;
	font-size:12px;
	text-decoration:line-through;/*删除线*/
}

/*京东超市*/
.jd-shop .floor-container:nth-child(1) .item{
	width:33.33%;
	float:left;
}
.jd-shop .floor-container:nth-child(2) .item{
	width:50%;
	float:left;
}
/*广告轮播*/
.advert .floor-container{
	padding:0 8px;
	position:relative;
}
.advert .floor-container .advert-pro1,.advert .floor-container .advert-pro2,.advert .floor-container .advert-pro3{
	width:100%;
	overflow:hidden;
}
.advert .floor-container ul{
	width:400%;
}
.advert .floor-container ul li{
	width:25%;
	float:left;
}
.swiper-pagination1,.swiper-pagination2,.swiper-pagination3{
	position:absolute;
	left:0;
	bottom:4px;
	width:100%;
	text-align:center;
}
.swiper-pagination1 span,.swiper-pagination2 span,.swiper-pagination3 span{
	display:inline-block;
	width:6px;
	height:6px;
	border:1px solid #FFF;
	border-radius:50%;
	margin:0 2px;
}
/*特色市场*/
.floor-title{
	width:100%;
	height:34px;
	line-height:34px;
	font-size:14px;
	background:#fff;
}
.floor-title a{
	color:#F25353;
	padding-left:8px;
}
.left,.right{
	width:50%;
	float:left;
}
/*主题街*/
.top{
	width:100%;
}
.bottom{
	width:100%;
}
.bottom a{
	width:50%;
	float:left;
}
.ztj a{
	width:25%;
	float:left;
}
/*品牌推荐*/
.brand{
	padding:0 8px;
}
.brand .item{
	width:30.22%;
	float:left;
}
.brand .item:nth-child(1){
	width:39.55%;
}

/*为你推荐*/
.recommend{
	width:100%;
	height:30px;
	margin-bottom:8px;
	padding:0 8px;
}
.recommend .layout{
	position:relative;
	width:100%;
	height:100%;
}
.recommend .layout:after{
	content:'';
	position:absolute;
	top:50%;
	z-index:1;
	width:100%;
	height:1px;
	background:#ccc;
}
.recommend .layout span{
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	margin:auto;
	width:100px;
	height:21px;
	line-height:21px;
	font-size:14px;
	padding-left:36px;
	padding-right:6px;
	background:#F5F5F5 url("../../../static/img/gray.png") no-repeat;
	background-position:6px 0px; 
	z-index:2;
}
/*推荐产品*/
.recommend-pro{
	width:100%;
	
}
.recommend-pro ul{
	width:100%;
}
.recommend-pro ul li{
	position:relative;
	width:50%;
	float:left;
	margin-bottom:4px;
}
.recommend-pro ul li:nth-child(2n+1){
	padding-right:2px;
}
.recommend-pro ul li:nth-child(2n){
	padding-left:2px;
}
.recommend-pro ul li div.product{
	width:100%;
	background:#fff;
}
.recommend-pro ul li div.product span{
	display:-webkit-box;
	-webkit-box-orient:vertical;
	width:100%;
	height:41px;
	font-size:13px;
	line-height:16px;
	padding:8px 10px 8px 4px;
	overflow:hidden;
	text-overflow:ellipsis;
	-webkit-line-clamp:2;
}
.product-price{
	display:block;
	color:#F66C6C;
	font-size:13px;
	padding-left: 4px;
	padding-bottom: 10px;
	background:#fff;
}
.big-price{
	font-size:18px;
}
.guess-pro{
	display:block;
	position:absolute;
	right:8px;
	bottom:6px;
	width:49px;
	height:24px;
	font-size:12px;
	line-height:24px;
	color:#686868;
	text-align:center;
}
.guess-pro:after{
	content:"";
	position:absolute;
	left:-26px;
	top:-12px;
	width:200%;
	height:200%;
	-webkit-transform:scale(0.5);
	transform:scale(0.5);
	border:1px solid #ccc;
	border-radius:4px;
}

/*继续加载*/
.continue{
	width:100%;
	height:34px;
	font-size:14px;
	text-align:center;
	line-height:34px;
}

/*底部样式*/
footer{
	width:100%;
	text-align:center;
}
/*链接*/
.jd-link{
	width:100%;
	overflow:hidden;
}
.jd-link ul{
	width:320px;
	margin:auto;
	display:table;
	padding:18px 0;
}
.jd-link ul li{
	display:table-cell;
	width:69px;
	border-right:1px solid #ccc;
}
.jd-link ul li:nth-child(1){
	width:90px;
}
.jd-link ul li:nth-child(4){
	width:90px;
	border-right:0;
}
/*平台*/
.jd-platform{
	width:100%;
	overflow:hidden;
}
.jd-platform ul{
	display:table;
	width:320px;
	height:69px;
	margin:auto;
	padding:8px 0;
}
.jd-platform ul li{
	display:table-cell;
}
.jd-platform ul li a{
	display:block;
	width:45px;
	margin:auto;
	position:relative;
	opacity: .6;
}
.jd-platform ul li a.platform2{
	opacity: 1;
}
.jd-platform ul li a:before{
	content:'';
    display: block;
    height: 38px;
    width: 33px;
    margin: 9px auto 0;
    background:url("../../../static/img/jd-sprites.png") no-repeat;
	background-size:200px 200px;
}
.jd-platform ul li a.platform1:before{
	background-position:-120px -70px;
}
.jd-platform ul li a.platform2:before{
	background-position:-40px -70px;
}
.jd-platform ul li a.platform3:before{
	background-position:-80px -70px;
}
.jd-platform ul li a.platform1:after{
	content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 2px;
    right: 3px;
	background:url("../../../static/img/jd-sprites.png") no-repeat;
	background-size:200px 200px;
    background-position: -150px 0;
}
.jd-copyright{
	width:100%;
	height:40px;
	line-height:40px;
	color:#ccc;
	margin-bottom:40px;
}
/*漂浮菜单栏*/
#menu{
	position:fixed;
	left:0px;
	bottom:0px;
	width:100%;
	height:44px;
	box-shadow:0 -5px 5px #ccc;
	background:#fff;
}
#menu ul{
	width:100%;
}
#menu ul li{
	width:20%;
	float:left;
}
#menu ul li a{
	width:57px;
	height:44px;
	margin:auto;
}
.goTop{
	position:fixed;
	right:10px;
	bottom:60px;
	width:40px;
	height:40px;
	display:none;
}	
</style>