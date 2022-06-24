console.log("hola mundo");

var nombre="williams";
var apellido="MEJIA";
var edad="28";

console.log("hola "+nombre+" "+apellido+"tengo la edad de "+edad+"años ");

/* Una variable puede guardar diferentes tipos de datos*/
var peso=28;

var peso2="28 kg"
/* Conversion de mayusculas a minisculas y de minusculas a mayusculas*/

var nombreMayuscula=nombre.toUpperCase()
var apellidoMinuscula=apellido.toLocaleUpperCase()

/* letra individual de un string*/

var nombrePrimeraLetra=nombre.charAt(0);

/* para saber las cantidad de caracteres de una cadena (es un atributo length)*/

var cantidadNombre=nombre.length;
console.log(cantidadNombre);


/*una variable con distintos tipos de datos*/

var combinacion=nombre +" pesa  "+peso;
console.log(combinacion); 

/*interpolacion de varialbes, se puede escribir codigo java dentro de la llaves*/

var nombreCompleto= `${nombre.toLocaleUpperCase()} ${apellido }`;

console.log(nombreCompleto);

/*Acceder a un string dentro de un string*/
var str1=nombre.charAt(0)+nombre.charAt(1);
console.log(str1);

var str2=nombre.substr(0,1);

console.log(str2);


/*desafio  mostrar la ultima letra de la cadena*/
var desafio = "desafio";
console.log(desafio.substr(-1));

/*Incrementar el valor de una variable, sumas, restas, decimales*/

var edad=edad +1;

edad+=1;

var peso=peso-2;
peso -=2;

var suma = peso+edad;
console.log (suma);

var suma1;
suma1+=suma;

var precio=29.3;
var total=precio*31;

/* el valor de total da un decimal de mas se puede quitar multiplicando el valor de precio por 100 y luego dividiendolo dentro de 100*/




/*Elegir la cantidad de decimales de una operacion decimales*/

console.log(total);
 var total2=total.toFixed(2); /*total 2 es un string*/
 console.log(total2);
 /*conversion de string a un float*/

 var totalF= parseFloat(total2);




/*Funciones*/
var mascotaNomre= "Dumal", color="cafe";

function imprimir(){
    console.log(`${mascotaNomre} es de color ${color} en el 2022`);

}

imprimir();
/*Funciones pasando parametros */

function imprimirParametros(variable1, variable2){
    console.log(`${variable1} es de color ${variable2} en el 2022`);

}

imprimirParametros("sasha", "azul");

/*Funciones, cuando la variable se declara fuera de la funcion este tiene un alcance global dentro de un servidor o ventanda */

var variableGlobal='global';
function imprimirNombreMayuscula(){

    variableGlobal= variableGlobal.toUpperCase();
    console.log(variableGlobal);
}

imprimirNombreMayuscula();
console.log(window.variableGlobal);


/*Delimitar el alcance la funcion no se modifica la variable*/


var variableGlobal2='global2';
function imprimirNombreMayuscula2(variableLocal){

    variableLocal= variableLocal.toUpperCase();
    console.log(variableLocal);
}

imprimirNombreMayuscula2(variableGlobal2);
console.log(variableGlobal2);


/*Objetos */
var Perro={
    nombre:'Dumal',
    color:'Cafe',
    patas: 4 
}
var Perro1={
    nombre:'Sasha',
    color:'negro con cafe',
    patas:4
}

console.log(Perro.nombre);
console.log(Perro1.nombre,Perro1.color,Perro1.patas);

function nombreObjeto(nombrePerro){
    var nombre= Perro.nombre.toUpperCase();
    console.log(nombre);

}
nombreObjeto(Perro)

function nombreObjeto1(nombrePerro1){
    
    console.log(Perro1.nombre.toUpperCase());

}
nombreObjeto1(Perro1);

/*Objetos pasar atributos del objeto*/

var Perro3={

    nombre:'Clauss',
    color:'cafe con blanco',
    patas:4
}
function MayusculaObjeto ({nombre}){

    console.log(nombre.toUpperCase());
}

MayusculaObjeto(Perro3);
MayusculaObjeto({nombre:'Terry'});

/*Desestruturar objetos */

function Minuscula3(){
    //var nombre=Perro.nombre; esta linea equivale a la linea de abajo
    var {nombre}=Perro1;
    console.log(nombre.toLowerCase());

}
Minuscula3(Perro1);


/*Reto objeto */
var Persona={
    nombre:'Sacha1',
    edad:28

}
var Persona2={
    nombre:'Dario1',
    edad:28

}

function imprimirNombreYEdad({nombre,edad}){

    
console.log (nombre.toUpperCase(),edad);


}
imprimirNombreYEdad(Persona);
imprimirNombreYEdad(Persona2);


/*Parametros como referencia */
function cumpleanios(edad){

    Persona.edad +=1;//se incrementa la edad
    edad+=1;// no se incrementa la edad
    console.log(Persona.edad);
}

cumpleanios(Persona);
console.log(Persona.edad);

function cumpleanios2 (edad){

    return {

        ...Persona,
        edad: Persona.edad + 1
    }
}

/*Comparadores, siempre usar el ===, no el == */
 var x=4, y=4;
var z='4';
// en consola escribir x==y esto devuelve true

 var primerObjeto={

    nombre:'mari',
    
 }
var SegundoObjeto={

    nombre:'mari',
}
//comparar los dos objetos en consla con == y === los dos devuelven false

var TercerObjeto=SegundoObjeto;
//comparar en consola el segundo objeto con el segundo objeto devuelve true,
//Porque el apuntador del tercer objeto apunta al misma direccion de memoria que el segundoObjeto


 TercerObjeto.nombre='mari2';// aqui se modifica el tercer objeto pero tambien se cambia el segundo objeto
 // porque estan apuntando a la misma direccion de memoria

var cuartoObjeto={

    ...SegundoObjeto//se esta creando un nuevo objeto
}

// por tanto si el tercer objeto se compara con el cuartoObjeto la comparacion devuelve false

var objetoControl={

    nombre:'control',
    edad:28,
    ingeniero:true,
    dj:false
}

//function imprimirProfesiones(profesiones){

  //  console.log(${objetoControl.nombre'es'})
//}