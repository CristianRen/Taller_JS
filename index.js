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

//Objetos
//Reto 1: objetos que muestre nombre, edad, profesión 

//----------------------------------------------------------

/*
const persona = [{
    nombre: 'Cristian',
    edad: '28',
    profesion: 'Animador Digital'
},
{
    nombre: 'Juan',
    edad: '14',
    profesion: 'Estudiante'
},
{
    nombre: 'Camila',
    edad: '30',
    profesion: 'Diseñadora gráfica'
},
{
    nombre: 'Sara',
    edad: '25',
    profesion: 'Psicolaga'
}];


*/
//----------------------------------------------------------

//Reto 2: Carrito de mercado
/*
const carrito =[
    {
        producto: 'Arroz',
        precio: 2500
    },
    {
        producto: 'Fideos',
        precio: 3250
    },
    {
        producto: 'Panela',
        precio: 1890
    },
    {
        producto: 'Atún',
        precio: 3200
    },  
    {
        producto: 'Leche',
        precio: 4000
    },
    {
        producto: 'Queso',
        precio: 6500
    }
];

let total =0;
for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto ${carrito[i].producto}, Precio ${carrito[i].precio}`) ; 
   total += carrito[i].precio;
};
console.log(`El total a pagar es de ${total}`);

*/

//----------------------------------------------------------

//Ciclos

//Reto 1: For que imprima del 1 al 10

//----------------------------------------------------------
/*
let num = 10;

for (let i = 1; i <= num; i++) {
    console.log(i);

};
*/
//----------------------------------------------------------

//Reto 2: For que muestre solo números pares

//----------------------------------------------------------

/*
let num =10;

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
    
}
*/
//----------------------------------------------------------

//Array con objetos
// Crear una array con ebjetos y mostrar su profesión

//----------------------------------------------------------
/*
const personas = [
{
    nombre: 'María',
    edad: 48,
    profesion: 'Abogada'
},
{
    nombre: 'José',
    edad: 20,
    profesion: 'Ingeniero'
},
{
    nombre: 'Karla',
    edad: 35,
    profesion: 'Profesora'
},
{
    nombre: 'Sofia',
    edad: 27,
    profesion: 'Artista'
}
];

for (let i = 0; i < personas.length; i++) {
    console.log(`La profesión de ${personas[i].nombre} es ${personas[i].profesion}`);
    
};
*/
//----------------------------------------------------------

//Reto Final
//Adivinar el número del 1 al 10


//----------------------------------------------------------
/*
let nUser = 8;
let num = 10;

num = Math.floor(Math.random() * 10)+1;
if (nUser === num) {
    console.log('El usuario adivino el número');
}else{
    console.log('el usuario no adivino el número el número era'+' '+num);
}
*/

//----------------------------------------------------------

