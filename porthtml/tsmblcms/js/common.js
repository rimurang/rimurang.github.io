$(document).ready(function(){


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

                    $('.twodep > li > a').click(function(){ 

                         $('.twodep > li > a').removeClass('on'); 
                        $(this).addClass('on'); 
                        var submenumb2 = $(this).next(".threedepth"); 
                        if( submenumb2.is(":visible") ){ 
                            submenumb2.slideUp(); 
                            $('.twodep > li > a').removeClass('on'); 
                
                        }else{ 
                            $('.threedepth').slideUp(); 
                            submenumb2.slideDown();

                        } 
                    });
  


});








