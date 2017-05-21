export default function on_Scroll(){
    window.onscroll = function(){
        if(document.documentElement.scrollTop >= $('.section1').offset().top - 80 || document.body.scrollTop  >=  $('.section1').offset().top - 80 ){
            $(".section1").animate({opacity:"1"},300).addClass("section1-anim");
            $(".ion-ios-infinite-outline").addClass("infinite");
            $(".ion-ios-stopwatch-outline").addClass("stopwatch");
            $(".ion-ios-nutrition-outline").addClass("nutrition");
            $(".ion-ios-cart-outline").addClass("cart");
            $(".sect1Text").addClass("sect1Text-anim");
            $(".sect1Text").addClass("sect1Text-anim");

        }
        if(document.documentElement.scrollTop >= $('.section2').offset().top - 140  || document.body.scrollTop  >=  $('.section2').offset().top - 140){
            $(".section2").animate({opacity:"1"},300);
            for(var i =0; i < $(".section2Img").length; ++i) {
                (function(i){
                    $(".section2Img").eq(i-1).addClass("section2Img-anim");              
                })(i);
            }    
        }
        if(document.documentElement.scrollTop >= $('.section3').offset().top - 120  || document.body.scrollTop  >= $('.section3').offset().top - 120 ){
            $(".iPhone").animate({
                opacity:"1",
                top: "120px"
            },1000);
            $(".sectDivDiv").animate({opacity:"1"},1600);
        }
        if(document.documentElement.scrollTop >= $('.section4').offset().top - 150 || document.body.scrollTop  >=  $('.section4').offset().top - 150 ){
            $(".section4").animate({marginLeft: "0"},500);
            $(".sect4Img").addClass("sect4Img-anim");
        }
        if(document.documentElement.scrollTop >= $('.section5').offset().top - 150 || document.body.scrollTop  >=  $('.section5').offset().top - 150 ){
            $(".section5").addClass("section5-anim");
        }
        if(document.documentElement.scrollTop >= 750 || document.body.scrollTop  >= 750){
            $(".nav2").css({
                zIndex:"1",
                opacity:"1"
            })
            $(".navMob2").css({
                zIndex:"1",
                opacity:"1"
            })
        }else{
            $(".nav2").css({
                zIndex:"-6",
                opacity:"0"
            })
            $(".navMob2").css({
                zIndex:"-6",
                opacity:"0"
            })
            $(".navMob2").css({height:"50px"});
            $(".show2").css({opacity:1});
            $(".close2").css({opacity:0});
        }
    }
}