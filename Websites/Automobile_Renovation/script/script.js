document.addEventListener('DOMContentLoaded', function(){
    var wrapper = document.getElementById('wrapper');
    var topLayer = wrapper.querySelector('.top');
    var handle = wrapper.querySelector('.handle');
    var skew = 0;
    var dalta = 0;
    
    if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
}


wrapper.addEventListener('mousemove', function(e){
    console.log(e.clientX);
    delta = (e.clientX - window.innerWidth/2)*0.5 ;
    
    handle.style.left = e.clientX + delta + 'px';
    topLayer.style.width = e.clientX + skew + delta + 'px';
    
})
    
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

