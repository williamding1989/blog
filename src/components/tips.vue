<template>
	<div class="maincon con">
		<!--感悟-->
		<div  class="main_4 clearfix">
			<div class="about_wrap mar_auto">
				<div class="title_name relative font-center">
					Tips
					<!--横线-->
					<div class="absolute name_left"></div>
					<div class="absolute name_right"></div>
					<!--横线-->
				</div>
				<div class="tips_box">
					<div class="tips_brand">
						<el-tag type="success" size='medium' v-for='value in classfy'  :class="{'active':value.active}" @click.native='readthis(value)'>{{value.name}} {{value.commont.length}}</el-tag>
					</div>
					<p class="tips_title" v-for='(value,index) in finalcommont' @mousemove='changecolor(value)'  @click='tipboxshow(value)'>
						<span class="tips_ico" :class='classname[value.type]'></span>
						<a href="javascript:void(0)" target="_blank" :class="{'active':value.active}">{{value.title}}</a>
					</p>
				</div>
			</div>
		</div>
		<!--感悟-->
		<tipbox ref='tipbox' :tipscontent='tipscontent'></tipbox>	
	</div>
</template>


<script>
	import axios from 'axios'
	import tipbox from '@/components/tips/tipbox.vue'
	export default {
		data () {
			return {
				classname: ['ico_Original','ico_Repost'],
				tipscontent: '',
				tipshow: false,
				classfy:[{
					name: '全部',
					active: true,
					commont: []
				},{
					name: 'Html+Css',
					active: false,
					commont: []
				},{
					name: 'Css3',
					active: false,
					commont: []
				},{
					name: '响应式',
					active: false,
					commont: []
				},{
					name: 'Vue',
					active: false,
					commont: []
				},{
					name: '移动端',
					active: false,
					commont: []
				},{
					name: 'js/jq',
					active: false,
					commont: []
				},{
					name: '小程序',
					active: false,
					commont: []
				},{
					name: 'es6',
					active: false,
					commont: []
				},{
					name: 'react',
					active: false,
					commont: []
				},{
					name: 'webpack',
					active: false,
					commont: []
				}],
				finalcommont: []				
			}
		},
		mounted () {
			axios.get('static/tips.json').then((res)=>{
				this.finalcommont = res.data.tips
				this.classfy[0].commont = res.data.tips
				for(let i =0; i<this.finalcommont.length;i++){
					if(this.finalcommont[i].brand === 'html+css'){
						this.classfy[1].commont.push(this.finalcommont[i])
					}else if (this.finalcommont[i].brand === 'css3'){
						this.classfy[2].commont.push(this.finalcommont[i])
					}else if (this.finalcommont[i].brand === '响应式'){
						this.classfy[3].commont.push(this.finalcommont[i])
					}else if (this.finalcommont[i].brand === 'vue'){
						this.classfy[4].commont.push(this.finalcommont[i])
					}else if (this.finalcommont[i].brand === '移动端'){
						this.classfy[5].commont.push(this.finalcommont[i])
					}else if (this.finalcommont[i].brand === 'js/jq'){
						this.classfy[6].commont.push(this.finalcommont[i])
					}else if (this.finalcommont[i].brand === '小程序'){
						this.classfy[7].commont.push(this.finalcommont[i])
					}else if (this.finalcommont[i].brand === 'es6'){
						this.classfy[8].commont.push(this.finalcommont[i])
					}else if (this.finalcommont[i].brand === 'react'){
						this.classfy[9].commont.push(this.finalcommont[i])
					}else if (this.finalcommont[i].brand === 'webpack'){
						this.classfy[10].commont.push(this.finalcommont[i])
					}
				}
			})
		},
		methods: {
			changecolor (obj) {
				for(let i =0; i<this.finalcommont.length;i++){
					this.finalcommont[i].active === false
				}
				this.$set(obj,'active',true);
			},
			tipboxshow (value) {
				if(value.brand == 'react'){
					window.location.href='https://app.yinxiang.com/fx/9f18258f-178a-4b75-9377-e087e4482ae1'
				}else if(value.brand == 'webpack'){
					window.location.href='https://app.yinxiang.com/fx/98467b31-0afb-4c51-8bab-0c5de8cb5690'
				}else{
					this.tipscontent = value
					this.$refs.tipbox.boxshow()	
				}
			},
			readthis (val) {
				for(let i = 0;i<this.classfy.length;i++){
					this.classfy[i].active = false
				}
				val.active = true;
				this.finalcommont = val.commont
			}
		},
		components: {
			tipbox
		}
	}
</script>

<style scoped>
.tips_brand{
    width: 90%;
    margin: 0 auto 4px;	
}
.tips_brand span{
    margin-right: 4px;
    margin-bottom: 4px;
}
.tips_brand span.active{
    color: #fff;
    background: #00a9dc;
}
.tips_title a.active{
	color:rgb(247, 237, 180);
}
</style>