// Ejercicios IF-ELSE

// 1. Solicitar al usuario que responda a la pregunta ("¿Eres bellisimo/a?"), en caso de contestar sí, responder "Ciertamente", en caso de contestar no, responder: "No te creo".

/*var respuestaUsuario = prompt('¿Eres bellísimo/a?');

if(respuestaUsuario === 'Sí') {
    console.log('Ciertamente');
} else if(respuestaUsuario === 'No') {
    console.log('No te creo');
} else{
    console.log('No entendí tu respuesta');
}*/

// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de "x número es divisible entre 2" o "x núm

/*var numero = Number(prompt('Ingresa un número'));
if(numero%2 ===0) {
    console.log(`&{num} es divisible entre 2`);
} else {
    console.log(`&{num} NO es divisible entre 2`);
}*/

// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje "Lo sentimos, sigue participando".
// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima "reprobado" si la calificación es inferior a 6, "regular" si está entre 6 y 8, "bien" si es 9, y por último, "excelente" si es 10.
// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará "no tenemos este topping, lo sentimos." y a continuación le informará el precio del helado sin ningún topping.

/* 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. 
Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/

var programaEducativo = prompt('¿Cuál de los siguientes programas está cursando: Course/Carrera/Master?');

var beca = prompt('¿Cuentas con alguna beca? Sí/No');

if(beca === 'Sí') {
    descuento = prompt('¿Cuál es tu beca? FACEBOOK/GOOGLE/JESUA')
}

// Definir de acuerdo a las variables la cantidad a pagar mensualmente
if(programaEducativo === 'Course' && descuento === 'Facebook'){
    console.log('Tienes el 20% de descuento')
} else if(programaEducativo === 'Course' && descuento === 'Google'){
    console.log('Tienes el 15% de descuento')
} else if(programaEducativo === 'Course' && descuento === 'Jesua'){
    console.log('Tienes el 50% de descuento')
}