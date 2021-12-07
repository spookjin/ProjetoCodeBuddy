let enviar = {
    reclamacao:'',
    Email:'',
    aniversario:'',
    numero:'', 
    }
        function preencherObjeto(){
            enviar.Email = document.getElementById("Email").value;
            enviar.numero = document.getElementById("numero").value;
            enviar.reclamacao = document.getElementById("reclamacao").value;
            enviar.aniversario = document.getElementById("aniversario").value;
    
                }
                if (Email.value == "") {
                    let input=document.getElementById("Email");
                    input.style.backgroundColor = "red";
                    input.style.pointerEvents.backgroundColor = ""
                    // alert("*Email não informado");
                    Email.focus();
                    return;
                }
    
                if (numero.value == "") {
                    let input=document.getElementById("numero");
                    input.style.backgroundColor = "red";
                    // alert("*numero não informado");
                    // numero.focus();
                    return;
                }
    
                if (reclamacao.value == "") {
                    let input=document.getElementById("reclamacao");
                    input.style.backgroundColor = "red";
                    // alert("*Escreva sua reclamação");
                    // reclamacao.focus();
                    return;
                }
                if (aniversario.value == "") {
                    let input=document.getElementById("aniversario");
                    input.style.backgroundColor = "red";
                    // alert("*Sua data de nascimento");
                    // aniversario.focus();
                    return;
                }
    
    console.log(enviar)
        