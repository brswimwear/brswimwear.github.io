var all_items = document.querySelectorAll(".item").length
var items = document.querySelectorAll(".item")
var all_clothes = document.getElementById("text_all");
var bikini = document.getElementById("text_bikini");
var swimwear = document.getElementById("text_swimwear");
var acessories = document.getElementById("text_accessories");


// FILTER ONLY BIKINIS
var all_filter = document.getElementById("#filter-by-all");
all_filter.addEventListener('click',function(){
    
    
    for (let k=0; k < all_items; k++){
        items[k].classList.add("show-element")
    }

    all_clothes.style.fontWeight = 'bold';
    bikini.style.fontWeight = 'normal';
    swimwear.style.fontWeight = 'normal';
    acessories.style.fontWeight = 'normal';


})

// FILTER ONLY BIKINIS
var bikini_filter = document.getElementById("#filter-by-bikini");
var bikini_filt = document.querySelectorAll(".bikini-no")
bikini_filter.addEventListener('click',function(){
    
    for (let k=0; k < all_items; k++){
        items[k].classList.add("show-element")
    }



    for (let i=0; i < bikini_filt.length; i++){
        bikini_filt[i].classList.remove("show-element")
        bikini_filt[i].classList.add("hide-element")
    }

    all_clothes.style.fontWeight = 'normal';
    bikini.style.fontWeight = 'bold';
    swimwear.style.fontWeight = 'normal';
    acessories.style.fontWeight = 'normal';
})

// FILTER ONLY SWIMWEAR (fotos de banho)
var swimwear_filter = document.getElementById("#filter-by-swimwear");
var swimwear_filt = document.querySelectorAll(".swimwear-no")
swimwear_filter.addEventListener('click',function(){
    for (let k=0; k < all_items; k++){
        items[k].classList.add("show-element")
    }
    for (let i=0; i < swimwear_filt.length; i++){
        swimwear_filt[i].classList.remove("show-element")
        swimwear_filt[i].classList.add("hide-element")
    }

    all_clothes.style.fontWeight = 'normal';
    bikini.style.fontWeight = 'normal';
    swimwear.style.fontWeight = 'bold';
    acessories.style.fontWeight = 'normal';

})


// FILTER ONLY ACCESSORIES
var access_filter = document.getElementById("#filter-by-accessories");
var access_filt = document.querySelectorAll(".accessories-no")
access_filter.addEventListener('click',function(){
    for (let k=0; k < all_items; k++){
        items[k].classList.add("show-element")
    }
    for (let i=0; i < access_filt.length; i++){
        access_filt[i].classList.remove("show-element")
        access_filt[i].classList.add("hide-element")
    }

    all_clothes.style.fontWeight = 'normal';
    bikini.style.fontWeight = 'normal';
    swimwear.style.fontWeight = 'normal';
    acessories.style.fontWeight = 'bold';

})



