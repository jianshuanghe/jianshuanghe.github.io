$(function(){
	$("#firstpane>.title-bx>.menu_head").click(function(){
		$(this).parent().next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
		$(this).parent().siblings().removeClass("current");
	});
	$('.menu_body>a').click(function(){
		let name = JSON.parse(sessionStorage.getItem('name'));
		let title = name + '（' + $(this).html() + '）';
		$('.menu_head').html(title);
		$('.menu_body').slideUp("slow");
	});
	$('.title-bx').mouseover(function(){
		$(this).find('img').show();
		$(this).find('img').click(function(){
			let parent = $(this).parent().parent().parent().parent();
			parent.hide(); // 点击删除按钮删除组件
			parent.parent().siblings('.tz').show(); // 删除组件的同时显示可盛放区
		})
	});
	$('.title-bx').mouseleave(function(){
		$(this).find('img').hide();
	});
})