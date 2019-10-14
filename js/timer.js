function countdown(){
    var now = new Date();
    var eventDate = new Date(2020, 2, 28);

    var currentTime = now.getTime();
    var evenTime = eventDate.getTime();

    
    var remTime = evenTime - currentTime;

    var s = Math.floor( remTime / 1000);
    var m = Math.floor( s / 60);
    var h = Math.floor( m / 60);
    var d = Math.floor( h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = ( h < 10) ? "0" + h : h;
    m = ( m < 10) ? "0" + m : m;
    s = ( s < 10) ? "0" + s : s;

    var k = 10
    //document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    console.log("Ghbdtn");
    setTimeout(countdown, 1000);


}