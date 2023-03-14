$(document).ready(function(){
    // Start Codes

    // Navbar
    $(window).scroll(function(){
        if( this.scrollY > 20 ){
            $(".header").css("backgroundColor","#212529");
        } else{
            $(".header").css("background","none")
        }
    });
    // active => a
    $(".header ul li a").click(function(){
        $(this).toggleClass("active-menu");
    });
    // menu
    $(".header .tools .fa-arrow-down-wide-short").click(function(){
        $(".header .menu-mob").slideDown(500);
        $(".header .tools .fa-arrow-down-wide-short").css("display","none");
        $(".header .tools .fa-arrow-up-wide-short").css("display","inline-block");
    });
    $(".header .tools .fa-arrow-up-wide-short").click(function(){
        $(".header .menu-mob").slideUp(500);
        $(".header .tools .fa-arrow-down-wide-short").css("display","inline-block");
        $(".header .tools .fa-arrow-up-wide-short").css("display","none");
    });
    $(".header .menu-mob ul li a").click(function(){
        $(".header .menu-mob").slideUp(500);
        $(".header .tools .fa-arrow-down-wide-short").css("display","inline-block");
        $(".header .tools .fa-arrow-up-wide-short").css("display","none");
    });
    // product
    $(".header .tools .fa-bag-shopping").click(function(){
    $(".buying").slideToggle(500);
    });
    if ($(".buying").hasClass(".products1")){
        console.log("Right");
    } else {
        $(".buying").html("Please , Put Something <h6>&#128525;</h6>").css({
            "color":"#f8f9fa",
            "display":"flex",
        });
        $(".buying").css("display","none");
    }
    // child1
    $(".product .product1 .text-product .icon-product .fa-bag-shopping").click(function(){
        $(".product11").slideToggle(100);
        $(".buying").html($(".product11"));
    });
    // remove => card
    $(".product11 .text-product a").click(function(e){
        e.preventDefault();
        $(".buying").slideUp(200);
        $(".product11").css("display","none")
    });
    // child2
    $(".product .product2 .text-product .icon-product .fa-bag-shopping").click(function(){
        $(".product22").slideToggle(100);
        $(".buying").html($(".product22"));
    });
    // remove => card
    $(".product22 .text-product a").click(function(e){
        e.preventDefault();
        $(".buying").slideUp(200);
        $(".product22").css("display","none")
    });
    // child3
    $(".product .product3 .text-product .icon-product .fa-bag-shopping").click(function(){
        $(".product33").slideToggle(100);
        $(".buying").html($(".product33"));
    });
    // remove => card
    $(".product33 .text-product a").click(function(e){
        e.preventDefault();
        $(".buying").slideUp(200);
        $(".product33").css("display","none")
    });
    // child4
    $(".product .product4 .text-product .icon-product .fa-bag-shopping").click(function(){
        $(".product44").slideToggle(100);
        $(".buying").html($(".product44"));
    });
    // remove => card
    $(".product44 .text-product a").click(function(e){
        e.preventDefault();
        $(".buying").slideUp(200);
        $(".product44").css("display","none")
    });
    // child5
    $(".product .product5 .text-product .icon-product .fa-bag-shopping").click(function(){
        $(".product55").slideToggle(100);
        $(".buying").html($(".product55"));
    });
    // remove => card
    $(".product55 .text-product a").click(function(e){
        e.preventDefault();
        $(".buying").slideUp(200);
        $(".product55").css("display","none")
    });
    // End Codes

});