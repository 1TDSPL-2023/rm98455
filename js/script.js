const h2Element = document.getElementById("titulo");
h2Element.addEventListener("click",  ()=> {
    //MATH FUNCTION
    //Os métodos floor, round e ceil arredondam os numeros passados
    //O método randon retorna um número entre 0 e 1. Ex: 0.5842
    let r = "";
    let g = "";
    let b = "";

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    console.log(r);

    h2Element.textContent = "NOVO TÍTULO";
    //h2Element.setAttribute("style","color: rgb("+r+","+g+","+b+");");
    h2Element.setAttribute("style",`color: rgb(${r},${g},${b});`);
    
});
