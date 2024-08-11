document.addEventListener("DOMContentLoaded",function(){

const diplay=document.getElementById('coundown');

function displaymessage(message){
    diplay.innerHTML=message;
}

function result(){
    setTimeout(function(){
        displaymessage(10);
        setTimeout(function(){
            displaymessage(9);
           setTimeout(function(){
            displaymessage(8);
            setTimeout(function(){
                displaymessage(7);
                setTimeout(function(){
                    displaymessage(6);
                    setTimeout(function(){
                        setTimeout(function(){
                            displaymessage(5);
                            setTimeout(function(){
                                displaymessage(4);
                                setTimeout(function(){
                                    displaymessage(3);
                                    setTimeout(function(){
                                        displaymessage(2);
                                        setTimeout(function(){
                                            displaymessage(1);
                                            setTimeout(function(){
                                                displaymessage("Happy Independence day");
                                            },2000);
                                        },2000);
                
                                    },2000);
                                },2000);
                            },2000);
                        },2000);
                    },2000);
                },2000);
            },2000);
           },2000);
        },2000);
    },2000);
}

result();
});
