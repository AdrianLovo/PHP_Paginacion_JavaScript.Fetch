import {mensaje} from './UtilSweetMessage.js';

export async function listarPaginasFetch(ruta, metodo, tabla, numeroPorPagina, pagina){
    const data = new FormData();
    data.append('metodo', metodo);
    data.append('tabla', tabla);
    data.append('numeroPorPagina', numeroPorPagina);
    data.append('pagina', pagina);
    
    try{
        let response = await fetch(ruta, {
            method: 'POST',
            body: data
        });
        //let respuesta = await response.json();
        let respuesta = await response.text();
        //console.log(respuesta);
        
        if(respuesta.length > 0){
            return respuesta;
        }
    }catch(error){
        mensaje('Error para conectarse al servidor', 'error');  
        return null;	
    }
} 



