<template>
	<div class="to_top" @click='to_top'></div>
</template>

<script>
	export default {
		methods: {
			to_top () {
				console.log($('html,body').scrollTop())
				$('html,body').animate({
					'scrollTop' : '0'
				},500);				
			}
		}
	}
</script>