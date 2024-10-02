if(new Date().getHours()<18){
    document.getElementById("demo").innerHTML="GoodDay";
}else{
    document.innerHTML="GoodEvenning"
}

const hours = new Date().getHours();
// let greeting;
// if(hours < 18){
//     greeting = "GoodDay";
// }else{
//     greeting = "GoodEvenning"
// }
// document.getElementById("bemo").innerHTML=greeting;

// const time = new Date().getHours();
// if(time<10){
//     greeting = "GoodMorning";
// }
// else if(time<20){
//     greeting = "GoodDay";
// }
// else {
//     greeting = "GoodEvenning"
// }
// document.getElementById("temo").innerHTML = greeting;

$(document).ready(function(){
    $('#HTML').click(function(){
        $('#HTML').css("background-color","red")
        $('#content').text('HTML viết tắt HyperText Markup Language')
        $('#PHP,#CSS,#Jquery').css('background-color','#ccc');
    })
    $('#CSS').click(function(){
        $('#CSS').css("background-color","green")
        $('#content').text('HTML viết tắt HyperText Markup Language')
        $('#PHP,#HTML,#Jquery').css('background-color','#ccc');
    })
    $('#Jquery').click(function(){
        $('#Jquery').css("background-color","blue")
        $('#content').text('HTML viết tắt HyperText Markup Language')
        $('#PHP,#CSS,#HTML').css('background-color','#ccc');
    })
    $('#PHP').click(function(){
        $('#PHP').css("background-color","yellow")
        $('#content').text('HTML viết tắt HyperText Markup Language')
        $('#HTML,#CSS,#Jquery').css('background-color','#ccc');
    })
})

let day;
switch(new Date().getDay()){
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    
    default:
        text="Tôi không biết";
        break;    

    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;

    case 6:
        day="Saturnday";
        break;
}
document.getElementById("vemo").innerHTML="Hôm nay là thứ mấy?"+day;

let text = "";
for(let i=0;i<10;i++){
    text += "Đây là số" + i + "<br/>" 
}
document.getElementById("eemo").innerHTML = text;