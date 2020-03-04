<template>
	<div class="maincon con">
		<!--联系我-->
		<div class="main_5 clearfix">
			<div class="about_wrap mar_auto">
				<div class="title_name relative font-center">
					Contact
					<!--横线-->
					<div class="absolute name_left"></div>
					<div class="absolute name_right"></div>
					<!--横线-->
				</div>
			</div>
			<link rel="stylesheet" href="static/js/laydate-v1.1/laydate-v1.1/laydate/skins/molv/laydate.css" />
			<!--地图-->
			<div id="map" class="f_l">
				<div id="map_search">
					<input type="text" id="search_city" placeholder="请输入城市...">
					<input class="pointer" type="button" value="搜索" id="search_btn">
				</div>
			</div> 
			<!--地图-->
			<!--我的联系方式-->
			<div class="contact_wrap f_l">
				<p class="con_qq">: 648188670(同微信)</p>
				<p class="con_mail">: williamding_web@163.com</p>
				<p>地址:上海市嘉定区铜川路祁连山路</p>
				<p>邮编:201824</p>
				<p>简历：<a href="static/dqf.doc" download="丁琦斐的简历" style="color:#fff">点我下载</a></p>
			</div>
			<!--我的联系方式-->
		</div>
	</div>
</template>


<script>
	export default {
		mounted () {
			//高德地图
			var search_btn = document.getElementById("search_btn");
			var search_city = document.getElementById("search_city");
			var map = new AMap.Map('map',{
				zoom: 16,
				center: [121.3751264751,31.2547640979]
			});
			var marker = new AMap.Marker({
		        position: [121.3751264751,31.2547640979],
		        map:map
		    });
			var toolBar,mouseTool;
			//在地图中添加操作toolBar插件、mouseTool插件
			map.plugin(["AMap.ToolBar","AMap.MouseTool"],function(){
				toolBar = new AMap.ToolBar();
				map.addControl(toolBar);
				mouseTool = new AMap.MouseTool(map);
			});
			//搜索城市
			search_btn.onclick = function(){
				var val = search_city.value;
				map.setCity(val);
			}	 
		}
	}
</script>