 $(document).ready(function(){

 if(window.addEventListener) {
	window.addEventListener('load', function() {
	setTimeout(scrollTo, 0, 0, 1);
	}, false);
}
 
 
  
  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
}; 






var body = document.body;

var myWidth = document.body.clientWidth;




if (myWidth <640) {

        /* **** 탭 *** */
     
        var currentMM = 0;
        var targetMM; 
     
     
         function tabconFM(){
            if( $(".bacon > #bct_1").hasClass("on") == true ){  
                $("#tcB1Ulli1_m").css("display","block");
                $("#tcB1Ulli2_m").css("display","none");
                $("#tcB1Ulli3_m").css("display","none");
            }
            if( $(".bacon > #bct_2").hasClass("on") == true ){  
                $("#tcB1Ulli2_m").css("display","block");
                $("#tcB1Ulli1_m").css("display","none");
                $("#tcB1Ulli3_m").css("display","none");
            }
            if( $(".bacon > #bct_3").hasClass("on") == true ){  
                $("#tcB1Ulli3_m").css("display","block");
                $("#tcB1Ulli1_m").css("display","none");
                $("#tcB1Ulli2_m").css("display","none");
            }

            if( $(".bacon .bct1").hasClass("on") == true ){  
                $(".bct1").css({"backgroundImage": "url(../images/mainB_4/tabbtn1_on_m.gif)", "backgroundPosition": "0 left"});
            }else{
                $(".bct1").css({"backgroundImage": "url(../images/mainB_4/tabbtn1_off_m.gif)", "backgroundPosition": "0 left"});
            };

            if( $(".bacon .bct2").hasClass("on") == true ){  
                $(".bct2").css({"backgroundImage": "url(../images/mainB_4/tabbtn2_on_m.gif)", "backgroundPosition": "0 left"});
            }else{
                $(".bct2").css({"backgroundImage": "url(../images/mainB_4/tabbtn2_off_m.gif)", "backgroundPosition": "0 left"});
            };

            if( $(".bacon .bct3").hasClass("on") == true ){  
                $(".bct3").css({"backgroundImage": "url(../images/mainB_4/tabbtn3_on_m.gif)", "backgroundPosition": "0 left"});
            }else{
                $(".bct3").css({"backgroundImage": "url(../images/mainB_4/tabbtn3_off_m.gif)", "backgroundPosition": "0 left"});
            };
     

        };
         tabconFM();

        $(".bacon > a").click(function(){
                currentMM = $(this).index();
            // console.log($(this).index());
            wrapboxSetM();
            tabconFM();



            
        });

         function wrapboxSetM(){
            $(".bacon > a").each(function(f){
                if(f == currentMM){
                    $(this).addClass("on");
                    tabconFM();


                }else{
                    $(this).removeClass("on");
                };
            });


        };
       

        $(".vdodiv_m").css("display", "block");

        $(".vdolist .drct1 a.vltop").css({"backgroundImage": "url(../images/mainB_3/upbtn_m.png)", "backgroundRepeat": "no-repeat"});
        /*0628수정(s)*/
        $(".vdolist .drct1 a.vldown").css({"backgroundImage": "url(../images/mainB_3/downbtn_m.png)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 right","right":"0"});
        /*0628수정(e)*/
        $(".kko").css({"display": "inline-block", "zoom": "1", "*display": "inline", "_display": "inline"});

        $(".b_3inner > .fir > img").attr("src","../images/mainB_3/mainB_3tt_m.png");

            
     

        // $(".bacon .bct1").css({"backgroundImage": "url(../images/mainB_4/tabbtn1_off_m.gif)", "backgroundPosition": "0 left"});
        // $(".bacon .bct1").hasClass("on").css({"backgroundImage": "url(../images/mainB_4/tabbtn1_on_m.gif)", "backgroundPosition": "0 left"});
        // $(".bacon .bct2").css({"backgroundImage": "url(../images/mainB_4/tabbtn2_off_m.gif)", "backgroundPosition": "0 left"});
        // $(".bacon .bct2").hasClass("on").css({"backgroundImage": "url(../images/mainB_4/tabbtn2_on_m.gif)", "backgroundPosition": "0 left"});
        // $(".bacon .bct3").css({"backgroundImage": "url(../images/mainB_4/tabbtn3_off_m.gif)", "backgroundPosition": "0 left"});
        // $(".bacon .bct3").hasClass("on").css({"backgroundImage": "url(../images/mainB_4/tabbtn3_on_m.gif)", "backgroundPosition": "0 left"});

        /* 0628수정(s)*/
         $("spanL").addClass("spB");
        /* 0628수정(e)*/

}else{ 
     /* 0628수정(s)*/
     $("spanL").removeClass("spB");
   

    $(".b_3inner > .fir > img").attr("src","../images/mainB_3/mainB_3tt.png");
        $(".kko").css("display", "none");
        $(".vdolist .drct1 a.vltop").css({"backgroundImage": "url(../images/mainB_3/upbtn.png)", "backgroundRepeat": "no-repeat"});
        $(".vdolist .drct1 a.vldown").css({"backgroundImage": "url(../images/mainB_3/downbtn.png)", "backgroundRepeat": "no-repeat","backgroundPosition": "0 right","left":"0"});

 /* 0628수정(e)*/

        var currentL = 0;
        var targetL;
        var rollingL;
        
      
     
/*0701 수정 (s)*/
        //동영상
        $(".vdolist .drct1 > a").click(function(){

            if($(this).index() == 0){

    			if(currentL > 0){
    				currentL--;
    				targetL = -250 * currentL;
    				$(".vdolist .vdolist2 > ul").stop().animate({top : targetL + "px"}, 500); 
    			};
    		}else{

    			if(currentL < $(".vdolist .vdolist2 > ul > li").length - 2){
    				currentL++;
                    targetL = -250 * currentL;
    				$(".vdolist .vdolist2 > ul").stop().animate({top : targetL + "px"}, 500);			
                }	
    		};
    	});



        /* **** 탭 *** */
     
        var currentM = 0;
        var targetM;
        
        $(".bacon > a").click(function(){
            currentM = $(this).index();
            targetM = -980 * currentM;

            $(".tabcon > div > .tcB1 > .tcB1Ul").stop().animate({left : targetM + "px"}, 500);

            wrapboxSet();
     



        });

        function tabconF(){
            if( $(".bacon > #bct_1").hasClass("on") == true ){  
                $(".tcB1Ul > #tcB1Ulli1").css({"visibility ":"visible","height":"100%"});
                $(".tcB1Ul > #tcB1Ulli2").css({"visibility ":"hidden ","height":"0"});
                $(".tcB1Ul > #tcB1Ulli3").css({"visibility ":"hidden ","height":"0"});
            }

            if( $(".bacon > #bct_2").hasClass("on") == true ){  
                $(".tcB1Ul > #tcB1Ulli2").css({"visibility ":"visible","height":"100%"});
                $(".tcB1Ul > #tcB1Ulli1").css({"visibility ":"hidden ","height":"0"});
                $(".tcB1Ul > #tcB1Ulli3").css({"visibility ":"hidden ","height":"0"});
            }

            if( $(".bacon > #bct_3").hasClass("on") == true ){  
                $(".tcB1Ul > #tcB1Ulli3").css({"visibility ":"visible","height":"100%"});
                $(".tcB1Ul > #tcB1Ulli1").css({"visibility ":"hidden ","height":"0"});
                $(".tcB1Ul > #tcB1Ulli2").css({"visibility ":"hidden ","height":"0"});
            }

        };
        tabconF();

        function wrapboxSet(){
            $(".bacon > a").each(function(f){
                
                if(f == currentM){
                    
                    $(this).addClass("on"); 
                    tabconF();
                    

                }else{
                    $(this).removeClass("on");
                    tabconF();
                };
            });
        };
          wrapboxSet();

        $(".tcBdr > a").click(function(){

            if($(this).index() == 0){

                if(currentM > 0){
                    currentM--;
                    targetM = -980 * currentM;
                    $(".tabcon > div > .tcB1 > .tcB1Ul").stop().animate({left : targetM + "px"}, 500); 
                     wrapboxSet();
                };
            }else{

                if(currentM < $(".tabcon > div > .tcB1 > .tcB1Ul > li").length - 1){
                    currentM++;
                    targetM = -980 * currentM;
                    $(".tabcon > div > .tcB1 > .tcB1Ul").stop().animate({left : targetM + "px"}, 500);           
                
                     wrapboxSet();
                }   
            };
        });
/*0701 수정 (e)*/



 };

});