/********************************************************************************/
/**************      OBTENCION DE LAS ETIQUETAS DE HTML        *****************/
/******************************************************************************/

const input__label =  document.querySelectorAll(".input__label")
const casilla1 =  document.querySelector(".casilla1")
const casilla2 =  document.querySelector(".casilla2")
const casilla3 =  document.querySelector(".casilla3")
const casilla4  =  document.querySelector(".casilla4")
const casilla5  =  document.querySelector(".casilla5")
const casilla6  =  document.querySelector(".casilla6")
const casilla7  =  document.querySelector(".casilla7")
const casilla8  =  document.querySelector(".casilla8")
const casilla9 =  document.querySelector(".casilla9")
const buttons =  document.querySelectorAll(".buttons")
const box =  document.querySelector(".box")
const puntajeX =  document.querySelector(".puntajeX")
const puntajeO =  document.querySelector(".puntajeO")

let contador = 1;
let index;
let player1;
let player2;




/*********************************************************************************************************************/
/***************   ESTA FUNCION ES PARA MANEJAR LOS BOTONES DE REINICIAR, EL PLAYER X Y EL PLAYER O    **************/
/*******************************************************************************************************************/

buttons.forEach((item)=>{
    item.addEventListener("click",()=>{

        if (item.value == "Reiniciar"){
            input__label.forEach((item2)=>{
                item2.value = "";
                item2.style.color = "black";
                box.style.display = "none"; 
                contador = 1;
                return
            })
        }
        else if (item.value == "X"){
                if((puntajeO.textContent == 0)&&(puntajeX.textContent == 0)){
                    player1 = "X";
                    player2 = "O";
                    return
                }else {
                    puntajeO.textContent = "0";
                    puntajeX.textContent = "0";
                    return
                }
        }
        else if (item.value == "O"){
                if((puntajeO.textContent == 0)&&(puntajeX.textContent == 0)){
                    player1 = "O";
                    player2 = "X";
                    return
                }else{
                    puntajeO.textContent = "0";
                    puntajeX.textContent = "0";
                    return
                }
        }
        
    })
})





/**************************************************************************************************************/
/*****************        TODO ESTE CODIGO ES PARA MANEJAR LAS CASILLAS DEL TABLERO            ***************/
/************************************************************************************************************/


/***************************************************/
/**** ESTA FUNCION SUMA LAS PARTIDAS GANADAS  *****/
/*************************************************/

function sumar (porce1){
    if (porce1 == "X"){
            puntajeX.textContent = Number(puntajeX.textContent) + 1
    }else {
            puntajeO.textContent = Number(puntajeO.textContent) + 1
    }
}

/************************************************************/
/**** ESTA FUNCION CAMBIA EL COLOR DE LAS PROPIEDADES  *****/
/**********************************************************/

function cambiarColor(porce1,color1,color2){
    porce1.style.color = "red";
    color1.style.color = "red";
    color2.style.color = "red";
    box.style.display = "flex";
}


/**********************************************************/
/**** ESTA FUNCION VERIFICA SI EL JUGADOR HA GANADO  *****/
/********************************************************/

