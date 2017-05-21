export default function on_Resize(){
    $(window).resize(function(){
        if(document.documentElement.scrollTop >= $('.section1').offset().top - 80 || document.body.scrollTop  >=  $('.section1').offset().top - 80 ){
            $(".section1").animate({opacity:"1"},300);
        }
        if(document.documentElement.scrollTop >= $('.section2').offset().top - 140  || document.body.scrollTop  >=  $('.section2').offset().top - 140){
            $(".section2").animate({opacity:"1"},300);
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
    });
}