$(function(){
	/*注册js验证开始*/

	//手机号验证开始
	$('#J_login_name').focus(function(){

		$(this).css({border:'1px solid #B2D8E5'});

		$('.FC-title').html("手机号不能为空");
	})

	$('#J_login_name').blur(function(){

		if(this.value==''){

			$(this).css({border:"1px solid #F10180"});
				$('.FC-title').html('手机号不能为空,请输入手机号注册');
		}else{
			var pattern =/^1[34578]\d{9}$/;
			if(pattern.test(this.value)){
				$(this).css({background:"#FFE6E7",border:'1px solid #F21A8C'});
				$('.FC-title').html("");
			}else{

				$('.FC-title').html("您输入的不是手机号,请输入手机号注册");
			}
		}
	})

	//手机好验证结束
	
	//密码验证开始
	
	/*聚焦验证*/
	$('#J_login_pwd').focus(function(){

		$(this).css({border:'1px solid #B2D8E5'});

		$('.FP-title').html("密码不能为空");
	})

	/*失焦验证*/
	$('#J_login_pwd').blur(function(){

		if(this.value==''){
			$(this).css({border:"1px solid #F10180"});
			$('.FP-title').html('请输入密码');

		}else{
			var pattern = /^\w{6,}$/;

			if(pattern.test(this.value)){

				$(this).css({background:"#FFE6E7",border:'1px solid #F21A8C'});
				$('.FP-title').html("");

			}
		}

		
	})

	//密码验证结束
	
	//验证上次密码
	$('#J_login_pwd2').focus(function(){
		
		$(this).css({border:'1px solid #B2D8E5'});

		$('.FP-verifypastitle').html("请输入确认密码");

	})

	$('#J_login_pwd2').blur(function(){

		if(this.value ==''){

			$(this).css({border:"1px solid #F10180"});

			$('.FP-verifypastitle').html('请输入确认密码');
		}else{

			if(this.value == $('#J_login_pwd').val()){

				$(this).css({border:'1px solid #6C6C6C'});

				$('.FP-verifypastitle').html('密码设置成功');

			}else{

				$(this).css({border:"1px solid #F10180"});

				$('.FP-verifypastitle').html('两次输入的密码不一致,请重试!');

			}
		}
		
	})

	/*注册js验证结束*/
})