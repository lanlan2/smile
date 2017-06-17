
$(function(){



 	/*导航栏特效开始*/
	$(window).on("scroll",function(){
		
		var a=$(this).scrollTop();
		
		var b = $('#nav').offset().top;
	

		if(a>220){
			$('#nav').fadeIn('slow');
			$('#nav').css({position:'fixed',top:'0'});
		}
		if(a>168&&a<220){
			
			$('#nav').css('display','none')
		}
		if(a<128){
			$('#nav').css('display','block')
			$('#nav').css({position:'relative'});
			
		}
	});

 	/*导航栏特效结束*/


	/*放大镜特效开始*/
	$('.UL-img li').bind('click',function(){

		//获取li里面的img
		var a = $(this).html();

		//获取.MBPLI-big-img里面的img
		var b = $('.MBPLI-big-img').html();

		//设置点击时把li里面的img放入.MBPLI-big-img里面
		$('.MBPLI-big-img').html(a);

		//设置点击是把li里面的img放入#magnificationlim
		$('#magnification').html(a);


		
	})

	/*放大镜大图移入特效开始*/
	$('#masking').mousemove(function (e) {

		//显示大图
		$('#magnification').css({display:'block'});

		//获取鼠标位置
		var  X = e.pageX;
		var Y = e.pageY;					

		
		//获取鼠标移入元素的X,Y坐标
		var mouseX = X - $('#masking').offset().left;
		var mouseY = Y - $('#masking').offset().top;
		
		//判断坐标
		mouseX > 0 ? mouseX = Math.floor(mouseX) : mouseX = Math.ceil(mouseX);

		//设置大图left和top位移
		$('#magnification img').css({left:-1.6*mouseX});

		$('#magnification img').css({top:-1.6*mouseY})

		
	})
	/*放大镜大图移入特效结束*/


	/*放大镜大图移出特效开始*/
	$('#masking').mouseout(function(){

	//移出让大图隐藏
	$('#magnification').css({display:'none'});

	})
	/*放大镜大图移出特效结束*/

	/*放大镜特效结束*/


	/*详情页轮播图特效开始*/

	$('#MBPRCMB-box-btn1').bind('click',function(e){

		if(! $('.MBPRCMBB-bigbox').is(":animated") ){

			$(this).attr("disabled",false); 

			var w = $('.MBPRCMBB-bigbox>ul').width();
				// var w = $('.MBPRCMBB-bigbox').offset().left;

			var l = $('.MBPRCMBB-bigbox').position().left;

			if(l>-w*3){

				$('.MBPRCMBB-bigbox').animate({left:l-w},1000);

			}else{

				$('#MBPRCMBB-bigbox-UL1').insertAfter("#MBPRCMBB-bigbox-UL4");
				$('.MBPRCMBB-bigbox').animate({left:0},1000);

			}

		}else{

			$(this).removeAttr("disabled");
		}

	});



	

	$('#MBPRCMB-box-btn2').bind('click',function(e){

		if(! $('.MBPRCMBB-bigbox').is(":animated") ){   

			$(this).attr("disabled",false); 

			var w = $('.MBPRCMBB-bigbox>ul').width();
			// var w = $('.MBPRCMBB-bigbox').offset().left;

			var l = $('.MBPRCMBB-bigbox').position().left;

			if(l<0){

				$('.MBPRCMBB-bigbox').animate({left:l+w},1000);

			}else{
				

				$('#MBPRCMBB-bigbox-UL5').insertAfter("#MBPRCMBB-bigbox-UL1");
				$('.MBPRCMBB-bigbox').animate({left:-1635},1000);

			}

		}

		else{

		$(this).removeAttr("disabled");

		}


	});

	//卷帘式特效
	$('.MBPRCM2B-header').bind('click',function(){


		$('.MBPRCMB-box').slideToggle("slow");
	})

	//移入图片放大特效
	$('.MBPRCMBB-bigbox').find('li').find('img').bind('mouseover',function(){

		$(this).css({transform:'Scale(1.2)'});

		
	})

	//移出图片特效
	$('.MBPRCMBB-bigbox').find('li').find('img').bind('mouseout',function(){

		$(this).css({transform:'none'});

		
	})

	/*详情页轮播图特效j结束*/


})