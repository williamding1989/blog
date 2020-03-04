Vue.component('djs',{
	template: `
		<section class="timewrap">
			<div class="title">距离活动开始还有</div>
			<div class="timebox"><span class="d_ten"></span><span class="d_one"></span><span class="word">天</span><span class="h_ten"></span><span class="h_one"></span><span class="word">时</span><span class="m_ten"></span><span class="m_one"></span><span class="word">分</span><span class="s_ten"></span><span class="s_one"></span><span class="word">秒</span><span class="ms"></span></div>
		</section>
	`,
	props: ['begintime','endtime'],
	mounted () {
		this.$nextTick(() => {
			setInterval(()=>{
				var t  = new Date( this.begintime ).getTime() - new Date().getTime();
				if(t < 0){
					$('.timewrap .title').html('距离活动结束还有');
					var t  = new Date( this.endtime ).getTime() - new Date().getTime();
					if( t < 0 ){
						$('.timewrap .title').html('活动已结束');
						$('.timebox').hide();
						return;
					}
				}
				var d=toTwo(Math.floor(t/1000/60/60/24)).toString().split("");
				var h=toTwo(Math.floor(t/1000/60/60%24)).toString().split("");
				var m=toTwo(Math.floor(t/1000/60%60)).toString().split("");
				var s=toTwo(Math.floor(t/1000%60)).toString().split("");
				var ms=Math.floor(t/100%10);
				$('.d_ten').html(d[0]);
				$('.d_one').html(d[1]);
				$('.h_ten').html(h[0]);
				$('.h_one').html(h[1]);
				$('.m_ten').html(m[0]);
				$('.m_one').html(m[1]);
				$('.s_ten').html(s[0]);
				$('.s_one').html(s[1]);
				$('.ms').html(ms);
			},100);	
		})
	}
})