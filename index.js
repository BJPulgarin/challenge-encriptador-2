const input = document.querySelector("textarea")
const desencriptarBtn = document.querySelector(".desencriptar")
const encriptarBtn = document.querySelector(".encriptar")
const searching = document.querySelector(".searching")
const noText = document.querySelector(".p1-2")
const result = document.querySelector(".textResult")

function encriptar(){
    if (input.value != ""){
        let text = input.value.split("")
        for(let i=0; i<text.length; i++){
            switch (text[i]){
                case "a": 
                    text[i]="ai";
                    break
                case "e":
                    text[i]="enter";
                    break
                case "i":
                    text[i]="imes";
                    break
                case "o":
                    text[i]="ober";
                    break
                case "u":
                    text[i]="ufat";
                    break
            }
        }
        encriptText = text.join("")
        result.textContent = encriptText
        noText.style.display = "none"
        searching.style.display = "none"
    }
    else{
        input.setAttribute("placeholder", "YO TE DIJE QUE ESCRIBIERAS!!")
    }
}

encriptarBtn.addEventListener("click", encriptar)