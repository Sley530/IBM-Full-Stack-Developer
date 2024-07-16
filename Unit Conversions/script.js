function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}

function weight(){
    //To convert kgs to pounds
    //Weight(Pounds) = Weight(Kgs) * 2.2
    var k = document.getElementById("kgs").value;
    var p = k * 2.2;
    document.getElementById("lbs").value = p
}

function distance(){
    //To convert km to miles
    //Distance(Miles) = Distance(Km) * 0.621371
    var k = document.getElementById("km").value;
    var m = k * 0.621371;
    document.getElementById("miles").value = m
}
