$(document).ready(function(){ 
    $('.slider-img').slick({
      centerMode: true,
      centerPadding: '60px',
      prevArrow:'.fa-angle-double-left',  
      nextArrow: '.fa-angle-double-right',
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 800,
});




var myss, myop;
myss=$(".ss");
myop=$(".op");
myop.on("click",function(){
 myss.css({"transition": "2s ease-in",
  "transform": "translateX(150px)"})
  myop.css({"transition": "2s ease-in",
  "transform": "translateX(150px)"})
})

myop.on("dblclick",function(){
  myss.css({"transition": "2s ease-in",
  "transform": "translateX(0px)"})
   myop.css({"transition": "2s ease-in",
   "transform": "translateX(0px)"})
 });


 var mycol, mybody;
mybody=$("body");
mycol=$(".coll");
mybot=$('.btn');

$(".col1").on("click",function(){
  mybody.css({"backgroundColor": "red",
  "color" : "black"})
});
$(".col2").on("click",function(){
  mybody.css({"backgroundColor": "yellow",
  "color" : "black"})
});
$(".col3").on("click",function(){
  mybody.css({"backgroundColor": "green",
  "color" : "black"})
});
$(".col4").on("click",function(){
  mybody.css({"backgroundColor": "blue",
  "color" : "black"})
});
$(".col5").on("click",function(){
  mybody.css({"backgroundColor": "aqua",
  "color" : "black"})
});
$(".col6").on("click",function(){
  mybody.css({"backgroundColor": "black",
              "color" : "white",
              "textShadow" : "0px 0px 0 rgb(137, 156, 213)"              
})
});

$(".col7").on("click",function(){
  mybody.css({"backgroundColor": "white",
                "color" : "black",
                "textShadow" : "0px 0px 0 rgb(137, 156, 213)"              
})
});
})