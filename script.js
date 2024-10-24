

let msgCookies = document.getElementById('cookies-txt');

// Verifica se o usuário já aceitou os cookies
function verificarCookies() {
    if (localStorage.lgpd == 'sim') {
        msgCookies.classList.remove("mostrar");
    } else {
        msgCookies.classList.add("mostrar");
    }
}

// Função chamada ao aceitar os cookies
function func_Aceitar(){
    localStorage.lgpd = "sim";
    msgCookies.classList.remove("mostrar");
}

// Chama a função para verificar o estado dos cookies ao carregar a página

