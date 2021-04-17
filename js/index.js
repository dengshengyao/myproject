$(function(){
	function checks(){
		$('.art>.artimg>div').fadeToggle(500)
		$('.labell').fadeToggle(500)
	}
	$('.col-lg-4>div').click(function(){
		location.assign('sc.html')
	})
	$('.goto').click(function(){
		location.assign('index.html')
	})
	function run(){
		key++
		if(key>1){
			key=0
		}
		$('.art>ul>li').eq(key).addClass('im-checked').siblings().removeClass()
		checks()
	}
	var key = 0
	var time = setInterval(run,2000)
	$('.art>ul>li').click(function(){
		$(this).addClass('im-checked')
		$(this).siblings().removeClass()
		checks()
	})
	$('.art').on('mouseleave',function(){
		time = setInterval(run,2000)
	})
	$('.art').on('mouseenter',function(){
		clearInterval(time)
	})
	function scmove(){
		window.scrollBy(0,-30)
	}
	var time2
	$('.uper').click(function(){
		time2=setInterval(scmove,10)
	})	
	$(window).scroll(function(){
		if($(this).scrollTop()>390){
			$('.uper').show()
		}else if($(this).scrollTop()<=0){
			$('.uper').hide()
			clearInterval(time2)
		}
	})
	$('.navs-list').click(function(){
		if($('.hidenav').css('width')=='0px'){
			$('.hidenav').css('width','100%')
		}
	})
	$('.hidenav').click(function(e){
		$('.hidenav').css('width','0%')
	})
	$('.hidenav>ul').click(function(e){
		e.stopPropagation()
		$('.hidenav').css('width','100%')
	})
	$('.navs-search').click(function(){
		$('.searcher').toggle()
	})
	$('#btn>button').eq(1).click(function(){
		$('.searcher').toggle()
	}).end().eq(0).click(function(){
		if($('#search').val()==''){
			$('.col-lg-4>div').show()
		}else{
			$('.col-lg-4>div>div>h1').contents().map(function(index,value){
				if($(value).text().indexOf($('#search').val())==-1){
					$(this).parentsUntil('.col-lg-4').eq(-1).hide()
					
				}
			})
		}
		$('.searcher').toggle()
		
	})
	$('#btn2').click(function(){
		if($('#search2').val()==''){
			$('.col-lg-4>div').show()
		}else{
			$('.col-lg-4>div>div>h1').contents().map(function(index,value){
				if($(value).text().indexOf($('#search2').val())==-1){
					$(this).parentsUntil('.col-lg-4').eq(-1).hide()
				}
			})
		}
		
	})
})