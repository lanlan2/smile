

$(function(){

	$('#J_login_name').focus(function(){

		$(this).css({border:"1px solid #B2D8E5"});

		$('.FC-title').html('');

	});

	$('#J_login_name').blur(function(){
			if(this.value ==''){

				$(this).css({border:"1px solid #F10180"});
				$('.FC-title').html('请输入登录名');

			}
	});

	$('#J_login_pwd').focus(function(){

		$(this).css({border:"1px solid #B2D8E5"});

		$('.FP-title').html('');

		



	});


	$('#J_login_pwd').blur(function(){

			if(this.value ==''){

				$(this).css({border:"1px solid #F10180"});

				$('.FP-title').html('请输入密码');

			}else{

			}
			

	});


	$('#J_login_pwd').keyup(function(){

		var pattern=/^[A-Z]$/;

		if(pattern.test($('#J_login_pwd').val())){
			

			$('#J_capslock_tip').css({opacity:'1'});
			
		}

	})

	$('#J_login_pwd').keydown(function(){

		$('#J_capslock_tip').css({opacity:'0'});
			
		
		
	})


})