<template>
	<transition enter-active-class='fadeInLeft' leave-active-class='fadeOutRight'>
		<div class="projectbox animated" v-show='proshow' >
			<el-button type="primary" icon="el-icon-error"@click='prohide' id='back'>返回</el-button>
			<jdmobile v-if='id === 0 '></jdmobile>
			<video_demo v-if='id === 1 '></video_demo>
			<audio_demo v-if='id === 2 '></audio_demo>
			<lunbo v-if='id === 4 '></lunbo>
		</div>
	</transition>
</template>

<script>
	import jdmobile from '@/components/projects/jd_mobile.vue'
	import video_demo from '@/components/projects/video.vue'
	import audio_demo from '@/components/projects/audio.vue'
	import lunbo from '@/components/projects/lunbo_3d.vue'
	export default{
		props: ['id'],
		data () {
			return {
				proshow : false
			}
		},
		methods: {
			prohide () {
				this.proshow = false;
			},
			showpro () {
				this.proshow = true;
				this.$nextTick(()=>{
					if(this.id === 3){
						window.location.href='http://williamding1989.cn/elm/'
					}else if(this.id === 5){
						window.location.href='http://williamding1989.cn/jianshu/'
					}
				})
			}
		},
		components: {
			jdmobile,
			video_demo,
			audio_demo,
			lunbo
		}
	}
</script>

<style scoped>
#back{
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 99999;
}
</style>