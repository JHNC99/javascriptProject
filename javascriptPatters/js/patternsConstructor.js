//Funcion tradicional
/* function heroe(nombre,especialidad){
    this.nombre=nombre;
    this.especialidad=especialidad;

    //Declarar un metodo
    this.obtenerDetalle=function(){
        return this.nombre+ ' Puede '+this.especialidad; 
    }
} */
//ES6 class
class heroe{
    constructor(nombre,especialidad){
        this.nombre=nombre;
        this.especialidad=especialidad;
         //Declarar  un metodo
        
    }
}
heroe.prototype.obtenerDetalle=function(){
    return this.nombre+ ' Puede '+this.especialidad; 
}
const IroMan=new heroe('Iron man','Volar');
const SuperMan=new heroe('Super man','Volar');
console.log(IroMan.obtenerDetalle());
console.log(SuperMan.obtenerDetalle());

