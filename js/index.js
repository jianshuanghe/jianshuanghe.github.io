
$().ready(function(e) {
   //拖拽复制体
   $('div[id^="draggable"]').draggable({
	   helper:"clone",
	   cursor: "move"
	 });

	//释放后
   $('div[id^="target"]').droppable({
		drop:function(event,ui){
			$(this).children().remove();
			var source = ui.draggable.clone();
			console.log(source);
			let name = String(source[0].firstElementChild.innerHTML); // 克隆移动对象
			sessionStorage.setItem('name', JSON.stringify(name));

			$('.tz').hide(); // 隐藏盛放区
			if (name === '拍下日期') {
				$('.zj-RQ').show().siblings('div').hide();
			} else if (name === '商品价格') {
				$('.zj-PM').show().siblings('div').hide();
			} else if (name === '商品排名') {
				$('.zj-JG').show().siblings('div').hide();
			}
			// $(this).append(source);

		}
	});
 });