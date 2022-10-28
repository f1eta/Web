var img =[rock.jpg, scissors.jpg, paper.jpg] 

var com = Math.ceil( Math.random()*3 )

var result=null;

var wincount = 0;
var drawcount = 0;
var losecount = 0;
var num=0;
var userp=0;

var computer=0;

function user(num){
    switch(num){
        case 1:
            userp=1
            console.log(user)              
            break;
        case 2:
            userp=2
            console.log(user)
            break;
        case 3:
            userp=3
            console.log(user)
            break;
    }


    compu()

    play()

}


function compu(){
    
    switch(com){
        case 1:
            computer=1
            console.log(computer)
            break;
        case 2:
            computer=2
            console.log(computer)
            break;
        case 3:
            computer=3
            console.log(computer)
            break;
    }
    
}

function play(){
    if(userp==cpmputer){
        result='draw'
        ++drawcount

    }else if(userp==1){
        if(cpmputer==2){
            result='lose'
            ++losecount
        }else if(cpmputer==3){
            result='win'
            ++wincount
        }

    }else if(userp==2){
        if(cpmputer==3){
            result='lose'
            ++losecount
        }else if(cpmputer==1){
            result='win'  //가위 바위 보 1 2 3      1<2<3<1
            ++wincount

        }
    }else if(userp==3){
        if(cpmputer==1){
            result='lose'
            ++losecount
        }else if(cpmputer==2){
            result='win'
            ++wincount
        }

    }
    console.log(result)
}