

//  toggle menu with nav bar 

let toggle_menu = document.querySelector("header nav .toggle-menu") ; 
let icon = document.querySelector("header nav .toggle-menu i ") ; 
let list = document.querySelector("header nav ul ")

toggle_menu.addEventListener("click" , function () {
    list.classList.toggle("show")
}) ; 

//  end toggle nav bar 



//  owl- owl-carousel 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 3 ,
        margin :10 , 
        dots :false ,
        nav : false ,
        loop : true , 
        autoplay : true , 
        autoplayTimeout : 2000 ,
        

    });
});



//  drop down 

let list_2 = document.querySelector("header nav .list-2") ; 
let drop = document.querySelector("header nav ul .drop") ; 

drop.addEventListener("click" , function () {
    list_2.classList.toggle("d-block") ; 
}) ; 

let list_3 = document.querySelector("header nav .list-3") ; 
let drop_3 = document.querySelector("header nav ul .drop-3") ; 

drop_3.addEventListener("click"  , function () {
    list_3.classList.toggle("d-block")
})