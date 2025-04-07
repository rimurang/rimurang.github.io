$(document).ready(function(){

/* GNB */
           
 var current;

    $(".lst_gnb > .ggnb").hover(function(){
        current = $(this).index();

        $(".lst_gnb > .ggnb").each(function(i){
            if(current == i){

                //over
                $(this).find(" > a").addClass("on");
                $(this).find(".depth1").show();
                $(this).find("ul.depth1").css('border-bottom', 'solid 1px #c7c7c7'); 
                $(this).find("ul.depth1").css('border-right', 'solid 1px #c7c7c7'); 
                $(this).find("ul.depth1").css('border-top', 'solid 1px #c7c7c7'); 


            }else{
                //out
                $(this).find(" > a").removeClass("on");
                $(this).find(".depth1").hide();
            };
    });

    },  function(){

            current = $(".lst_gnb > .ggnb").length;

            $(".lst_gnb > .ggnb").each(function(i){
            if(current == i){
                //over
                $(this).find(" > a").addClass("on");
                $(this).find(".depth1").show();
            }else{
                //out
                $(this).find(" > a").removeClass("on");
                $(this).find(".depth1").hide();
            };
        });
    }); 




$('#totalView').css({display:'none'}); 

$('.btn_pctotalview').click(function(){
            if(($('#totalView').css("display")) != "none"){
                $('#totalView').css({display:'none'});


            }else{
                $('#totalView').css({display:''});

            }
        });


  
 

  /* 모바일 메뉴 */
  $('.gnbbt').click(function(){ 
    $('.gnbbt').removeClass('on'); 
    $(this).addClass('on'); 
    var submenumb = $(this).next(".twodep"); 
    if( submenumb.is(":visible") ){ 
        submenumb.slideUp(); 
        $('.gnbbt').removeClass('on'); 
    }else{ 
        $('.twodep').slideUp(); 
        submenumb.slideDown(); 
    } 
});


//Q & A 아코디언 리스트
  $('button.more-btn').click(function(){ 
    $('button.more-btn').removeClass('on'); 
    $(this).addClass('on'); 
    var submenumb = $(this).next(".bbs-list-con"); 
    if( submenumb.is(":visible") ){ 
        submenumb.slideUp(); 
        $('button.more-btn').removeClass('on'); 
    }else{ 
        $('.bbs-list-con').slideUp(); 
        submenumb.slideDown(); 
    } 
});


/* 유관사이트 */
        
function fnFamilySiteClick(){
                var dispalyAttr = $(".link_site").css('display');
                if(dispalyAttr == "none"){
                    $(".link_site").css('display', 'block');
                }else{      
                    $(".link_site").css('display', 'none');
                }
            }

            //배너
            $(function() {
                try {
                    /* 슬라이드 배너 */
                    $('#banner_zone').ScrollerSlide
                    ({
                        'target'                : '.banner_list',                           /* 슬라이드 영역 obj */
                        'display'               : 3,                                        /* 슬라이드 가능 리스트 수 */
                        'delay'                 : 1,                                        /* 딜레이 시간(초) */
                        'pause'                 : 1,                                        /* 멈춤 딜레이 시간(초) */
                        'direction'             : 'x',                                      /* 슬라이드 방향 x 좌우, y 위아래 */
                        'controlls'             :                                           /* 슬라이드 컨트롤러  */
                        {
                            'name'              : '.banner_control',                        /* 컨트롤러 영역 obj */
                            'play'              : '.btn_play',                              /* 슬라이드 시작 버튼명 */
                            'pause'             : '.btn_pause'                              /* 슬라이드 멈춤 버튼명 */
                        }
                    });
                }
                catch (e)
                {
                    $.debug(e);
                }
});



});


/* 이벤트 */
 
var bannerPlay = true;

var iBannerCnt = 0;

bannerInt = setInterval("moveBanner('R')", 3000);

function moveBanner(reqDir)
{ 

  var ListSize = $(".box_bannerZone > ul >li").length;
  var viewSize = 5;

    if(reqDir == "L")
    {
        if(iBannerCnt <= 1) iBannerCnt = ListSize;
        else
            iBannerCnt -= 1;
    }
    else
    {
        if(iBannerCnt >= ListSize) iBannerCnt = 1;
        else
            iBannerCnt += 1;
    }
    $(".box_bannerZone > ul > li").hide();
    
    var thisId = iBannerCnt - 1;

    var $thisLi = $("#banner"+thisId);
    var $thisParentUl = $thisLi.parent();
    var $thisCloneLi = $thisLi.clone();
    $thisLi.remove();
    
    if(reqDir == "L") {
        $thisParentUl.prepend($thisCloneLi);
    }else {
        $thisParentUl.append($thisCloneLi);
    }
    $thisParentUl.children("li:nth-child(1), li:nth-child(2), li:nth-child(3), li:nth-child(4), li:nth-child(5)").show();
    
    clearInterval(bannerInt);
    
    if(bannerPlay == true)
        bannerInt = setInterval("moveBanner('R')", 3000);
}

//�˸��� �̵�����
function goBannerPlay() {
    clearInterval(bannerInt);
    bannerInt = setInterval("moveBanner('R')", 3000);
    document.getElementById('bannerStart').style.display = "none";
    document.getElementById('bannerStop').style.display = "block";
    bannerPlay = true;
}

//�˸��� �̵�����
function goBannerStop() {
    clearInterval(bannerInt);
    document.getElementById('bannerStart').style.display = "block";
    document.getElementById('bannerStop').style.display = "none";
    bannerPlay = false;
}