function ganador(valor){
    

    index = Array.from(input__label).indexOf(valor);
    let porce1 = input__label[index].value;
   

    if (index == 0){
        if ((input__label[index].value == input__label[1].value) && (input__label[1].value == input__label[2].value)){

            sumar(porce1);
            cambiarColor(input__label[index],input__label[1],input__label[2])

        }
        else if ((input__label[index].value == input__label[3].value ) && (input__label[index].value == input__label[6].value )){
          
            sumar(porce1);
            cambiarColor(input__label[index],input__label[3],input__label[6])
            
        }
        else if ((input__label[index].value == input__label[4].value ) && (input__label[index].value == input__label[8].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[4],input__label[8])
        }
    }
    else if (index == 1){
        if ((input__label[0].value == input__label[index].value) && (input__label[index].value == input__label[2].value)){
         
            sumar(porce1);
            cambiarColor(input__label[index],input__label[0],input__label[2])
        }
        else if ((input__label[index].value == input__label[4].value ) && (input__label[index].value == input__label[7].value )){
        
            sumar(porce1);
            cambiarColor(input__label[index],input__label[4],input__label[7])
        }
    }
    else if (index == 2){
        if ((input__label[index].value == input__label[1].value) && (input__label[index].value == input__label[0].value)){
        
            sumar(porce1);
            cambiarColor(input__label[index],input__label[1],input__label[0])
        }
        else if ((input__label[index].value == input__label[5].value ) && (input__label[index].value == input__label[8].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[5],input__label[8])
        }
        else if ((input__label[index].value == input__label[4].value ) && (input__label[index].value == input__label[6].value )){
           
            sumar(porce1);
            cambiarColor(input__label[index],input__label[4],input__label[6])
        }
    }
    else if (index == 3){
        if ((input__label[index].value == input__label[4].value) && (input__label[index].value == input__label[5].value)){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[4],input__label[5])
        }
        else if ((input__label[index].value == input__label[0].value ) && (input__label[index].value == input__label[6].value )){
           
            sumar(porce1);
            cambiarColor(input__label[index],input__label[0],input__label[6])
        }
    }
    else if (index == 4){
        if ((input__label[3].value == input__label[index].value) && (input__label[index].value == input__label[5].value)){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[3],input__label[5])
        }
        else if ((input__label[index].value == input__label[1].value ) && (input__label[index].value == input__label[7].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[1],input__label[7])
        }
        else if ((input__label[index].value == input__label[0].value ) && (input__label[index].value == input__label[8].value )){
           
            sumar(porce1);
            cambiarColor(input__label[index],input__label[0],input__label[8])
        }
        else if ((input__label[index].value == input__label[2].value ) && (input__label[index].value == input__label[6].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[2],input__label[6])
        }
    }
    else if (index == 5){
        if ((input__label[index].value == input__label[4].value) && (input__label[index].value == input__label[3].value)){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[4],input__label[3])
        }
        else if ((input__label[index].value == input__label[2].value ) && (input__label[index].value == input__label[8].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[2],input__label[8])
        }
    }
    else if (index == 6){
        if ((input__label[index].value == input__label[7].value) && (input__label[index].value == input__label[8].value)){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[7],input__label[8])
        }
        else if ((input__label[index].value == input__label[0].value ) && (input__label[index].value == input__label[3].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[0],input__label[3])
        }
        else if ((input__label[index].value == input__label[4].value ) && (input__label[index].value == input__label[2].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[4],input__label[2])
        }
    }
    else if (index == 7){
        if ((input__label[6].value == input__label[index].value) && (input__label[index].value == input__label[8].value)){
           
            sumar(porce1);
            cambiarColor(input__label[index],input__label[6],input__label[8])
        }
        else if ((input__label[index].value == input__label[1].value ) && (input__label[index].value == input__label[4].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[1],input__label[4])
        }
    }
    else if (index == 8){
        if ((input__label[7].value == input__label[index].value) && (input__label[index].value == input__label[6].value)){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[7],input__label[6])
        }
        else if ((input__label[index].value == input__label[2].value ) && (input__label[index].value == input__label[5].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[2],input__label[5])
        }
        else if ((input__label[index].value == input__label[4].value ) && (input__label[index].value == input__label[0].value )){
            
            sumar(porce1);
            cambiarColor(input__label[index],input__label[4],input__label[0])
        }
    }
    
}



/**************************************************************************************/
/**** ESTA FUNCION UTILIZA EL CONTADOR PARA SABER A QUIEN LE TOCA ELEGIR CASILLA  ****/
/************************************************************************************/

function contar (contador){

    if(contador % 2 !== 0){
        return false
    }else return true
        
}
function aleatorio (){

}


/***********************************************************************/
/**** ESTA FUNCION AGREGA LOS CARÁCTERES "X" U "O" A LAS CASILLAS  ****/
/*********************************************************************/

function casilleros(valor){
    valor.addEventListener("click",()=>{

        if(player1 && player2 !== ""){
            if (valor.value == ""){
                if (contar(contador) ){
                    valor.value = player2;
                    ganador(valor)
                    contador++

                }else {
                    valor.value = player1;
                    ganador(valor)
                    contador++
                }
            }else return
        }else  alert("CHOISE YOUR PLAYER ----> X  OR  -----> O");
        
})
}

casilleros(casilla1)
casilleros(casilla2)
casilleros(casilla3)
casilleros(casilla4)
casilleros(casilla5)
casilleros(casilla6)
casilleros(casilla7)
casilleros(casilla8)
casilleros(casilla9)

/**********************************************************************************************************/
/**********************************    EL FINAL DEL CÓDIGO DEL JUEGO    **********************************/
/********************************************************************************************************/