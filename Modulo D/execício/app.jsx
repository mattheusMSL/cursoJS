function nacionalidade(){
    var nas = document.getElementById("txtnac");
    var ans = document.querySelector("div.ans");
    var res = nas.value;

    if( res == "Brasil" || res == "brasil"){
        ans.innerHTML = `Your country is <strong>${res}</strong> and your <strong>Brazilian!!!</strong> `;
    }else{
        ans.innerHTML = `Your country is <strong>${res}</strong> and your <strong>foreigner!</strong> `;
    }
  
}
