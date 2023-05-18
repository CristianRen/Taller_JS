//Variables y operadores aritméticos

// Cálcular área:


//----------------------------------------------------------
/*
let base = 10;
let altura = 7;
let area = base*altura;


console.log(`El área de paralelogramo es ${area}`);
*/
//----------------------------------------------------------


//Condicionales
//Reto 1: Mostrar si es mayor de edad o no

//----------------------------------------------------------
/*
let edad = 20;

if (edad >= 18) {
    console.log('Es mayor de edad');
} else {
    console.log('No es mayor de edad');
}
*/
//----------------------------------------------------------

//Reto 2: Mostrar si el número es negativo, positivo o cero

//----------------------------------------------------------
/*
let numero = -10;

if (numero > 0) {
    console.log(`El ${numero} es un número positivo`);
}if (numero === 0) {
    console.log('El número es CERO (0)');
}else{
    console.log('El número es negativo');
}
*/
//----------------------------------------------------------

//Arrays

//Reto 1: Mostrar varios nombres de una Array

//----------------------------------------------------------
/*
const nom = ['Juan ', 'Sara ', 'Jorge ', 'Andrea ', 'Luis', 'Celeste'];
//console.log(`Los nombre de la lista son ${nom}`);
    console.log('La lista de nombres es: ');
for (let i = 0; i < nom.length; i++) {

    console.log(nom[i]);
}
*/
//----------------------------------------------------------

//Reto 2: Mostrar el número mayor de 5 números 
/*
const numero = [14 ,8 ,20 ,24, 6];
let nMayor =0;


for (let i = 0; i < numero.length; i++) {
    if (numero[i] > nMayor) {
        nMayor = numero[i]
    }
    
}
console.log(`El número mayor del Array es ${nMayor}`);
*/
//----------------------------------------------------------