const input = require("prompt-sync") ()

console.log("El profe estuvo aqui");
 const tipoCubierto = input("Ingresa el tipo de cubierto (cuchara,cuchillo,tenedor): ").toLowerCase();

 function imprimirCubierto(cubierto){
    let mensaje;
    switch (cubierto) {
        case 'cuchara':
            mensaje = "Elegiste cuchara. Se utiliza para sopas y líquidos."
            break;
        case 'tenedor':     
            mensaje = "Elegiste tenedor. se utiliza para alimentos sólidos."
            break;
        case 'cuchillo':
            mensaje = "Elegiste cuchillo. se utiliza para cortar."
            break;    
        default:
            mensaje = "Error de cubierto, por favor inserta de nuevo."
            
    }
    console.log(mensaje);
 }

 imprimirCubierto(tipoCubierto);
 



