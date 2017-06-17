

	//轮播图js特效开始
	$(function(){

			// 设置定时器 
			var timer = null;
			// 图片关联的属性
			var sta = 0;

			timer = setInterval(move,3000);
			
			function move(){

				sta = ++sta > 2 ? 0 : sta;

				// 遍历li
				$('#box img').css('display','none');

				$('#UL li').css({borderBottom:'none'})

				$('#UL li').eq(sta).css({borderBottom:'3px solid #F10180'})

				$('#box img').eq(sta).fadeIn(1000);

				// console.log($('#UL li').eq(sta).index());

			};

			$('#UL li').hover(function() {

				clearInterval(timer);

				//图片初始化
				$('#box img').css('display','none');
				

				// $(this).index()  // 获取当前的下标
				var eq = $(this).index();

				sta = eq;

				//li的下边框初始化
				$('#UL li').css({borderBottom:'none'})

				//hoverli下边框加样式
				$('#UL li').eq(eq).css({borderBottom:'3px solid #F10180'})
				

				$('#box img').eq(eq).css({display:'block'});

			}, function() {
				timer = setInterval(move,3000);

			});

			
			

			$("#box").bind({

			  mouseover:function(){	

			  	$(".btn-left").stop(true).animate({left: '0px'},300);

			  	$(".btn-right").stop(true).animate({right: '0px'},300);
			  },  
			  mouseout:function(){

			  	$(".btn-left").stop(true).animate({left: '-33px'},300);

			  	$(".btn-right").stop(true).animate({right: '-33px'},300);
			  } 
			});

			$('.btn-left').bind('click',function(){

				if(! $('#box img').is(":animated") ){

					clearInterval(timer);

					$(this).attr("disabled",false); 

					$('#box img').css('display','none');

					$('#UL li').css({borderBottom:'none'})
					
					var a = $('#box img').eq(sta).index();


					if(a==0){

						a +=2;
					}else{
						a-=1;
					}
					

					$('#UL li').eq(a).css({borderBottom:'3px solid #F10180'})

					$('#box img').eq(a).fadeIn(1000);

					timer = setInterval(move,6000);

					sta = a;


				}else{
					
					$(this).removeAttr("disabled");

				}	

				

			});

			$('.btn-right').bind('click',function(){


				if(! $('#box img').is(":animated") ){

					clearInterval(timer);

					$(this).attr("disabled",false); 

					$('#box img').css('display','none');
					$('#UL li').css({borderBottom:'none'})
					
					var a = $('#box img').eq(sta).index();


					if(a==2){

						a -=2;
					}else{
						a+=1;
					}
					
					$('#UL li').eq(a).css({borderBottom:'3px solid #F10180'})

					$('#box img').eq(a).fadeIn(1000);
					sta = a;

				

					timer = setInterval(move,6000);


				}else{
					

					$(this).removeAttr("disabled");
				}

				
				

			});

			//给轮播图添加移入悬停事件

			$('#box img').bind('mouseover',function(){

					clearInterval(timer);

				})

				//给轮播图添加移出事件
			$('#box img').bind('mouseout',function(){

					timer = setInterval(move,6000);

				})

			/*轮播图特效结束*/


		
		 
		    

		    /*main图片设置透明遮罩特效开始*/
		    
		    $('.img').find('img').bind('mouseover',function() {

			    	//判断浏览器屏幕宽度
			    	if($(window).width()>1600){

			    	$(this).animate({opacity:'0.5'}, 600 );
			    	$(this).animate({opacity:'1'},800);
			    	$(this).before(" <button class='btn'><i class=\"font\">&#xe60d;</i><i class=\"title\">收藏品牌</i></button> ")

			    	}else{

			    		$(this).animate({opacity:'0.5'}, 600 );
			    		$(this).animate({opacity:'1'},800);
			    	}
		    	

		    });

		      $('.img').find('img').bind('mouseout',function() {



		      		//判断浏览器屏幕宽度
			      if($(window).width()>1600){

			      	$(this).animate({opacity:'1'},600);

			    	$('button').remove(".btn")

			      }else{

			      	$(this).animate({opacity:'1'},600);
			      }

		    	

		    	
		    });
		       $('.img').find('img').bind('click',function(){
		      	window.location.href="particulars.html";
		      });
		      $('.CB-div').bind('mouseover',function(){

		      	 if($(window).width()>1500){

		      	 	$(this).find('.CBD-dis').stop(true).animate({opacity:'1'},800);

		      	 	// $(".CBDD-bottom").empty();


		      	 	// if($(".CBDD-bottom").hasClass('hidden')){

		      	 	// 	$(".CBDD-bottom").removeClass('hidden');
		      	 	// 	$('.CBDD-top').css({height:'70%',display:'flex'});
					$('.CBDD-top').css({'border-bottom': '1px dotted #333'});
		      	 	$(".CBDD-bottom").css('display','block');

		      	 	// }

		      	 	// $('.CBDD-top').css({height:'100%',display:'flex'});

		      	 	// $('.CBDD-top').find('a').css({height:'70%',margin:'auto'});

		      	 }else{

		      	 	$(this).find('.CBD-dis').stop(true).animate({opacity:'1'},800);


		      	 	// $(".CBDD-bottom").empty();

		      	 	// $('.CBDD-top').css({height:'100%',display:'flex'});

		      	 	// $('.CBDD-top').find('a').css({height:'70%',margin:'auto'});
		      	 	$('.CBDD-top').css({border:'none'});
		      	 	$(".CBDD-bottom").css('display','none');

		      	 }

		      })

		        $('.CB-div').bind('mouseout',function(){
 
		        	$(this).find('.CBD-dis').stop(true).animate({opacity:'0'},800);

		        });

		        /*main图片设置透明遮罩特效结束*/




		        /*导航栏特效开始*/
				$(window).on("scroll",function(){



					var a=$(this).scrollTop();
					
					var b = $('#nav').offset().top;
					// console.log(b)


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


				 /*左侧边菜单栏特效开始*/


					
			


				/*左侧边菜单栏特效开始*/

					

				
				$(window).on('scroll',function(){

				 	//获取浏览器滚动条top
				 	var a=$(this).scrollTop();
				 	// console.log(a);
				 		
				 	// 整个内容大盒子的offset().top
				 	var b = $('.classify-box').offset().top;
				 	// console.log(b)

				 	// //设置菜单栏top值
				 	

				 	if(a > b){
				 		$('#left-fix').css({position:'fixed',top:'200px'})
				 	}else{
				 		$('#left-fix').css({top:'20px',position:'relative'});

				 	}
				 	
				 	// $('#left-fix').css({top:b})
				 	// console.log(c)
				 	// // 
				 	// // console.log($('#left-fix').offset())

				 	// 一个a的高度加上每个盒子15个像素的padding值
				 	var aa = $('.menu-box a').height() + 15;


				 	var lf = $('#left-fix').offset().top;
				 	// console.log(lf)


				 	// 第一个精选高度
				 	var c = $('.choiceness').offset().top;
				 	// console.log(c)
				 	var c1 = $('.choiceness').height();
				 	// console.log(c1)
				 	// console.log($('.choiceness').offset());


				 	// 第二个女装高度
				 	var d = $('.frock').offset().top;
				 	var d1 = $('.frock').height();
				 	// console.log($('.frock').offset());
				 	// console.log(d-a)


				 	// 第三个鞋包高度
				 	var e = $('.Shoes').offset().top;
				 	var e1 = $('.Shoes').height();
				 	// console.log(e);

				 	// 男士区 
				 	var f = $('.man').offset().top;
				 	var f1 = $('.man').height();

				 	// 运动区
				 	var g = $('.exercise').offset().top;
				 	var g1 = $('.exercise').height();

				 	// 饰品区
				 	var h = $('.decorations').offset().top;
				 	var h1 = $('.decorations').height();

				 	// 美妆区
				 	var i = $('.makeup').offset().top;
				 	var i1 = $('.makeup').height();

				 	
				 	// 母婴区
				 	var j = $('.infant').offset().top;
				 	var j1 = $('.infant').height();

				 	// 居家区
				 	var k = $('.living').offset().top;
				 	var k1 = $('.living').height();


				 	// 国际区
				 	var l = $('.international').offset().top;
				 	var l1 = $('.international').height();

				 	
				 	// 生活区
				 	var m = $('.life').offset().top;
				 	var m1 = $('.life').height();

				 	// 预告区
				 	var n = $('.classify-over').offset().top;
				 	// var m1 = $('.life').height();









				 	// //判断滚动条top
				 	// if(a>800){

				 	// 	//菜单栏到达浏览器top时设置为固定定位
				 	// 	var d =$('.classify-box').offset().top - 500;

				 	// 	$('#left-fix').css({position:'fixed',top:d})

				 	// }

				 	// //判断(往上滑时当a符合条件时重新设置菜单栏的定位)
				 	
				 	// if(a<=800){

				 	// 	$('#left-fix').css({position:'relative',top:b});
				 	// }

				 	// var ss = $('.clearfix').offset();
				 	// var ss = 
				 	// console.log(ss);



				 	// $('.classify-box').


				 	
				 	// 判断精选
				 	if(a < d){
				 		$('#index-f1').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});
				 	}

				 	//判断女装
				 	if(lf >= c + c1 && lf < d + d1){

				 		// $('#index-f1').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 		$('#index-f2').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});
				 		

				 	}
				 	// if(a>1800&a<2900){

				 		

				 	// 	$('#index-f2').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	// }

				 	// //判断鞋包
				 	if(lf + aa >= d + d1 && lf + aa < e + e1){

				 		
				 		$('#index-f3').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	}
				 	

				 	//判断男士区
				 	
				 	if(lf + aa*2 >= e + e1 && lf + aa*2 < f + f1){

				 		
				 		$('#index-f4').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	}
				 


				 		//判断运动区
				 	
				 	if(lf + aa*3 >= f + f1 && lf + aa*3 < g + g1){


				 		$('#index-f5').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	}


				 	//判断饰品区
				 	
				 	if(lf + aa*4 >= g + g1 && lf + aa*4 < h + h1){


				 		$('#index-f6').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	}
				 

				 	//判断美妆区
				 	
				 	if(lf + aa*5 >= h + h1 && lf + aa*5 < i + i1){


				 		$('#index-f7').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	}
				 

				 	//判断母婴区
				 	
				 	if(lf + aa*6 >= i + i1 && lf + aa*6 < j + j1){


				 		$('#index-f8').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	}
				 	

				 	//判断居家区
				 	
				 	if(lf + aa*7 >= j + j1 && lf + aa*7 < k + k1){

				 		$('#index-f9').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	}
				 

				 	//判断国际区
				 	
				 	if(lf + aa*8 >= k + k1 && lf + aa*8 < l + l1){


				 		$('#index-f10').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	}
				 	

				 	//判断生活区
				 	
				 	if(lf + aa*9 >= l + l1 && lf + aa*9 < m + m1){


				 		$('#index-f11').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});

				 	}

				 	if(lf + aa*10 >= m + m1 ){
				 		$('#index-f12').css({background:'#F10180',color:'#fff'}).siblings().css({background:'#fff',color:'#666'});
				 	}
				 	
				});


				//添加点击事件
				$('.menu-box>a').click(function(){

					$('.menu-box>a').css({background:'#fff',color:'#666'});

					$(this).css({background:'#F10180',color:'#fff'});
					
				});

				//添加移入事件
				$('.menu-box').find('a').bind('mouseenter',function(){

					console.log($(this).css('background') );

					if($(this).css('background') == 'rgb(241, 1, 128) none repeat scroll 0% 0% / auto padding-box border-box'){

						
						$(this).css({color:'#fff'});

					}else{

						$(this).css({color:'#F10180'});

					}



				})

				//添加移出事件
				$('.menu-box').find('a').bind('mouseleave',function(){

					if($(this).css('background') == 'rgb(241, 1, 128) none repeat scroll 0% 0% / auto padding-box border-box'){
						
						$(this).css({color:'#fff'});

					}else{

						$(this).css({color:'#666'});

					}
					

				})
				
				



		     
		    
	});



	

		


	
	

