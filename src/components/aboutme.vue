<template>
	<div class="maincon con">
		<!--关于我-->
		<div class="main_2">
			<div class="about_wrap mar_auto">
				<div class="about_title font-center">
					<div class="title_name relative">
						About Me
						<!--横线-->
						<div class="absolute name_left"></div>
						<div class="absolute name_right"></div>
						<!--横线-->
					</div>
					<!--头像-->
					<div class="about_pic">
						<img src="static/img/audio_xin_4.jpg"  alt="头像" width="100%" height="100%"/>
					</div>
					<!--头像-->
					<p class="about_name">{{profile.name}}</p>
					<p class="about_job">{{profile.job}}</p>
					<p>座右铭:{{profile.motto}} </p>
				</div>
				<!--具体介绍-->
				<div class="about_detail clearfix">
					<ul class="clearfix persoon_info">
						<li>
							<div class="detail_box">
								<div class="detail_title">个人介绍</div>
								<P>姓名:  {{profile.name}}</P>
								<P>英文名:  {{profile.english}}</P>
								<P>年龄:  {{profile.age}}</P>
								<P>出生日期:  {{profile.birth}}</P>
								<P>性别:  {{profile.sex}}</P>
								<P>户口:  {{profile.hukou}}</P>
								<P>学历:  {{profile.edu}}</P>
								<P>爱好:  {{profile.hobby}}</P>
								<P>工作经验:  {{profile.workyear}}</P>
								<P>前端经验:  {{profile.fe_workyear}}</P>	
								<P>求职状态:  {{profile.state}}</P>
							</div>
						</li>
						<li>
							<div class="detail_box">
								<div class="detail_title">最近工作</div>
								<P>工作时间:  {{latestwork.worktime}}</P>
								<P>项目名称:  {{latestwork.workname}}</P>
								<P>项目职责:</P>
								<P v-for='(value,index) in latestwork.myjob' :key='index'>{{index+1}}.{{value}}</P>
							</div>				
						</li>
						<li>
							<div class="detail_box">
								<div class="detail_title">技能展示</div>
								<div class="skill_list" v-for='(value,index) in skilllist' :key='index'>
									<span>{{value.skillname}}:</span>
									<div class="skillbar_wrap">
										<transition name='showskill'>
											<div class="skillbar" :style='value.style'></div>
										</transition>
									</div>
								</div>
							</div>	
						</li>
					</ul>
				</div>
				<!--具体介绍-->
			</div>
		</div>
		<!--关于我-->
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data () {
			return {
				profile: {},
				latestwork: {},
				skilllist: {}
			}
		},
		mounted () {
			axios.get('static/aboutme.json').then((res)=>{
				this.profile = res.data.profile
				this.latestwork = res.data.latestwork
				this.skilllist = res.data.skilllist
			})
		}
	}
</script>

<style scoped>
</style>