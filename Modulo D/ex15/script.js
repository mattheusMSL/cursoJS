function  verificar(){

    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.getElementById("txtano");
    let  res = document.getElementById("res");

    if (fAno.value.lenght == 0 || Number(fAno.value) > ano ){

        window.alert("[ERRO] Verifique os dados e tente noavamente!");

    } else {

        let fsex = document.getElementsByName('radsex');
        let idade =  ano - Number(fAno.value); 
        // res.innerHTML = `Idade calculada: ${idade}`;
        let genero = '';
        let img = document.createElement("img");
        img.setAttribute('id', 'foto');

        if (fsex[0].checked){

            genero = "Homem";

            if (idade >= 0 && idade < 10 ){
                // criança
                img.setAttribute("src", "malekid.png");
            } else if ( idade < 28 ){
                // jovem
                img.setAttribute("src", "young.png");
            } else if (idade < 50){
                // adulto 
                img.setAttribute("src", "adultmale.png");
            } else{
                // idoso
                img.setAttribute("src", "oldmale.png");
            }

            res.style.textAlign = "center";
            img.style.paddingTop = "10px";
            res.innerHTML = `Dectectamos um ${genero} com a idade de ${idade} anos`;
            res.appendChild(img);

        } else if (fsex[1].checked){

            genero = "Mulher";
            
            if (idade >= 0 && idade < 10 ){
                // criança
                img.setAttribute("src", "femalekid.png");
            } else if ( idade < 28 ){
                // jovem
                img.setAttribute("src", "youngfemale.png");
            } else if (idade < 50){
                // adulto 
                img.setAttribute("src", "adultfemale.png");
            } else{
                // idoso
                 img.setAttribute("src", "oldfemale.png");
            }

            res.style.textAlign = "center";
            img.style.paddingTop = "10px";
            res.innerHTML = `Dectectamos uma ${genero} com a idade de ${idade} anos`;
            res.appendChild(img);
        }
            
       
    }

}