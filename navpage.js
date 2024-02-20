function changeContent(param1,param2) {
    document.getElementById(param2).style.backgroundColor="blue";
    document.getElementById('content').innerHTML= document.getElementById(param1).innerHTML;
    
}
