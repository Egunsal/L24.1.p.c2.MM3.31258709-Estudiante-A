import Cl_Estudiante from "./Cl_Estudiante.js";
export default class Cl_Becado extends Cl_Estudiante{
    constructor(nombre,notas,materias){
        super(nombre,notas,materias)
    }
    beca(){
        if(super.promedio() > 15)
            return "recibe una beca de $30.00";
        else if(super.promedio() < 15 && super.promedio() > 10)
            return "recibe una beca de $20.00";
        else return "no le corresponde beca";
    }
    mostrarNombre(){
        return this.nombre;
    }
}