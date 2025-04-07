
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



//  메인 전체메뉴 및 footer 메뉴 열기 닫기

$(function(){
	$(".TotalMenu").click(function(){
		$(".open_menu").animate({"left":"0"},300);
		$("div.modal").height($(document).height());
		$("div.modal").fadeIn();
	});
	
	
	$(".close").click(function(){
		$(".open_menu").animate({"left":"-9999"},700);
		$("div.modal").height($(document).height());
		$("div.modal").css({"display":"none"});
	});	
});







 