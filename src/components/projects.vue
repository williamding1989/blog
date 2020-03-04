<template>
	<div class="maincon con">
		<!--我的项目-->
		<div class="main_3">
			<div class="about_wrap mar_auto">
				<div class="title_name relative font-center">
					Projects
					<!--横线-->
					<div class="absolute name_left"></div>
					<div class="absolute name_right"></div>
					<!--横线-->
				</div>
				<div class="pro_box mar_auto">
					<ul class="clearfix">
						<li v-for='value in projectlist' @click='openproject(value.id)'>
							<a href="javascript:;">
								<div>
									<img :src="value.imgurl" width="100%" height="100%">
								</div>								
								<p>{{value.name}}</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--我的项目-->
		<projectbox ref='projectbox' :id='id'></projectbox>
	</div>
</template>

<script>
	import projectbox from '@/components/projects/projectbox.vue'
	import axios from 'axios'
	export default {
		data () {
			return {
				projectlist: [],
				id:''
			}
		},
		mounted () {
			axios.get('static/project.json').then((res)=>{
				this.projectlist = res.data.projectlist
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
		},
		watch: {
			$route () {
				console.log(arguments)
			}
		}
	}
</script>


<style scoped>
.apptips{
	padding: 0 20px;
    text-align: center;
    line-height: 20px;	
}
</style>