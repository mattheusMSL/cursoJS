function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 5 && hora <= 12){
        //bom dia
        img.src = 'morning.png';
        document.body.style.background = "#a8612b";
    } else if (hora >= 12 && hora <= 18){
        // boa tarde
        img.src = "afternoon.png";
        document.body.style.background = "#3d5265";
    } else {
        // boa noite
        img.src = "night.png";
        document.body.style.background = "#334a52";
    }
}
