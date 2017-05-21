export default function on_Click() {
    $('html, body').animate({ scrollTop: "0"});    

    $(".headerTextBtn").first().on("click",function(){
        $('html, body').animate({ scrollTop: $('.section2').offset().top  }, 1000);
    });
    $(".sect3DivNum").eq(1).on("click", function(){
        $('html, body').animate({ scrollTop: $('.section2').offset().top  - 80 }, 1000);
    });
    $(".headerTextBtn").eq(1).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section1').offset().top - 80 }, 1000);
    });
    $(".navMob li a").first().on("click",function(){
        $('html, body').animate({ scrollTop: $('.section1').offset().top - 80 }, 1000);
    });
    $(".menu li a").first().on("click",function(){
        $('html, body').animate({ scrollTop: $('.section1').offset().top  - 80  }, 1000);
    })
    $(".navMob2 li a").first().on("click",function(){
        $('html, body').animate({ scrollTop: $('.section1').offset().top - 80 }, 1000);
    });
    $(".menu2 li a").first().on("click",function(){
        $('html, body').animate({ scrollTop: $('.section1').offset().top  - 80  }, 1000);
    });
    $(".sect3DivNum").eq(2).on("click", function(){
        $('html, body').animate({ scrollTop: $('.section1').offset().top - 80 }, 1000);
    });
    $(".menu li a").eq(1).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section3').offset().top  - 120  }, 1000);
    });
    $(".menu2 li a").eq(1).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section3').offset().top  - 120  }, 1000);
    });
    $(".navMob li a").eq(1).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section3').offset().top - 120 }, 1000);
    });
    $(".navMob2 li a").eq(1).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section3').offset().top - 120 }, 1000);
    });
    $(".menu li a").eq(2).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section4').offset().top - 40 }, 1000);
    });
    $(".menu2 li a").eq(2).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section4').offset().top - 40 }, 1000);
    });
    $(".navMob li a").eq(2).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section4').offset().top - 40 }, 1000);
    });
    $(".navMob2 li a").eq(2).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section4').offset().top - 40 }, 1000);
    });
    $(".menu li a").eq(3).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section6').offset().top - 40 }, 1000);
    });
    $(".menu2 li a").eq(3).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section6').offset().top - 40 }, 1000);
    });
    $(".navMob li a").eq(3).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section6').offset().top - 40 }, 1000);
    });
    $(".navMob2 li a").eq(3).on("click",function(){
        $('html, body').animate({ scrollTop: $('.section6').offset().top - 40 }, 1000);
    });
    $(".sect3DivNum").first().on("click",function(){
        $('html, body').animate({ scrollTop: $('.section6').offset().top - 40 }, 1000);                            
    });
    $(".nav2 img").on("click",function(){
        $('html, body').animate({ scrollTop: "0"  }, 1000);
    });
    $(".navMob2 img").on("click",function(){
        $('html, body').animate({ scrollTop: "0"  }, 1000);
    });


    $(".navMob div").on("click",function(){
        $(this).toggleClass("show").promise().
        done(function() {
            if ($(this).hasClass("show")) {
                $(".navMob").animate({height:"200px"},1000);
            }else{
                $(".navMob").animate({height:"40px"},1000);
            }
        });
    })
    $(".navMob2 div").on("click",function(){
        $(this).toggleClass("show").promise().
        done(function() {
            if ($(this).hasClass("show")) {
                $(".navMob2").animate({height:"200px"},1000);
            }else{
                $(".navMob2").animate({height:"50px"},1000);
            }
        });
    })

    var $radio = $(".section7 [type='radio']");
    var $span = $(".section7 span");

    for(var i = 0; i < $radio.length; ++i){
        $radio.prop('checked', false); 
    }

    $radio.on("click", function(){
        $radio.removeAttr("data-check");
        if($(this).attr("value") == "yes"){
            $span.first().css({color : "#bd6002"});
            $span.eq(1).css({color : "#555"}, 500);
        }else if($(this).attr("value") == "no"){
            $span.eq(1).css({color : "#bd6002"}, 500);
            $span.first().css({color : "#555"}, 500);
        }
    });
}