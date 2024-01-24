function vermais() {
    let more = document.getElementById("more");
    let vermais = document.getElementById("vermais-btn");

    if(more.style.display === "none" || more.style.display === ""){
        more.style.display="flex";
        vermais.innerHTML="Ver menos";
    } else {
        more.style.display="none";
        vermais.innerHTML="Ver mais";
    }
}