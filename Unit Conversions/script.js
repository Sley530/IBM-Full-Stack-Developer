function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32;
    if (c === "") {
        document.getElementById("fahrenheit").value = "";
    } else {
        document.getElementById("fahrenheit").value = f;
    }
}

document.getElementById("celsius").addEventListener("input", temperature);
document.getElementById("fahrenheit").addEventListener("input", function(){
    var f = document.getElementById("fahrenheit").value;
    var c = (f - 32) * 5/9;
    if (f === "") {
        document.getElementById("celsius").value = "";
    } else {
        document.getElementById("celsius").value = c;
    }
});

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
