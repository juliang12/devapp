import { initialStates } from "@/models/interfaces";

export default function validateLogin (values:initialStates){
 let errors:initialStates = {};

 if(!values.email){
    errors.email = "El email es Obligatorio"
 }else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)){
    errors.email = "El email no es valido"
 }

 if(!values.password){
    errors.password = "El password es obligatorio"
 }
 else if(values.password.length < 6){
    errors.password = "El password debe contener mas de 6 caracteres"
 }

 return errors;
}