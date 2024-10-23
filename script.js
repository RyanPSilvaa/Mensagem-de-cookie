let msgCokies = document.getElementById('cookies-txt');

function aceitar(){
    localStorage.lgpd = "sim"
    msgCokies.classList.remove('mostrar')
}
if (localStorage.lgpd == "sim"){
    msgCokies.classList.remove('mostrar')
} else {
    msgCokies.classList.add('mostrar')
}