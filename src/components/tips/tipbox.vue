<template>
	<transition  enter-active-class='fadeInLeft' leave-active-class='fadeOutRight'>
		<div class="tipbox animated" @click='boxhide' v-show='tipshow'>
			<div v-html='tipscontent.content'></div>
		</div>
	</transition>
</template>

<script>
	export default {
		data () {
			return {
				tipshow: false
			}
		},
		methods: {
			boxhide () {
				this.tipshow = false
			},
			boxshow () {
				this.tipshow = true
			}
		},
		props: ['tipscontent']
	}
</script>