const input = document.querySelector("textarea");
const encriptBtn = document.querySelector(".encriptar");
const desencriptarBtn = document.querySelector(".desencriptar");
const solution = document.querySelector(".textResult")
const searching = document.querySelector(".searching")
const p1_2 = document.querySelector(".p1-2")
const result = document.querySelector(".result")
const x = document.querySelector(".x")
const pattern = new RegExp(/^[A-Za-z0-9\.,\s]+$/g)
x.style.display = "none"

solution.style.display = "none"
let aux = true

function encriptar(event) {
  event.preventDefault();
  if (input.value == ""){
    alert("¡Escribe un texto!")
  }
  else{
    let isValid = false
    if(!pattern.test(input.value)){
      isValid = false
    }else{
      isValid = true
    }
    console.log("esto funciona")
    if (isValid==true){
      let text = input.value.split("");
      for(let i=0; i<text.length; i++){
          switch (text[i]){
              case "a" : text[i] = "ai";
              break;
              case "e" : text[i] = "enter";
              break;
              case "i" : text[i] = "imes";
              break;
              case "o" : text[i] = "ober";
              break;
              case "u" : text[i] = "ufat";
              break;
          }
      }
      let encText = text.join("")
      solution.textContent = encText;
      searching.style.display = "none"
      p1_2.style.display = "none"
      solution.style.display = "block"
      result.style.display = "block"
      if (aux){
          crearCopy()
      }
      aux = false
      copy.addEventListener("click", function(event){
          event.preventDefault()
          navigator.clipboard.writeText(encText)
          copy.textContent = "¡Texto copiado!"
      })
      copy.textContent = "Copia tu texto"
    }
    else{
      alert("El texto ingresado no es válido")
    }
  }
}

function desencriptar (event){
  event.preventDefault()
  if (input.value == ""){
    alert("¡Escribe un texto!")
  }
  else{
    let text = input.value
    text = text.replaceAll("ai", "a")
    text = text.replaceAll("enter", "e")
    text = text.replaceAll("imes", "i")
    text = text.replaceAll("ober", "o")
    text = text.replaceAll("ufat", "u")
    solution.textContent = text
    searching.style.display = "none"
    p1_2.style.display = "none"
    solution.style.display = "block"
    if (aux){
      crearCopy()
    }
    aux = false
    copy.textContent = "Copia tu texto"
    copy.addEventListener("click", function(event){
      event.preventDefault()
      navigator.clipboard.writeText(text)
      copy.textContent = "¡Texto copiado!"
    })
    copy.textContent = "Copia tu texto"
  }
}

function crearCopy(){
    let copy = document.createElement("button")
    copy.setAttribute("id", "copy")
    copy.textContent = "Copia tu texto"
    result.appendChild(copy)
    return copy
}

function delete_text (){
  input.value=""
  x.style.display = "none"
}

function minus(){
  input.value = input.value.toLowerCase();
  if (input.value != ""){
    x.style.display = "block"
  }
  else{
    x.style.display = "none"
  }
}

encriptBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;
x.onclick = delete_text;
input.onkeyup = minus;