$(document).ready(function(){

	/* **** 메인배너 *** */
	$('.bxslider').bxSlider({
		mode:'horizontal', //default : 'horizontal', options: 'horizontal', 'vertical', 'fade'
		speed:500, //default:500 이미지변환 속도
		auto: true, //default:false 자동 시작
		captions: true, // 이미지의 title 속성이 노출된다.
		autoControls: false, //default:false 정지,시작 콘트롤 노출, css 수정이 필요
		infiniteLoop: true,  
		adaptiveHeight: true,
		pager: false,
		autoHover: false,
		controls:true
	});


/*GNB 0530 수정
	 **** GNB ***   
	$("nav").hover(function(){
		$(".gnb_depth").css("display","block");  
	},  function(){
		$(".gnb_depth").css("display","none");  
	});*/

	/*GNB 0617 수정(s)*/


	 
	var current;

	$(".gnb > .gnbbg").hover(function(){
		current = $(this).index();

		$(".gnb > .gnbbg").each(function(i){
			if(current == i){
	
				//over
				$(this).find(" > a").addClass("on");
				$(this).find(".gnb_depth").show(); 
			}else{
				//out
				$(this).find(" > a").removeClass("on");
				$(this).find(".gnb_depth").hide(); 
			};
	});
	
	},  function(){
		
			current = $(".gnb > .gnbbg").length;

			$(".gnb > .gnbbg").each(function(i){
			if(current == i){
				//over
				$(this).find(" > a").addClass("on");
				$(this).find(".gnb_depth").show(); 
			}else{
				//out
				$(this).find(" > a").removeClass("on");
				$(this).find(".gnb_depth").hide(); 
			};
		});
	});
 

/*GNB 0617 수정(e)*/
	
	
  /* **** Q&A *** */

        $(".menu>a").click(function(){
            var submenu = $(this).next("div");
 
            if( submenu.is(":visible") ){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }
        });

	/* **** 렌탈 롤링 *** */
	    $('#bxs2').bxSlider({
			mode: 'horizontal',
			minSlides: 3,
			maxSlides: 3,
			slideWidth: 239,
			slideMargin: 25,
			autoControls: false,
			pager: true,
			controls:false

		});



	    /* **** 프로그램 롤링 *** */ 
	    
	    var currentL = 0; 
	    var targetL; 
	     
	    $(".itemList .wrapBox > ul > li").click(function(){ 
	        currentL = $(this).index(); 
	         
	      /*  imageSet(); 
	        wrapboxSet();*/ 
	    }); 
	/* 
	    function imageSet(){ 
	        $(".itemViewLeft .itemBig > div").each(function(i){ 
	            if( i == currentL){ 
	                $(this).show(); 
	            }else{ 
	                $(this).hide();  
	            }; 
	        }); 
	    }; 

	    function wrapboxSet(){ 
	        $(".itemList .wrapBox > ul > li").each(function(i){ 
	            if(i == currentL){ 
	                $(this).addClass("on"); 
	            }else{ 
	                $(this).removeClass("on"); 
	            }; 
	        }); 
	    }; 
	 */    
	    $(".itemList .btnBox > a").click(function(){ 
	        // console.log($(this).index()); 
	        if($(this).index() == 0){ 
	   if(currentL > 0){ 
	    currentL--; 
	    targetL = -402 * currentL; 
	    $(".itemList .wrapBox > ul").stop().animate({top : targetL + "px"}, 500);  
	   }; 
	  }else{ 
	   if(currentL < $(".itemList .wrapBox > ul > li").length - 4){ 
	    currentL++; 
	                targetL = -402 * currentL; 
	    $(".itemList .wrapBox > ul").stop().animate({top : targetL + "px"}, 500);    
	            }  
	  }; 
	 });




	/* **** 장비공간 대여  롤링 *** */
 
	var currentN = 0;
	var targetM;
		

	$(".brandList .btnBox > a").click(function(){
		if($(this).index() == 0){
			if(currentN > 0){
				currentN--;
				targetM = -865 * currentN;
				
				$(".brandList .wrapBox > ul").stop().animate({
					left : targetM + "px",  
				}, 500);
				 
        
			};
		}else{
			if(currentN < $(".brandList .wrapBox > ul > li").length - 1){
				currentN++;
				targetM = -865 * currentN;
				
				$(".brandList .wrapBox > ul").stop().animate({left : targetM + "px"}, 500, function(){
					if(currentN == $(".brandList .wrapBox > ul > li").length - 1){
						currentN = 0;

						$(".brandList .wrapBox > ul").css("left", 0);
					};
					dotSet();
				});
			};
		};
		
	});
	
	$(".dotBox > ul > li").click(function(){
		currentN = $(this).index();
		targetM = -865 * currentN;

		$(".brandList .wrapBox > ul").stop().animate({left : targetM + "px"}, 500);
		//$(".brandList .wrapBox > ul > li").fadeOut(5000);
		dotSet();

	}); 

	function next(){
		if(currentN < $(".brandList .wrapBox > ul > li").length - 1){
			currentN++;
		}else{
			currentN = 0;
		};
		targetM = -865 * currentN;
		
		$(".brandList .wrapBox > ul").stop().animate({left : targetM + "px"}, 500, function(){
			if(currentN == $(".brandList .wrapBox > ul > li").length - 1){
				currentN = 0;

				$(".brandList .wrapBox > ul").css("left", 0);
			};
			dotSet();
		});

	};




	/* **** 마이페이지 세부메뉴 *** */

	  $(".pathSub a").mouseover(function(){
		   $(".pathS").show();
		   $(".pathS ul").show();
	  });

	  $(".pathS ul").mouseover(function(){
			$(".pathS ul").show();
	  });  
	  
	  $(".pathSub").mouseleave(function(){
			$(".pathS").hide();
			$(".pathS ul").hide();
	  }); 

	  $(".pathSub").mouseleave(function(){
			$(".pathS ul").hide();
	  });
	



  	/* **** 서브편성표 *** */

        $(".menu3>a").click(function(){
            var submenu = $(this).next("div");
 
            if( submenu.is(":visible") ){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }

        });









 /* 버튼롤링*/
  
	var currentMM = 0;
	var targetMM;
		
	
	$(".mbnod1 > li").click(function(){
		currentMM = $(this).index();
		targetMM = -375 * currentMM;

		$(".brandListM .wrapBoxM > ul").stop().animate({left : targetMM + "px"}, 500);
		//$(".brandList .wrapBox > ul > li").fadeOut(5000);
		dotSetM();

	});

	function dotSetM(){
		$(".mbnod1 > li").each(function(l){
			if(l == currentMM){
				$(this).addClass("on");
			}else{
				$(this).removeClass("on");
			};
		});
	};

	dotSetM();




	var currentMM2 = 0;
	var targetMM2;
		
	
	$(".mbnod2 > li").click(function(){
		currentMM2 = $(this).index();
		targetMM2 = -375 * currentMM2;

		$(".brandListM2 .wrapBoxM2 > ul").stop().animate({left : targetMM2 + "px"}, 500);
		//$(".brandList .wrapBox > ul > li").fadeOut(5000);
		dotSetM2();

	});

	function dotSetM2(){
		$(".mbnod2 > li").each(function(r){
			if(r == currentMM2){
				$(this).addClass("on");
			}else{
				$(this).removeClass("on");
			};
		});
	};

	dotSetM2();
	
	var currentMM3 = 0;
	var targetMM3;
	
	
	$(".mbnod3 > li").click(function(){
		currentMM3 = $(this).index();
		targetMM3 = -375 * currentMM3;
		
		$(".brandListM3 .wrapBoxM3 > ul").stop().animate({left : targetMM3 + "px"}, 500);
		//$(".brandList .wrapBox > ul > li").fadeOut(5000);
		dotSetM3();
		
	});
	
	function dotSetM3(){
		$(".mbnod3 > li").each(function(r){
			if(r == currentMM3){
				$(this).addClass("on");
			}else{
				$(this).removeClass("on");
			};
		});
	};
	
	dotSetM3();
	
	

}); 