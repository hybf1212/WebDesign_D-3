$(document).ready(function(){
    let count = 0;
    setInterval(function(){
        count++
        count %= 3
        $(".slide>div").eq(count).addClass("on").siblings().removeClass("on")
    },3000)
})