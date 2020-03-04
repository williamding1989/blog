Vue.component('adbox',{
	template: `
		<div class="adbox">
			<ul>
				<li v-for='value in imgarr'>
					<img :src='value' onclick="jump2special()">
				</li>
			</ul>
		</div>
	`,
	props: ['imgarr','shownum','speed'],
	mounted () {
		this.$nextTick(()=>{
			$(window).load(()=>{
				var obj = $('.adbox li').get(0);  //传入js对象
				var height =  parseFloat( window.getComputedStyle(obj,null).getPropertyValue('height') );
				var adindex = 0 ;	
				var adnumber = this.shownum?this.shownum:3;
				var movespeed = this.speed?this.speed:2000;
				$('.adbox').height(height*this.shownum+2*this.shownum);
						
				var adtime = setInterval(function(){
					adindex ++;
					$('.adbox ul').animate({
						'marginTop' : -adindex*(height+2)+'px'
					},800,function(){
						var img = $('.adbox li').eq(adindex-1).html();
						var html='<li>'+img+'</li>';
						$(this).append(html);
					})
				},movespeed);				
			})
		})
	}
})
