//calculadora

var datos='2^2+10/5*2-10*2';

//evaluamos la cantidad de caracteres
var cantidadCaracteres = datos.length;

if (cantidadCaracteres <=20) 
   
    {
        arreglo = realizarOperacion(datos);
    }
    else {
        console.log("la cantidad de caracteres es superior a 20")

    }

function realizarOperacion(datos){

    var arreglo = Object.assign([], datos);
    console.log(arreglo); 
    return arreglo;
    

}

console.log(arreglo);

function operacion (arreglo) {
    
    var operadores = arreglo.filter(element => element === '^');
    

    var indicePotencia = arreglo.indexOf('^');
    console.log(indicePotencia)
     var indicenumero1=indicePotencia-1;
    
     return indicenumero1;
     
   
    }

    function operacion1 (arreglo) {
    
        var operadores = arreglo.filter(element => element === '^');
        
    
        var indicePotencia = arreglo.indexOf('^');
        console.log(indicePotencia)
         
         var indicenumero2=indicePotencia+1;
         
         console.log("el numero 2 esta en "+indicenumero2);
    
         return indicenumero2;
         
       // var potencia=true
        }

var indicenumero1=operacion(arreglo);
var indicenumero2=operacion1(arreglo);

console.log(indicenumero1);
console.log(indicenumero2);

//sabiendo los indices podeos empezar a operar la potenciacion 
function potencia(arreglo){
    console.log(arreglo)
    var num= arreglo.slice(indicenumero1);
    console.log(num);
    return num;
}

function potencia1(arreglo){
    var arregloP=[];

    var num= arregloP.slice(indicenumero2);
    console.log(num);
    return num;
}

    //if(potencia=true) {
        
    //}
var num1=potencia (arreglo);
var num2= potencia1 (arreglo);

function hacerOperacion(num1,num2){

    var potencia = num1 ** num2;
    return potencia
}

var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);
console.log(masculinos);

//potencia=potencia(num1,num2);

 //operadores= operadores+"," + arreglo.filter(element => element === '*');

 //operadores= operadores+"," + arreglo.filter(element => element === '/');
 //operadores= operadores+"," + arreglo.filter(element => element === '+');
// operadores= operadores+"," + arreglo.filter(element => element === '-');

//console.log(operadores);
