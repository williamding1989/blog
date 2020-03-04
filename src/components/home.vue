<template>
	<div class="maincon con">
		<div class="main_1 active">
			<div class="main_1_intro font-center">
				<p class="intro_title">Introduction</p>
				<p class="intro_detail">William ding,the man who enjoys his life and work,wants to
				share his own experience with you.</p>
				<p class="intro_detail">So come on bro , join me!</p>
			</div>
			<div class="main_1_project_wrap clearfix">
				<div class="latest_wrap f_l">
					<div class="latest_wrap_detail">
						<h2>Latest Project</h2>
						<p>简书项目:基于react开发,实现简书首页布局，列表展现，详情页跳转，登录鉴权，热门搜索等功能</p>
						<a href="http://williamding1989.cn/jianshu/" target="_blank">Continue Journal</a>
					</div>
				</div>
				<div class="pro_list f_r">
					<ul>
						<li v-for='(value,index) in project'  @click='openproject(value.id)' v-if='index<4'>
							<img :src="value.imgurl" alt="案例展示图" width="100%" height="100%"/>
							<!--边框线特效-->
							<!--<div class="hide_arr1"></div>
							<div class="hide_arr2"></div>-->
							<!--弹出层-->
							<div class="up_hide">{{value.title}}</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<projectbox  ref='projectbox' :id='id'></projectbox>
	</div>
</template>

<script>
	import axios from 'axios'
	import projectbox from '@/components/projects/projectbox.vue'
	export default {
		data () {
			return {
				project:[],
				id: ''
			}
		},
		mounted () {
			axios.get('static/project.json').then((res)=>{
				this.project = res.data.projectlist
			})
		},
		components: {
			projectbox
		},
		methods: {
			openproject (id) {
				console.log(id)
				this.id = id;
				this.$refs.projectbox.showpro()
				
			}			
		}
	}
</script>