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




function modal() {
    var modal = document.getElementById("myModal");
    var butn = document.getElementById("myBtnCL");
    var butn1 = document.getElementById("myBtnCL1");
    var butn2 = document.getElementById("myBtnCL2");
    var butn3 = document.getElementById("myBtnCL3");
    var span = document.getElementsByClassName("close")[0];

    butn.onclick = function (){
        modal.style.display = "block";
    }
    butn1.onclick = function (){
        modal.style.display = "block";
    }
    butn2.onclick = function (){
        modal.style.display = "block";
    }
    butn3.onclick = function (){
        modal.style.display = "block";
    }
    span.onclick = function (){
        modal.style.display = "none";
    }
    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = "none";
        }
    }
};


