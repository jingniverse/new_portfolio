$(document).ready(function(){

    $('.fa-bars').click(function(){
        $('nav').addClass('on')
        $('.fa-bars').addClass('off')
        $('.fa-close').removeClass('off')
    })

    $('.fa-close').click(function(){
        $('nav').removeClass('on')
        $('.fa-close').addClass('off')
        $('.fa-bars').removeClass('off')
    })
    $('nav>ul li a').click(function(){
        $('nav').removeClass('on')
        $('.fa-close').addClass('off')
        $('.fa-bars').removeClass('off')
    })

    
    $('.donga .plan').click(function(e){
        $('.plan_popup').addClass('on')
        e.preventDefault()

    })
    $('.close').click(function(){
    $('.plan_popup').removeClass('on')
    })







$('.pre_open_page span').click(function(){
    $('.left').addClass('boxani')
    $('.right').addClass('boxani2')
    $('.pre_open_page span').addClass('totop')
    $('.pre_open_page').addClass('totop2')
})


let count = 0
$(".content_wrap .next").click(function(){
    count++
    if(count>3){count=0}
    $(".pb_list").css("transform",`translateX(${(-25*count)}%)`)
    $(".page_dot>li").removeClass("on")
    $(".page_dot>li").eq(count).addClass("on")

    if(count==3){
        $(".content_wrap .next").hide()
     }else {
     $(".content_wrap .next").show()
    }
    if (count === 0) {
        $(".content_wrap .prev").hide();
    } else {
        $(".content_wrap .prev").show();
    }
})
$(".content_wrap .prev").click(function(){
    count--
    if(count<0){count=3}
    $(".pb_list").css("transform",`translateX(${(-25*count)}%)`)
    $(".page_dot>li").removeClass("on")
    $(".page_dot>li").eq(count).addClass("on")
    if(count==0){
        $(".content_wrap .prev").hide()
     }else{
     $(".content_wrap .prev").show()
    }
    if(count==3){
        $(".content_wrap .next").hide()
     }else {
     $(".content_wrap .next").show()
    }
    
})
$(document).ready(function() {
    $(".content_wrap .prev").hide(); 
});

let pcount = 0
$(".popup_wrap .next").click(function(){
    pcount++
    if(pcount>1){pcount=0}
    $(".popup_list").css("transform",`translateX(${(-50*pcount)}%)`)
    $(".popup_wrap .page_dot>li").removeClass("on")
    $(".popup_wrap .page_dot>li").eq(pcount).addClass("on")

    if(pcount==1){
        $(".popup_wrap .next").hide()
    }else {
    $(".popup_wrap .next").show()
    }
    if (pcount === 0) {
        $(".popup_wrap .prev").hide();
    } else {
        $(".popup_wrap .prev").show();     
    }
})
$(".popup_wrap .prev").click(function(){
    pcount--
    if(pcount<0){pcount=1}
    $(".popup_list").css("transform",`translateX(${(-50*pcount)}%)`)
    $(".popup_wrap .page_dot>li").removeClass("on")
    $(".popup_wrap .page_dot>li").eq(pcount).addClass("on")
    if(pcount==0){
        $(".popup_wrap .prev").hide()
     }else{
     $(".popup_wrap .prev").show()
    }
    if(pcount==1){
        $(".popup_wrap .next").hide()
     }else {
     $(".popup_wrap .next").show()
    }
    
})
$(document).ready(function() {
    $(".popup_wrap .prev").hide(); 
});

let bcount = 0
$(".banner_wrap .next").click(function(){
    bcount++
    if(bcount>1){bcount=0}
    $(".banner_list").css("transform",`translateX(${(-50*bcount)}%)`)
    $(".banner_wrap .page_dot>li").removeClass("on")
    $(".banner_wrap .page_dot>li").eq(bcount).addClass("on")

    if(bcount==1){
        $(".banner_wrap .next").hide()
     }else {
     $(".banner_wrap .next").show()
    }
    if (bcount === 0) {
        $(".banner_wrap .prev").hide();
    } else {
        $(".banner_wrap .prev").show();     
    }
})
$(".banner_wrap .prev").click(function(){
    bcount--
    if(bcount<0){bcount=1}
    $(".banner_list").css("transform",`translateX(${(-50*bcount)}%)`)
    $(".banner_wrap .page_dot>li").removeClass("on")
    $(".banner_wrap .page_dot>li").eq(bcount).addClass("on")
    if(bcount==0){
        $(".banner_wrap .prev").hide()
     }else{
     $(".banner_wrap .prev").show()
    }
    if(bcount==1){
        $(".banner_wrap .next").hide()
     }else {
     $(".banner_wrap .next").show()
    }
    
})
$(document).ready(function() {
    $(".banner_wrap .prev").hide(); 
});

$(".viewstyle>li").click(function() {
    let etc_li = $(this).index();

    $(".viewstyle>li").removeClass("on");
    $(this).addClass("on");

    $(".v_s_output>li").each(function(i) {
        if (i === etc_li) {
            $(this).addClass("on");
        } else {
            $(this).removeClass("on");
        }
    });
});

let images = [];

function preload() {
  for(let i = 0; i < preload.arguments.lenght; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments.src;
  }
}

preload(
  "./img/SVG/Asset 3.svg",
  "./img/SVG/Asset 1.svg",
  "./img/Asset 11.svg",
  "./img/my.png",
  "./img/mgame.svg",
  "./img/Naver_icon_2018.svg",
  "./img/Asset 11.svg",
  "./img/chu.svg",
  "./img/mgame.svg",
  "./img/firepop.png",
  "./img/11st.png",
  "./img/nodampop.png",
  "./img/Arsenalpop.png",
  "./img/newyear2.png",
  "./img/blackpop.png",
  "./img/newyear.png",
  "./img/gamabanner.png",
  "./img/bfbanner.png",
  "./img/christmas-banner.png",
  "./img/pepsipop.png",
  "./img/Dong-A-banner.png",
  "./img/11stmock.png",
  "./img/firemock.png",
  "./img/nodammock.png",
  "./img/arsmock.png",
  "./img/newyearmock2.png",
  "./img/blackmock.png",
  "./img/newyearmock.png",
  "./img/pepsimock.png",
  "./img/bfmock.jpg",
  "./img/christmock.png",
  "./img/dongamock.jpg",
  "./img/gamamock.png"
)

if($(window).width() < 480) {
    // window 크기가 768보다 작을때
    let pcount = 0
$(".popup_wrap .next").click(function(){
    pcount++
    if(pcount>3){pcount=0}
    $(".popup_list").css("transform",`translateX(${(-25*pcount)}%)`)
    $(".popup_wrap .page_dot>li").removeClass("on")
    $(".popup_wrap .page_dot>li").eq(pcount).addClass("on")

    if(pcount==3){
        $(".popup_wrap .next").hide()
     }else {
     $(".popup_wrap .next").show()
    }
    if (pcount === 0) {
        $(".popup_wrap .prev").hide();
    } else {
        $(".popup_wrap .prev").show();     
    }
})
$(".popup_wrap .prev").click(function(){
    pcount--
    if(pcount<0){pcount=3}
    $(".popup_list").css("transform",`translateX(${(-25*pcount)}%)`)
    $(".popup_wrap .page_dot>li").removeClass("on")
    $(".popup_wrap .page_dot>li").eq(pcount).addClass("on")
    if(pcount==0){
        $(".popup_wrap .prev").hide()
     }else{
     $(".popup_wrap .prev").show()
    }
    if(pcount==3){
        $(".popup_wrap .next").hide()
     }else {
     $(".popup_wrap .next").show()
    }
    
})
$(document).ready(function() {
    $(".popup_wrap .prev").hide(); 
});
}

})

