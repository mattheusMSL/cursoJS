 function carregar(){
    var msg = document.getElementById("msg");
    var foto = document.getElementById("imagem");
    var data = Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

 }