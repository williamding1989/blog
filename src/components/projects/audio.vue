<template>
	<div>
		<audio src="static/audio/陈奕迅 - 淘汰.mp3"></audio>
		<!--存放歌词-->
		<div class="gc_box" style="display: none;"></div>
		<div class="pro_box" style="width: 830px;height: auto;">
			<div class="audio_header">
				<!--<i class="a_logo"></i>-->
			</div>
			<div class="a_main clearfix">
				<div class="a_list f_l box_shadow">
					<div class="a_list_title clearfix">
						<div class="f_l">歌曲</div>
						<div class="f_l">歌手</div>
						<div class="f_l">专辑</div>
					</div>
					<ul>
						<li class="clearfix sing_con on">
							<div class="f_l">淘汰</div>
							<div class="f_l">陈奕迅</div>
							<div class="f_l">1997-2007跨世纪国语精选</div>
						</li>
						<li class="clearfix sing_con">
							<div class="f_l">浮夸</div>
							<div class="f_l">陈奕迅</div>
							<div class="f_l">U-87</div>
						</li>
						<li class="clearfix sing_con">
							<div class="f_l">约定</div>
							<div class="f_l">陈奕迅</div>
							<div class="f_l">Duo陈奕迅2010演唱会</div>
						</li>
						<li class="clearfix sing_con">
							<div class="f_l">突然好想你</div>
							<div class="f_l">五月天</div>
							<div class="f_l">2009D.N.A创造小巨蛋演唱会</div>
						</li>
						<li class="clearfix sing_con">
							<div class="f_l">知足</div>
							<div class="f_l">五月天</div>
							<div class="f_l">07最知足版</div>
						</li>
						<li class="clearfix sing_con">
							<div class="f_l">如烟</div>
							<div class="f_l">五月天</div>
							<div class="f_l">2008台北十万人出头天演唱会</div>
						</li>
						<li class="clearfix sing_con">
							<div class="f_l">星空</div>
							<div class="f_l">五月天</div>
							<div class="f_l">同名电影主题曲</div>
						</li>
					</ul>
				</div>
				<div class="a_gc f_r">
					<!--存放头像-->
					<div class="a_img">
						<img src="static/img/audio_chen_1.jpg" width="100%" height="100%" />
					</div>
					<!--存放歌词-->
					<div class="gc_wrap font-center">
						<!--控制歌词整体移动-->
						<div class="gc_move"></div>
					</div>
				</div>
			</div>
			<div class="a_bot ff">
				<div class="f_l b_plan1">
					<ul class="clearfix">
						<li>
							<a href="javascript:void(0);" class="plan1_pre"></a>
						</li>
						<li>
							<a href="javascript:void(0);" class="plan1_play"></a>
						</li>
						<li>
							<a href="javascript:void(0);" class="plan1_next"></a>
						</li>
					</ul>
				</div>
				<div class="f_l b_plan2">
					<div class="plan2_title">淘汰 - 陈奕迅</div>
					<div class="plan2_pro clearfix">
						<div class="plan2_timewrap f_r">
							<span class="ctime">00:00:00</span> / <span class="atime">00:00:00</span>
						</div>
						<div class="plan2_panewrap f_l pointer">
							<!--进度槽-->
							<div class="plan2_grooves relative pointer">
								<!--小圆点-->
								<a class="plan2_arr absolute" href="javascript:void(0);"></a>
								<!--进度条-->
								<div class="plan2_progress absolute"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="f_r b_plan3 clearfix">
					<div class="b_plan3_mode f_l">
						<ul class="clearfix">
							<li>
								<a href="javascript:void(0);" class="random" title="随机播放"></a>
							</li>
							<li>
								<a href="javascript:void(0);" class="loop" title="单曲循环"></a>
							</li>
							<li>
								<a href="javascript:void(0);" class="round on" title="顺序播放"></a>
							</li>
						</ul>
					</div>
					<div class="b_plan3_volwrap f_l  relative clearfix">
						<i class="volum_ico absolute pointer"></i>
						<div class="plan3_panewrap pointer">
							<!--进度槽-->
							<div class="plan3_grooves relative pointer">
								<!--小圆点-->
								<a class="plan3_arr absolute" href="javascript:void(0);"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	export default{
		data(){
			return {
			}
		},
		mounted () {
			var type ; // 记录播放模式
			var num = 0 ;
			//歌词同步
			var sum = 0 ;  //存放歌词上升幅度
			var cTime ; //存放当前时间
			var arr = ['0']; 
			var a_list =  [
				{
					'name' :'陈奕迅 - 淘汰',
					"covers" : "static/img/audio_chen_1.jpg",
					"src" : "static/audio/陈奕迅 - 淘汰.mp3",
					'lrc' :'[00:02.02]淘汰[00:04.92]演唱：陈奕迅[00:35.41]我说了 所有的谎[00:39.60]你全都相信[00:42.72]简单的 我爱你[00:46.71]你却老不信[00:50.95]你书里的剧情[00:55.07]我不想上演[00:58.63]因为我喜欢 喜剧收尾[01:07.67]我试过 完美放弃[01:12.23]的确很踏实[01:15.29]醒来了[01:17.28]梦散了[01:19.41]你我都走散了[01:22.90]情歌歌词何必押韵[01:27.02]就算我是K歌之王[01:30.95]也不见得把 爱情唱得完美[01:38.24]只能说我输了[01:42.29]也许是你怕了[01:46.35]我们的回忆 没有皱褶[01:50.91]你却用离开烫下句点[01:54.21]只能说我认了[01:58.52]你的不安赢得你信任[02:03.64]我却得到你 安慰的淘汰[02:25.35]我试过完美放弃[02:29.53]的确很踏实[02:32.59]醒来了[02:34.65]梦散了[02:36.71]你我都走散了[02:40.26]情歌歌词何必押韵[02:44.45]就算我是K歌之王[02:48.46]也不见得把 爱情唱得完美[02:55.57]只能说我输了[02:59.63]也许是你怕了[03:03.69]我们的回忆 没有皱褶[03:08.37]你却用离开烫下句点[03:11.61]只能说我认了[03:15.97]你的不安赢得你信任[03:21.03]我却得到你 安慰的淘汰[03:44.44]只能说我输了[03:48.37]也许是你怕了[03:52.49]我们的回忆 没有皱褶[03:57.10]你却用离开烫下句点[04:00.22]只能说我认了[04:04.79]你的不安赢得你信任[04:09.74]我却得到你 安慰的淘汰'
				},
				{
					'name' :'陈奕迅 - 浮夸',
					"covers" : "static/img/audio_chen_2.jpg",
					"src" : "static/audio/陈奕迅 - 浮夸.mp3",
					'lrc' : '[ti:0][ar:0][al:0][by:0][offset:0]浮夸[00:07.79]作词：黄伟文[00:09.45]作曲：C.Y. Kong[00:11.42]演唱：陈奕迅[00:28.32]有人问我我就会讲 但是无人来[00:35.40]我期待 到无奈 有话要讲[00:38.75]得不到装载[00:42.01]我的心情犹豫像樽盖 等被揭开[00:46.19]咀巴却在养青苔[00:48.85]人潮内愈文静 愈变得不受理睬[00:53.07]自己要搞出意外[00:55.68]像突然 地高歌 任何地方也像开四面台[01:03.08]着最闪的衫 扮十分感慨[01:06.75]有人来拍照要记住插袋[01:11.17]你当我是浮夸吧 夸张只因我很怕[01:18.33]似木头 似石头的话 得到注意吗[01:24.00]其实怕被忘记 至放大来演吧[01:29.29]很不安 怎去优雅[01:32.67]世上还赞颂沉默吗[01:36.24]不够爆炸 怎麽有话题[01:41.09]让我夸做大娱乐家[01:50.70]那年十八 母校舞会 站着如喽罗[01:57.75]那时候 我含泪发誓各位 必须看到我[02:04.37]在世间 平凡又普通的路太多[02:08.64]屋村你住哪一座[02:11.23]情爱中 工作中 受过的忽视太多[02:15.41]自尊已饱经跌堕 重视能治肚饿[02:21.94]末曾获得过便知我为何 大动作很多[02:27.09]犯下这些错 搏人们看看我 算病态麽[02:33.57]你当我是浮夸吧 夸张只因我很怕[02:40.73]似木头 似石头的话 得到注意吗[02:46.48]其实怕被忘记 至放大来演吧[02:51.82]很不安 怎去优雅[02:55.11]世上还赞颂沉默吗[02:58.70]不够爆炸 怎麽有话题[03:03.45]让我夸做大娱乐家[03:19.08]幸运儿并不多 若然未当过就知我为何[03:26.22]用十倍苦心 做突出一个[03:30.09]正常人够我富议论性么[03:34.49]你 叫我做浮夸吧 加几声嘘声也不怕[03:41.69]我在场 有闷场的话[03:44.98]表演你看吗 够歇斯底里 吗[03:49.45]以眼泪淋花吧 一心只想你惊讶[03:56.00]我旧时似未存在吗[03:59.49]加重注码 青筋 也现形[04:04.41]话我知 现在存在吗[04:09.87]凝视我 别再只看天花[04:17.85]我非你杯茶 也可尽情地喝吧[04:23.75]别遗忘有人在 为你 声沙'
				},
				{
					'name' :'陈奕迅 - 约定',
					"covers" : "static/img/audio_chen_3.jpg",
					"src" : "static/audio/陈奕迅 - 约定.mp3",
					'lrc' : '[00:03.34]约定[00:04.34]演唱：陈奕迅[00:16.18]还记得当天旅馆的门牌[00:22.98]还留住笑著离开的神态[00:30.33]当天整个城市 那样轻快[00:36.76]沿路一起走半哩长街[00:43.75]还记得街灯照出一脸黄[00:50.43]还燃亮那份微温的便档[00:57.46]剪影的你轮廓太好看[01:03.32]凝住眼泪才敢细看[01:13.56]忘掉天地 彷佛也想不起自己[01:20.13]仍未忘相约看漫天黄叶远飞[01:27.07]就算会与你分离 凄绝的戏[01:33.18]要决心忘记我便记不起[01:39.73]明日天地 只恐怕认不出自己[01:46.14]仍未忘跟你约定假如没有死[01:52.99]就算你壮阔胸膛 不敌天气[01:59.48]两鬓斑白都可认得你[02:34.95]还记得当天吉他的和弦[02:41.06]还明白每段旋律的伏线[02:47.72]当天街角流过你声线[02:53.50]沿路旅程如歌褪变[03:02.60]忘掉天地 彷佛也想不起自己[03:08.80]仍未忘相约看漫天黄叶远飞[03:15.38]就算会与你分离 凄绝的戏[03:21.22]要决心忘记我便记不起[03:27.45]明日天地 只恐怕认不出自己[03:33.33]仍未忘跟你约定假如没有死[03:39.84]就算你壮阔胸膛 不敌天气[03:45.95]两鬓斑白都可认得你[03:59.25]就算你壮阔胸膛 不敌天气[04:07.46]两鬓斑白都可认得你[04:16.61]'
				},
				{
					'name' :'五月天 - 突然好想你',
					"covers" : "static/img/audio_xin_1.jpg",
					"src" : "static/audio/五月天 - 突然好想你.mp3",
					'lrc' : '[ti:突然好想你(3DNA LIVE 版)][ar:五月天][al:五月天追夢3DNA-電影原聲帶][00:03.00]突然好想你(3DNA LIVE 版) -五月天[00:06.00]《五月天追夢3DNA-電影原聲帶》[00:09.00]作詞：阿信 作曲：阿信[00:13.47]最怕空氣突然安靜[00:20.19]最怕朋友突然的關心[00:26.32]最怕回憶突然翻滾絞痛著不平息[00:33.08]最怕突然聽到你的消息[00:40.84]想念如果會有聲音[00:47.55]不願那是悲傷的哭泣[00:53.45]事到如今終於讓自已屬於我自已[01:00.56]只剩眼淚還騙不過自己[01:07.71]突然好想你 你會在哪裡[01:14.60]過的快樂或委屈[01:21.34]突然好想你 突然鋒利的回憶[01:28.42]突然模糊的眼睛[01:35.68]我們像一首最美麗的歌曲[01:42.35]變成兩部悲傷的電影[01:48.56]為什麼你帶我走過最難忘的旅行[01:55.28]然後留下最痛的紀念品[02:03.60]MUSIC~~~[02:29.28]我們那麼甜那麼美那麼相信[02:34.78]那麼瘋那麼熱烈的曾經[02:39.29]為何我們還是要奔向[02:42.29]各自的幸福和遺憾中老去[02:47.32]突然好想你 你會在哪裡[02:53.98]過的快樂或委屈[03:00.60]突然好想你 突然鋒利的回憶[03:07.97]突然模糊的眼睛[03:15.29]最怕空氣突然安靜[03:21.87]最怕朋友突然的關心[03:28.04]最怕回憶突然翻滾絞痛著不平息[03:34.89]最怕突然聽到你的消息[03:41.68]最怕此生已經決心自己過[03:47.14]沒有你 卻又突然聽到你的消息'
				},
				{
					'name' :'五月天 - 知足',
					"covers" : "static/img/audio_xin_2.jpg",
					"src" : "static/audio/五月天 - 知足.mp3",
					'lrc' : '[ti:知足][ar:五月天][al:知足 最真杰作选][00:05.25]知足[00:06.84]作词：阿信 作曲：阿信[00:09.92]演唱：五月天[00:27.28]怎么去拥有 一道彩虹[00:33.57]怎么去拥抱 一夏天的风[00:39.83]天上的星星笑地上的人[00:46.16]总是不能懂不能觉得足够[00:55.70]如果我爱上 你的笑容[01:02.01]要怎么收藏 要怎么拥有[01:08.27]如果你快乐 不是为我[01:14.60]会不会放手其实才是拥有[01:20.39]当一阵风吹来风筝飞上天空[01:26.54]为了你而祈祷 而祝福而感动[01:32.32]终于你身影消失在 人海尽头[01:39.40]才发现 笑着哭 最痛[01:49.45]那天你和我 那个山丘[01:55.65]那样的唱着 那一年的歌[02:01.88]那样的回忆 那么足够[02:08.27]足够我天天都品尝着寂寞[02:38.97]当一阵风吹来风筝飞上天空[02:45.44]为了你而祈祷 而祝福而感动[02:51.21]终于你身影消失在 人海尽头[02:58.37]才发现 笑着哭 最痛[03:04.05]当一阵风吹来风筝飞上天空[03:10.62]为了你而祈祷 而祝福而感动[03:16.49]终于你身影消失在 人海尽头[03:23.60]才发现 笑着哭 最痛[03:33.80]如果我爱上 你的笑容[03:40.28]要怎么收藏 要怎么拥有[03:46.59]如果你快乐再不是为我[03:52.98]会不会放手其实才是拥有[03:59.29]知足的快乐叫我忍受心痛[04:05.67]知足的快乐叫我忍受心痛[04:17.45]'
				},
				{
					'name' :'五月天 - 如烟',
					"covers" : "static/img/audio_xin_3.jpg",
					"src" : "static/audio/五月天 - 如烟.mp3",
					'lrc' : '[ti:如烟][ar:五月天][al:314252][00:01.04]五月天 阿信[00:10.41]我坐在床前[00:12.96]望着窗外回忆满天[00:20.24]生命是华丽错觉[00:23.54]时间是贼偷走一切[00:30.82]七岁的那一年[00:33.63]抓住那只蝉[00:36.63]以为能抓住夏天[00:41.40]十七岁的那年[00:44.36]吻过他的脸[00:47.45]就以为和他能永远[00:52.31]有没有那麽一种永远[00:55.52]永远不改变[00:58.53]拥抱过的美丽[01:00.48]都再也不破碎[01:03.82]让险峻岁月不能[01:06.17]在脸上撒野[01:09.25]让生离和死别都遥远[01:13.62]有谁能听见[01:25.07]我坐在床前[01:27.57]转过头看谁在沉睡[01:34.82]那一张苍老的脸[01:38.25]好像是我紧闭双眼[01:45.51]曾经是爱我的[01:48.67]和我深爱的[01:51.50]都围绕在我身边[01:56.07]带不走的那些[01:59.06]遗憾和眷恋[02:02.15]就化成最後一滴眼泪[02:07.02]有没有那麽一滴眼泪[02:10.17]能洗掉後悔[02:13.10]化成大雨降落在[02:15.50]回不去的街[02:18.44]再给我一次机会[02:20.84]将故事改写[02:23.51]还欠了他一生的[02:26.03]一句抱歉[02:28.25]有没有那麽一个世界[02:31.49]永远不天黑[02:34.43]星星太阳万物都[02:36.80]听我的指挥[02:39.80]月亮不忙着圆缺[02:42.29]春天不走远[02:45.20]树梢紧紧拥抱着树叶[02:49.54]有谁能听见[02:55.65]耳际眼前此生重演[03:00.52]是我来自漆黑[03:03.20]而又回归漆黑[03:06.14]人间瞬间天地之间[03:11.22]下次我又是谁[03:16.16]有没有那麽一朵玫瑰[03:19.49]永远不凋谢[03:22.43]永远骄傲和完美[03:24.85]永远不妥协[03:27.81]为何人生最後会像[03:30.77]一张纸屑[03:32.97]还不如一片花瓣[03:35.40]曾经鲜艳[03:37.59]有没有那麽一张书签[03:40.72]停止那一天[03:43.99]最单纯的笑脸和[03:46.16]最美那一年[03:49.15]书包里面装满了[03:51.46]蛋糕和汽水[03:54.47]双眼只有无猜和无邪[03:58.90]让我们无法无天[04:04.21]有没有那麽一首诗篇[04:07.49]找不到句点[04:10.47]青春永远定居在[04:12.83]我们的岁月[04:15.79]男孩和女孩都有[04:18.18]吉他和舞鞋[04:21.01]笑忘人间的苦痛[04:23.54]只有甜美[04:25.66]有没有那麽一个明天[04:28.82]重头活一遍[04:31.72]让我再次感受[04:33.82]曾挥霍的昨天[04:36.99]无论生存或生活[04:39.46]我都不浪费[04:42.54]不让故事这麽的後悔[04:46.92]有谁能听见[04:52.11]我不要告别[04:58.68]我坐在床前[05:01.66]看着指尖已经如烟'
				},
				{
					'name' :'五月天 - 星空',
					"covers" : "static/img/audio_xin_4.jpg",
					"src" : "static/audio/五月天 - 星空.mp3",
					'lrc' : '[00:03.01]星空[00:06.47]词:阿信 曲:石头[00:10.29]演唱：五月天[00:14.70]摸不到的颜色 是否叫彩虹[00:20.26]看不到的拥抱 是否叫做微风[00:26.07]一个人 想着一个人 是否就叫寂寞[00:37.41]命运偷走如果 只留下结果[00:43.18]时间偷走初衷 只留下了苦衷[00:49.04]你来过 然后你走后 只留下星空[00:58.50]那一年我们望着星空[01:03.50]有那么多的灿烂的梦[01:09.91]以为快乐会永久 像不变星空 陪着我[01:22.97]猎户 天狼 织女 光年外沉默[01:28.88]回忆 青春 梦想 何时偷偷陨落[01:34.34]我爱过 然后我沉默 人海里漂流[01:44.00]那一年我们望着星空[01:49.00]未来的未来从没想过[01:55.67]当故事失去美梦 美梦失去线索[02:01.67]而我们失去联络[02:06.97]这一片无言无语星空[02:10.97]为什么静静看我泪流[02:18.10]如果你在的时候 会不会伸手 拥抱我[02:29.93]细数繁星闪烁 细数此生奔波[02:36.10]原来所有 所得 所获 不如一夜的星空[02:42.12]空气中的温柔 回忆你的笑容[02:47.53]彷佛只要伸手 就能触摸[02:56.93]摸不到的颜色 是否叫彩虹[03:02.40]看不到的拥抱 是否叫做微风[03:08.21]一个人 习惯一个人...[03:15.34]这一刻独自望着星空[03:21.34]从前的从前从没变过[03:26.47]寂寞可以是忍受 也可以是享受[03:33.47]享受仅有的拥有[03:38.10]那一年我们望着星空[03:43.10]有那么多的灿烂的梦[03:49.23]至少回忆会永久 像不变星空 陪着我[04:00.86]最后只剩下星空 像不变回忆 陪着我'
				}
			]
			//处理歌词
			$('.gc_box').html( a_list[num].lrc );
			do_song();
			//监听结束事件
			$('audio').get(0).addEventListener('ended',function(){
				reset_song();
				//找出播放模式
				$('.b_plan3_mode li').each(function(){
					if( $(this).children().hasClass('on') ){
						type = $(this).index() ;
					}
				});
				//随机播放
				if( type == 0 ){
					num = Math.floor( Math.random()*a_list.length );
				}
				//单曲循环
				if( type == 1 ){
					num = num ;
				}
				//顺序播放
				if( type == 2 ){
					num ++;
					if( num > $('.sing_con').length-1 ){
						num = 0 ;
					}
				}
		
				$('.sing_con').eq( num ).addClass('on').siblings().removeClass('on');
				change_song();
			});
			
			//歌词数据重置
			function reset_song(){
				//重置歌词位置
				$('.gc_move').css('marginTop','70px');
				//重置数组
				arr = ['0'];
				sum = 0 ;
			}
			
			function change_song(){
				//更换歌曲名字
				$('.plan2_title').html( a_list[num].name );
				//更换歌曲地址
				$('audio').attr('src',a_list[num].src);
				//播放歌曲
				$('audio').get(0).play();
				//加上延迟，避免获取不到总时间
				setTimeout(function(){
					//获取总时间并且改变文本内容
					var atime = Math.floor( $('audio').get(0).duration );
					$('.atime').html( changetime( atime ) );
				},500);
				//处理歌词
				$('.gc_box').html( a_list[num].lrc );
				do_song();
				//改变头像
				$('.a_img img').attr('src',a_list[num].covers);
			}
			
			function audio_play(){
				$('audio').get(0).play();
				//获取总时间并且改变文本内容
				var atime = Math.floor( $('audio').get(0).duration );
				$('.atime').html( changetime( atime ) );
				//改变按钮样式-暂停
				$('.plan1_play').css('background-position','-438px -273px');
				//头像旋转
				$('.a_img img').addClass('rot');
				$('.a_img img').removeClass('pause');
			}
			
			function audio_pause(){
				//改变按钮样式-播放
				$('audio').get(0).pause();
				$('.plan1_play').css('background-position','-184px -143px');
				//头像旋转
				$('.a_img img').addClass('pause');
			}
			
			//点击按钮开始播放
			$('.plan1_play').click(function(){
				if( $('audio').get(0).paused ){
					audio_play();
				}else if( !$('audio').get(0).paused ){
					audio_pause();
				}
			});
		
			//点击歌词列表开始播放
			$('.sing_con').dblclick(function(){
				num = $(this).index();
				$(this).addClass('on').siblings().removeClass('on');
				change_song();
				//改变按钮样式-暂停
				$('.plan1_play').css('background-position','-438px -273px');
				reset_song();
				//头像旋转
				$('.a_img img').addClass('rot');
				$('.a_img img').removeClass('pause');
			});
			
			//让时间以指定的形式显示
			function changetime( obj ){
				var h = toTwo( Math.floor( obj / 3600 ) );
				var m = toTwo( Math.floor( obj % 3600 / 60 ) );
				var s = toTwo( Math.floor( obj % 60 ) );
				return ( h + ':' + m + ':' + s );
			}
			
			//监听音频播放事件
			$('audio').get(0).ontimeupdate = function(){
				nowtime();
				//歌词同步
				cTime = parseInt(this.currentTime);//获取当前播放的时间
				//会出现0,0,0,0,1,1,1,1,2,2,2,2...的情况，所以要避免重复
				$('.gc_move p').each(function(){	
					if ( $(this).attr('id') == "gc"+ cTime &&  cTime !== arr[0] )
					{
						//先清空数组，再把新的数字加进去
						arr.splice(0,1);
						arr.push( cTime );
						//为了方便数据回滚，用序列号记录sum
						sum = $(this).index();
						$(this).css('color','red').siblings().css('color','#ccc');
						var move = 70-sum*22;
						$('.gc_move').animate({
							'marginTop': move
						},300);
					}
				})
			}
			
			//音频播放时，初始时间与进度条的改变
			function nowtime(){
				//改变当前时间
				$('.ctime').html( changetime( $('audio').get(0).currentTime) );
				//当前时间除以总时间，获得比例值，来改变滚动条
				var n = $('audio').get(0).currentTime / $('audio').get(0).duration;
				//移动小圆点
				$('.plan2_arr').css('left',$('.plan2_grooves').width()*n - 7);
				//移动进度条
				$('.plan2_progress').css('width',$('.plan2_grooves').width()*n );
			}
			
			//播放进度条
			function progress_move( obj ){
				//移动小圆点
				$('.plan2_arr').css('left', obj - 7 );
				//移动进度条
				$('.plan2_progress').css('width', obj );
			}
			
			//音量进度条
			function volum_move( obj ){
				//移动小圆点
				$('.plan3_arr').css('left', obj - 5 );
				//移动进度条
				$('.plan3_progress').css('width', obj );
			}
			//移动歌词进度
			$('.plan2_grooves').mousedown(function(e){
				var e = e || event ; 
				var x = e.clientX - $(this).offset().left ; 
				if( x < 0 ){
					x = 0;
				}
				if( x > $('.plan2_grooves').width() ){
					x = $('.plan2_grooves').width() ; 
				}
				progress_move( x );
				//根据进度条的百分比控制歌词播放的进度
				var prop = x / $('.plan2_grooves').width();
				$('audio').get(0).currentTime = prop*$('audio').get(0).duration;
				audio_play();
				//更新arr数组的内容
				cTime = parseInt($('audio').get(0).currentTime);//获取当前播放的时间
				arr.splice(0,1);
				arr.push( cTime );
				$(this).mousemove(function(e){
					$('audio').get(0).pause();
					var e = e || event ; 
					var x = e.clientX - $(this).offset().left ; 
					if( x < 0 ){
						x = 0;
					}
					if( x > $('.plan2_grooves').width() ){
						x = $('.plan2_grooves').width() ; 
					}
					progress_move( x );
					//根据进度条的百分比控制歌词播放的进度
					var prop = x / $('.plan2_grooves').width();
					$('audio').get(0).currentTime = prop*$('audio').get(0).duration;
					//更新arr数组的内容
					cTime = parseInt($('audio').get(0).currentTime);//获取当前播放的时间
					arr.splice(0,1);
					arr.push( cTime );
				});
				$(this).mouseup(function(e){
					$('audio').get(0).play();
					var e = e || event ; 
					var x = e.clientX - $(this).offset().left ; 
					if( x < 0 ){
						x = 0;
					}
					if( x > $('.plan2_grooves').width() ){
						x = $('.plan2_grooves').width() ; 
					}
					progress_move( x );
					//根据进度条的百分比控制歌词播放的进度
					var prop = x / $('.plan2_grooves').width();
					$('audio').get(0).currentTime = prop*$('audio').get(0).duration;
					audio_play();
					$(this).off('mousemove');
					//更新arr数组的内容
					cTime = parseInt($('audio').get(0).currentTime);//获取当前播放的时间
					arr.splice(0,1);
					arr.push( cTime );
				})
			});
			
			//点击声音图标
			$('.volum_ico').click(function(){
				if( $('audio').get(0).volume){
					$(this).css('background','url(static/img/audio_1.png)no-repeat -96px -453px');			
					$('audio').get(0).volume = 0 ;
					$('.plan3_arr').stop(true).animate({
						'left' : '-5'
					},400);
				}else{
					$(this).css('background','url(static/img/audio.png)no-repeat -240px -1077px');	
					$('audio').get(0).volume = 1 ;
					$('.plan3_arr').stop(true).animate({
						'left' : '55'
					},400);
				}
			});
			
			
			//移动声音进度条
			$('.plan3_grooves').mousedown(function(e){
				var e = e || event ; 
				var x = e.clientX - $(this).offset().left ; 
				if( x <= 0 ){
					x = 0;
					$('.volum_ico').css('background','url(static/img/audio_1.png)no-repeat -96px -453px');			
				}
				if( x >= $('.plan3_grooves').width() ){
					x = $('.plan3_grooves').width() ; 
				}else{
					$('.volum_ico').css('background','url(static/img/audio.png)no-repeat -240px -1077px');	
				}
				volum_move( x );
				//根据进度条的百分比控制音量
				var prop = x / $('.plan3_grooves').width();
				$('audio').get(0).volume = prop;
				$(this).mousemove(function(e){
					var e = e || event ; 
					var x = e.clientX - $(this).offset().left ; 
					if( x <= 0 ){
						x = 0;
						$('.volum_ico').css('background','url(static/img/audio_1.png)no-repeat -96px -453px');			
					}
					if( x >= $('.plan3_grooves').width() ){
						x = $('.plan3_grooves').width() ; 
					}else{
						$('.volum_ico').css('background','url(static/img/audio.png)no-repeat -240px -1077px');	
					}
					volum_move( x );
					//根据进度条的百分比控制音量
					var prop = x / $('.plan3_grooves').width();
					$('audio').get(0).volume = prop;
				});
				$(this).mouseup(function(e){
					var e = e || event ; 
					var x = e.clientX - $(this).offset().left ; 
					if( x <= 0 ){
						x = 0;
						$('.volum_ico').css('background','url(static/img/audio_1.png)no-repeat -96px -453px');			
					}
					if( x >= $('.plan3_grooves').width() ){
						x = $('.plan3_grooves').width() ; 
					}else{
						$('.volum_ico').css('background','url(static/img/audio.png)no-repeat -240px -1077px');	
					}
					volum_move( x );
					//根据进度条的百分比控制音量
					var prop = x / $('.plan3_grooves').width();
					$('audio').get(0).volume = prop;
					$(this).off('mousemove');	
				})
			});
			
			
			//下一首
			$('.plan1_next').click(function(){
				num++;
				num %= $('.sing_con').length ;
				$('.sing_con').eq( num ).addClass('on').siblings().removeClass('on');
				change_song();
			});
			
			//上一首
			$('.plan1_pre').click(function(){
				num--;
				if( num < 0 ){
					num = $('.sing_con').length - 1 ;
				}
				$('.sing_con').eq( num ).addClass('on').siblings().removeClass('on');
				change_song();
			});
			
			
			//处理歌词
			function do_song(){
				//先清空右侧歌词
				$('.gc_move').html('');
				var lrc_arr = $('.gc_box').html().split('[');
				//存放一句句歌词
				var html = '';
				for ( var i = 0 ; i < lrc_arr.length ; i ++) {
					//分割歌词与时间
					var arr = lrc_arr[i].split(']');
					//arr[0]是歌词时间，arr[1]是歌词内容
					var time = arr[0].split('.');
					var timer = time[0].split(':');
					var ms = timer[0]*60 + timer[1]*1;//将时间换成秒
					var text = arr[1] ; //存放歌词内容
					if( text ){
						html ="<p id=gc"+ms+">"+text+"</p>"
					}
					$('.gc_move').append( html );
				}	
			}
				
		
			//播放模式切换
			$('.b_plan3_mode a').click(function(){
				$(this).addClass('on').parent().siblings().children('a').removeClass('on');
			});			
		}
	}
</script>