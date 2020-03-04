<template>
  <div id="app">
  	<Loading v-show='loadingshow'></Loading>
  	<Header></Header>
  	<transition enter-active-class='zoomInLeft' leave-active-class='zoomOutRight'>
  		<keep-alive>
  			<router-view class='animated'></router-view>
  		</keep-alive>
  	</transition>
  	<Footer v-show='gettype'></Footer>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Loading from '@/components/loading.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
  	Header,
  	Footer,
  	Loading
  },
  watch: {
		$route(to,from){
			console.log(to)	
			if(to.path=='/contact'){
				this.footer_hide()
			}else{
				this.footer_show()
			}
		}
	},
  computed: {
		...mapGetters([
	    'gettype',
	    'loadingshow'
	  ])
  },
  methods: {
  	...mapActions([
	    'footer_hide',
	    'footer_show'
	  ])
  },
  mounted () {
  	let loading_h = $(window).height()
  	$('.loading').css('lineHeight',loading_h+'px')
  }
}
</script>

<style>

</style>
