import {mensaje} from './UtilSweetMessage.js';

export async function listarPaginasFetch(ruta, metodo, secion, numeroPorPagina, pagina){
    const data = new FormData();
    data.append('metodo', metodo);
    data.append('secion', secion);
    data.append('numeroPorPagina', numeroPorPagina);
    data.append('pagina', pagina);
    
    try{
        let response = await fetch(ruta, {
            method: 'POST',
            body: data
        });
        let respuesta = await response.text();
        
        if(respuesta.length > 0){
            return respuesta;
        }
    }catch(error){
        mensaje('Error para conectarse al servidor', 'error');  
        return null;	
    }
} 


export async function listarCardsFetch(ruta, metodo, secion, numeroPorPagina, pagina){
    const data = new FormData();
    data.append('metodo', metodo);
    data.append('secion', secion);
    data.append('numeroPorPagina', numeroPorPagina);
    data.append('pagina', pagina);
    
    try{
        let response = await fetch(ruta, {
            method: 'POST',
            body: data
        });
        let respuesta = await response.json();
        
        if(respuesta.length > 0){
            return respuesta;
        }
    }catch(error){
        mensaje('Error para conectarse al servidor', 'error');  
        return null;	
    }
} 



