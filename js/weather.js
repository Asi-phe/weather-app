function displayUserOutput(){
    var tempereture = document.getElementById("temp").value;
//Adding a tempreture to be a variable.

//Tempreture is greater or equal to 30 degree.
    if(tempereture >=25) {
    document.getElementById("text").innerHTML = "Shorts,Caps and Bikin";
//Tempreture is 10 or greater than 10 but less or equal to 20 degress.
}   else if(tempereture >=10 && tempereture <=20){
    document.getElementById("text").innerHTML = "Wind breaker!";

//tempereture is equal/greater than -10 but less than 0.
}   else if(tempereture >=-10 && tempereture <0){
    document.getElementById("text").innerHTML = "Wear twice as warm,like be WARM!";
//Tempreture is greater than 5 but less than 12.
}   else if(tempereture >=5 && tempereture <=12){
    document.getElementById("text").innerHTML = "Wear a Jacket";
//When the input is not not the above,then the tempreture is not valid.    
}   else{
    document.getElementById("text").innerHTML ="Invalid tempreture";
}
}