function scrollNav(){
    let cont = document.getElementsByClassName("container")
    if(document.body.scrollTop > 10){
        cont.style.padding = '15px';
        cont.style.fontSize = '10px';
        console.log("happened")
    }else{
        cont.style.padding = '20px';
        cont.style.fontSize = '20px'
    }
}

window.onscroll = function(){
    scrollNav()
}