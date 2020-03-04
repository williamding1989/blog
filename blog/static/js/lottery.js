	$(function(){

		// 弹窗close
		$('.lottery-close').click(function(){
			$(this).parents('.lottery-mask').hide();
			//关闭遮罩层设置可以抽奖
			$("#get_prize").attr('onclick','get_prize(this);');
		})

		//金银财神遮罩隐藏
		$("dd:has('.cur')").find("div.lottery-silver-mask,div.lottery-gold-mask").hide();
		//关闭遮罩层设置可以抽奖
		$("#get_prize").attr('onclick','get_prize(this);');

		//金银财神弹窗
		$(".lottery-cash-btn").on('click',function() {
			if(!$(this).hasClass('cur')){
				return false;
			}

			var type = 1;
			p_num = 5;
			_n = $(this).prev().find('i');
			_m = _n.text();
			_n.text(++_m);

			$('.lottery-unit i').each(function(i,e){
				if( i == 3){return true;}
				m = $(e).text();
				if(--m <0){m = 0;}
				$(e).text(m);
			})

			if($(this).parents('dd').hasClass('lottery-gold')){
				type = 2;
				p_num = 6;
				var num = $(".lottery-unit").parent().find('li:nth-child(5) i');
					num_t = num.text();
					if(--num_t < 0){num_t = 0;}
					num.text(num_t);
			}

			$.post('/als2017/exchange',{'type':type},function(d){},'json');
			exchange_init();
			$(".lottery-mask").show().find(".lottery-prize").addClass('prize-'+p_num).append('<a  onClick="back_prize()" class="lottery-get"></a>');
			$('.lottery-unit.active').removeClass('active').find('.mask-choose-end').remove();
			$(".lottery-top span").html("迎接成功，继续加油！");
		});

		function exchange_init(){
			//初始化
			$('.lottery-unit i').each(function(i,e){
				var _num = $(e).text();
				if(_num == 0 && i !=3){
					$('dd').find('.lottery-cash-btn').removeClass('cur');
					$(".lottery-top span").html('您有迎银财神的机会或者继续收集迎金财神！');
					return false;
				}
				if(_num == 0 && i ==3){
					$('dd:first-child').find('.lottery-cash-btn').removeClass('cur');
				}
			})
		}

	})
	
	// 迎财神抽奖
	var lottery = {
        index: 0, //当前转动到哪个位置，起点位置
        count: 0, //总共有多少个位置
        timer: 0, //setTimeout的ID，用clearTimeout清除
        speed: 20, //初始转动速度
        times: 0, //转动次数
        cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
        prize: 0, //中奖位置
		init:function(id){
			if ($(id).parents('.lottery').find(".lottery-unit").length>0) {
				$lottery = $(id).parents('.lottery');
				$units = $lottery.find(".lottery-unit");
				this.obj = $lottery;
				this.count = $units.length;
				$lottery.find(".lottery-unit-"+this.index).addClass('active');
			};
		},
		roll:function(){
			var index = this.index;
			var count = this.count;
			var lottery = this.obj;
			$(lottery).find('.lottery-unit-'+index).removeClass('active');
			index += 1;
			if(index>count-1){
				index = 0;
			}
			$(lottery).find('.lottery-unit-'+index).addClass('active');
			this.index = index;
			return false;
		},
		stop:function(index){
			this.prize = index;
			return false;
		}
	};

	function roll(obj){
		lottery.times += 1;
		lottery.roll();
		var prize_site = $(obj).attr("prize_site");
		if(lottery.times > lottery.cycle+10 && lottery.index == prize_site){
			var prize_id = $(obj).attr("prize_id");
			var prize_name = $(obj).attr("prize_name");
			// alert("前端中奖位置："+prize_site+"\n"+"中奖名称："+prize_name+"\n中奖id："+prize_id);

			// 中奖:添加一个笑脸
			$('.lottery ul li.active').find('.mask-grey').append("<div class='mask-choose-end webkit_center'></div>");
			var _n = $(".lottery ul li.active").find("i");
			_m = _n.text();
			_n.text(++_m);
			
			//中奖:根据key显示对应的弹窗
			setTimeout(function(){
				$('.lottery-mask').show().find('.lottery-prize').addClass('prize-'+ prize_site +'').find('.lottery-get').remove();
				after_init();
				clearTimeout(lottery.timer);
				lottery.prize = -1;
				lottery.times = 0;
				click = false;
			},600);
		}else{
			if(lottery.times < lottery.cycle){
				lottery.speed -= 10;
			}else if(lottery.times==lottery.cycle){
				var index = Math.random()*(lottery.count)|0;
				lottery.prize = index;
			}else{
				if(lottery.times > lottery.cycle+10 && (lottery.prize==0 && lottery.index==7) || lottery.prize==lottery.index+1){
					lottery.speed += 110;
				}else{
					lottery.speed += 20;
				}
			}
			if(lottery.speed < 40){
				lottery.speed=40;
			};
			lottery.timer = setTimeout(function(){roll(obj)},lottery.speed);
		}
		return false;
	}

	var click = false;

	function get_prize(obj){
	    //修改onclick
		$("#get_prize").attr('onclick','javascript:void(0);');
	    if (click || $(obj).hasClass('start-disable')) {
	        return false;
	    } else {
	    	$('.lottery-top span').html('您有<i>'+$(".lottery-top").data('count')+'</i>次迎财神的机会');
	    	lottery.init(obj);

	        lottery.speed = 100;
			$.post('/als2017/do_lucky_february',{},function(d){
				if(d.info=='请先登录'){
                    return $.jBox.info("请先登录",'系统提示',{
                        width:300,
                        closed:function(){
                            window.location.href = '/Access/login';
                        }
                    });
                }
                if(d.status==1){
                	lottery.init(obj);
                    $(obj).attr("prize_site", d.data);

					$('.mask-choose-end').remove();
					// 再次点抽奖重置中奖弹窗
					$('.lottery-prize').removeAttr('class').addClass('webkit_center lottery-prize');
					var _n = $(".lottery-top span i");
					if(_n.length){
						_m = _n.text();
						_n.parents('.lottery-top').data('count',--_m);
						_n.text(_m);
						if(_m <= 0 ){
							$(".lottery-top span").html('您还未达到要求迎财神哦！');
							$(".lottery-start").addClass('start-disable');
						}
					}

					roll(obj);
					click = true;
		            return false;
                }else{
                    $.jBox.info(d.info,'系统提示',{width:300});
                    window.location.reload();
                }
	        },'json');
	    }
	}

	function after_init(){
		var dd_1 = dd_2 =true;
		$(".lottery-unit i").each(function(i,e){
			var num = $(e).text();
			if(num <= 0 && i == 3){
				dd_2 = false;
			}
			if(num <= 0 && i != 3){
				dd_1 = false;
				dd_2 = false;
				return false;
			}

		})

		if(dd_1){
			$(".lottery-top span").html('您有迎银财神的机会或者继续收集迎金财神！');
		}
		if(dd_2){
			$(".lottery-top span").html('恭喜，可以迎接金财神！');
		}
		if(dd_1 && !$('.lottery-silver a').hasClass('cur')){
			$('.lottery-silver').find('.lottery-silver-mask').hide();
			$('.lottery-silver a').addClass('cur');
		}
		if(dd_2 && !$('.lottery-gold a').hasClass('cur')){
			$('.lottery-gold').find('.lottery-gold-mask').hide();
			$('.lottery-gold a').addClass('cur');
		}

	}


