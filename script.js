let msgCokies = document.getElementById('icookies-msg');

function aceitar(){
    localStorage.lgpd = "sim"
    msgCokies.classList.remove('mostrar')
}
if(localStorage.lgpd == 'sim'){
    msgCokies.classList.remove('mostrar')
}else{
    msgCokies.classList.add('mostrar')
}