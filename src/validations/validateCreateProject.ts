import { initialStates } from "@/models/interfaces";

export default function validateCreateProject (values:initialStates){
 let errors:initialStates = {};

 if(!values.name){
    errors.name = "El nombre de proyecto es Obligatorio"
 }


//  if(!values.image){
//     errors.image = "La imagen es obligatoria"
//  }

 if(!values.description){
    errors.description = "La descripcion es obligatoria"
 }
 else if(values.description.length < 40){
    errors.description = "La descripcion debe contener mas de 40 caracteres"
 }

 return errors;
}