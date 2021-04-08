import {mensaje} from './UtilSweetMessage.js';
import {listarPaginasFetch} from './UtilFetch.js';

//VARIABLES GLOBALES
let TOTALPAGINAS;
let RANGO = 5;


(async function() {
    let pagina = 1;
    let numeroPorPagina = document.getElementById('numeroPorPagina');
    let divPaginas = document.getElementById('divPaginas');
    
    let lista = new Array();
    let totalPaginas = await listarPaginasFetch('../App/CardsController.php', 'Paginas', 'post', numeroPorPagina.value, pagina);    
    TOTALPAGINAS = totalPaginas;

    mostrarLista(divPaginas, totalPaginas, pagina);
})();

//Cambiar Paginado segun la cantidad de registros
numeroPorPagina.addEventListener('change', async function(e){
    let pagina = 1;
    let divPaginas = document.getElementById('divPaginas');    
    reiniciar(divPaginas);
    
    let lista = new Array();
    let totalPaginas = await listarPaginasFetch('../App/CardsController.php', 'Paginas', 'post', numeroPorPagina.value, pagina); 
    TOTALPAGINAS = totalPaginas;   
    mostrarLista(divPaginas, totalPaginas, pagina);
});




function mostrarLista(divPaginas, totalPaginas, pagina){
    console.log("PAGINA", pagina);
    let elementos = [];
    let ul = document.createElement('ul');
    let contenedor = document.createElement('div');
    ul.className = 'pagination';

    //Elemento vacio "..."
    let liVacio = document.createElement('li');
    let aVacio = document.createElement('a');
    liVacio.appendChild(aVacio);
    liVacio.className='page-item';
    aVacio.className='page-link';
    aVacio.innerText = '...';

    //Boton Next
    let liNext = document.createElement('li');
    let aNext = document.createElement('a');
    liNext.appendChild(aNext);
    liNext.className='page-item';
    aNext.className='page-link';
    aNext.innerText = 'Next';
    aNext.id = parseInt(pagina) + 1;
    aNext.addEventListener('click', siguiente);

    //Boton Previus
    let liPrevius = document.createElement('li');
    let aPrevius = document.createElement('a');
    liPrevius.appendChild(aPrevius);
    liPrevius.className='page-item';
    aPrevius.className='page-link';
    aPrevius.innerText = 'Previous';
    aPrevius.id = parseInt(pagina) - 1;
    aPrevius.addEventListener('click', anterior);
        

    //Generando total de paginas
    for(let i=1; i <= totalPaginas; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.className='page-item';
        a.className='page-link';
        a.innerText = i;
        a.id = i;
        a.addEventListener('click', ejemplo);
        li.appendChild(a);
        elementos.push(li);
    }     
    ul.appendChild(liPrevius);

    //SIN RESUMIR ELEMENTOS
    if(totalPaginas < 6){
        for(let i=0; i < elementos.length; i++){
            ul.appendChild(elementos[i]);
        }    
    }

    //RESUMIR ELEMENTOS
    if(totalPaginas > 6){
        if((elementos.length - RANGO - pagina) > 0){    //Orden Normal
            let x = (0 + parseInt(pagina) -1);
            let y = (RANGO - 1 + parseInt(pagina));

            for(let j=x; j < y ; j++ ){
                ul.appendChild(elementos[j]);
            }
            ul.appendChild(liVacio);
            ul.appendChild(elementos[elementos.length -1]);
        }else{
            
            ul.appendChild(elementos[0]);
            ul.appendChild(liVacio);

            let x = (elementos.length - RANGO - 1);
            for(let j=x; j < elementos.length ; j++ ){
                ul.appendChild(elementos[j]);
            }
        }
    }


    ul.appendChild(liNext);
    contenedor.append(ul);
    divPaginas.append(contenedor);
}

function ejemplo(){
    reiniciar(divPaginas);
    mostrarLista(divPaginas, TOTALPAGINAS, this.id);
}

function siguiente(){
    if(parseInt(this.id) > 0 && parseInt(this.id) < TOTALPAGINAS){
        reiniciar(divPaginas);
        mostrarLista(divPaginas, TOTALPAGINAS, this.id);        
    }
}

function anterior(){
    console.log("ANTERIOR")
    if(parseInt(this.id) > 0 && parseInt(this.id) < TOTALPAGINAS){
        console.log("IF");
        reiniciar(divPaginas);
        mostrarLista(divPaginas, TOTALPAGINAS, this.id);        
    }
}


function reiniciar(divPaginas){
    let contenedor = divPaginas.lastChild
    contenedor.remove();
}