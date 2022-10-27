var btn = document.getElementById('clicker');
var lamp = document.getElementById('lamp');

btn.onclick = function(){
    if(btn.value == 'Acender'){
        lamp.src = 'img/LampaOn1.jpg';
        btn.value = 'Apagar';
        btn.innerHTML = 'On';
        btn.style.background = 'green';
    }else {
        lamp.src = 'img/LampOff1.jpg'
        btn.value = 'Acender';
        btn.innerHTML = 'Off';
        btn.style.background = 'red';
    }
}