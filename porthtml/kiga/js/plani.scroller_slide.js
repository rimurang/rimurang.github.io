// 배너

(function($)
{
	$.fn.ScrollerSlide	= function (option)
	{
		var option				= option || {};																	/* 옵션 */
		var controlls			= option.controlls || {};														/* 버튼 컨트롤러 obj */
		var self				= $(this);																	/* 기본 영역 obj */
		var target				= option.target ? $(self).find(option.target) : $(this).children(':first');		/* 슬라이드 영역 obj */
		var display				= option.display ? option.display : 1;											/* 슬라이드 가능 리스트 수 */
		var delay				= option.delay ? option.delay : 1;												/* 딜레이 시간(초) */
		var pause				= option.pause ? option.pause : 1;												/* 멈춤 딜레이 시간(초) */
		var direction			= option.direction ? option.direction : 'x';									/* 슬라이드 방향 x 좌우, y 위아래 */
		delay					= delay * 1000;
		pause					= pause * 1000;

		controlls.name		    = controlls.name ? controlls.name : '.banner_control';							/* 컨트롤러 영역 obj */
		controlls.before		= controlls.before ? controlls.before : '.btn_before';						    /* 이전으로 흐르기 버튼명 */
		controlls.next			= controlls.next ? controlls.next : '.btn_next';								/* 다음으로 흐르기 버튼명 */
		controlls.play			= controlls.play ? controlls.play : '.bnt_play';								/* 슬라이드 시작 버튼명 */
		controlls.pause		    = controlls.pause ? controlls.pause : '.btn_pause';								/* 슬라이드 멈춤 버튼명 */

		var button				= $(self).find(controlls.name);													/* 버튼 obj */
		var button_before		= $(self).find(controlls.before);												/* 이전으로 흐르기 버튼 obj */
		var button_next			= $(self).find(controlls.next);													/* 다음으로 흐르기 버튼 obj */
		var button_play			= $(self).find(controlls.play);													/* 슬라이드 시작 버튼 obj */
		var button_pause		= $(self).find(controlls.pause);												/* 슬라이드 멈춤 버튼 obj */

		//var button_all		= $(self).find(controlls.all);
		//var button_close		= $(self).find(controlls.close);
/*
		var button_before		= $(self).children(controlls.name).find(controlls.befor);
		var button_next			= $(self).children(controlls.name).find(controlls.next);
		var button_play			= $(self).children(controlls.name).find(controlls.play);
		var button_pause		= $(self).children(controlls.name).find(controlls.pause);
 */

		var interval			= null;
		var animate_start_time	= 0;
		var animate_run_time	= 0;
		var is_mouse_over		= false;
		var is_focus			= false;
		var flow				= 1;
		var pass_delay			= false;
		var all_stop			= false;
		var show_all			= false;

		direction				= $.inArray(direction, ['x', 'y'])!=-1 ? direction : 'x';

		$(button_play).hide();

		if ($(target).children().size() <= display) 
		{ 
			$(button).hide();
			return; 
		}

		/*$(button_all).click(function ()
		{
			clearTimeout(interval);
			interval	= null;

			$(target).stop(true);
			$(target).css('left', '0');

			$("div.wrapper").hide().addClass('banner_open').slideDown();
			$('.banner_control span').hide();
			$('.banner_control .btn_close').show();

			all_stop	= true;
			show_all	= true;

			return false;	
		});*/
		
		/*$(button_close).click(function ()
		{
			$("div.wrapper").removeClass('banner_open');
			$('.banner_control span').show();
			$('.banner_control .btn_close').hide();

			show_all	= false;
			all_stop	= false;

			clearTimeout(interval);
			interval	= null;

			action();

			return false;	
		});*/
		
		$(button_before).click(function ()
		{
			flow			= 1;
			pass_delay		= true;

			$(target).stop(true);
			clearTimeout(interval);
			interval		= null;
			/*if (all_stop == true)
			{
				$(button_play).hide();
				$(button_pause).show();
			}
			all_stop		= false;*/
			action();

			return false;
		});

		$(button_next).click(function ()
		{
			flow			= 2;
			pass_delay		= true;

			$(target).stop(true);
			clearTimeout(interval);
			interval		= null;
			
			/*if (all_stop == true)
			{
				$(button_play).hide();
				$(button_pause).show();
			}

			all_stop		= false;*/
			
			action();
			
			return false;
		});

		$(button_play).click(function ()
		{
			show_all	= false;
			$(target).stop(true);

			clearTimeout(interval);
			interval	= null;

			action();

			$(button_pause).show();
			$(this).hide();

			all_stop	= false;

			return false;
		});

		$(button_pause).click(function ()
		{
//			$(target).stop(true);
			show_all	= true;
			all_stop	= true;
			clearTimeout(interval);
			interval	= null;
			
			$(button_play).show();
			$(this).hide();
			return false;
		});


		$(target).children().each(function (i)
		{
			$(this).find('a').on
			(
				'mouseover mouseout focusin focusout',
				function (e)
				{
					if (e.type=='mouseover')
					{
						if (all_stop == false)
						{
							is_mouse_over	= true;
							clearTimeout(interval);
							interval	= null;
							$(target).stop();
						}
					}

					if (e.type=='mouseout')
					{
						if (all_stop == false)
						{
							if (is_focus==false)
							{
								interval	= null;
								interval	= setTimeout(action, delay); 
							}
						}
					}

					if (e.type=='focusin')
					{
						if (all_stop == false)
						{
							is_focus	= true;
							clearTimeout(interval);
							interval	= null;
							$(target).stop();
						}
					}

					if (e.type=='focusout')
					{
						if (all_stop == false)
						{
							is_focus	= false;
							interval	= null;
							interval	= setTimeout(action, delay);
						}
					}
				}
			);

		});

		var action	= function ()
		{
			var move		= flow==1 ? parseInt($(target).children('li:first').width()+20, 10)*-1 : 0;
			var delay_time	= parseInt(delay, 10);

			if ((pass_delay==true || is_mouse_over==true) && animate_run_time>0)
			{
				if (delay_time-animate_run_time>0)
				{
					delay_time		= parseInt(delay, 10)-parseInt(animate_run_time, 10);
				}
	
				is_mouse_over	= false;
			}

			if (pass_delay==true)
			{
				delay_time	= 0;
				pass_delay	= false;
			}

			$(target).animate
			(
				{'left':move},
				{
					duration	: delay_time,
					complete	: function ()
					{
						if (flow==1)
						{
							$(this).css({'left':0}).append($(this).children('li:first'));
						}
						else
						{
							$(this).css({'left':parseInt($(target).children('li:last').width(), 10)*-1}).children('li:first').before($(this).children('li:last'));
						}

						animate_start_time	= 0;

						interval	= null;
						if (show_all == false)
						{
							interval	= setTimeout(action, parseInt(delay, 10)+parseInt(pause, 10));
						}
						else
						{
							clearTimeout(interval);
						}
					},
					step		: function (now, fx)
					{
						if (animate_start_time==0) { animate_start_time	= parseInt(new Date().getTime(), 10); }
						animate_run_time	= parseInt(new Date().getTime(), 10)-parseInt(animate_start_time, 10);
					}
				}
			);
		};

		interval	= null;
		interval	= setTimeout(action, delay);
	};

})(jQuery);

