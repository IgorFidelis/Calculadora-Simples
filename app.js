const telaIS = document.querySelector(".tela_Numero");
const btnIS = document.querySelectorAll(".btn");

// const x = 2;
// const y = 2;
// const o = "+"

// console.log(eval(`${x}${o}${y}`));

const mostratela = (numero)=>{
    if(numero === "." && telaIS.innerText.includes(".")){
        return
    }
    telaIS.innerText += numero;
}

const calcular = ()=>{
   try {
    const resultado = eval(telaIS.innerText)

    telaIS.innerText = resultado;
   } catch (e) {
        alert("[ERRO], Verifique se os caracteres estão corretos");
        telaIS.innerText = "";
   }
}

const calcFuncao = (funcao)=>{ 
    switch (funcao) {
        case "C":
            telaIS.innerText = "";
            break;
        case "DEL":
            telaIS.innerText = telaIS.innerHTML.slice(0, -1);
            break;
        case "=":
            calcular();
            break;    
        default:
            telaIS.innerText += funcao;
            break;
    }
};

btnIS.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const btnvalue = e.target.innerText;

        if(+btnvalue >= 0 || btnvalue == "."){
            mostratela(btnvalue);
        }else{
            calcFuncao(btnvalue);
        }
    });
});