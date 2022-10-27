var btn = document.getElementById('clicker');
var lamp = document.getElementById('lamp');

btn.onclick = function(){
    if(btn.value == 'Acender'){
        lamp.src = 'img/LampaOn1.jpg';
        btn.value = 'Apagar';
        btn.innerHTML = 'Apagar';
    }else {
        lamp.src = 'img/LampOff1.jpg'
        btn.value = 'Acender';
        btn.innerHTML = 'Acender';
    }
}