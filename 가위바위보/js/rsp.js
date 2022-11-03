$(document).ready(function(){
    
    slide()
    

})

/*
function fade_init(){
    $("#slide_rsp>img").hide()
    $("#slide_rsp>img").eq(0).show()
}
*/

function slide(){
    setInterval(slideMove,500)
}

var curLeft=0
function slideMove(){
    curLeft-=200
    if(curLeft<-600){
        curLeft=0
        $("#slide_rsp>img").animate({"left":"-=200px"})
    }
}













/*
var com = Math.ceil( Math.random()*3 )
com=parseInt(com)
function compu(){
    
}


var num=0
var userp=0
function user(num){
    switch(num){
        case 1:
            userp=1
                         
            break;
        case 2:
            userp=2
            
            break;
        case 3:
            userp=3
            
            break;
    }


    compu()

    play()

}
*/

