import {mensaje} from './UtilSweetMessage.js';
import {listarPaginasFetch, listarCardsFetch} from './UtilFetch.js';

//VARIABLES GLOBALES
let TOTALPAGINAS;
let RANGO = 5;

(async function() {
    let pagina = 1;
    let numeroPorPagina = document.getElementById('numeroPorPagina');
    let divPaginas = document.getElementById('divPaginas');
    let divCards = document.getElementById('divCards');  
    let loading = document.getElementById('loading');

    //MOSTRAR PAGINADO
    let totalPaginas = await listarPaginasFetch('../App/CardsController.php', 'Paginas', 'post', numeroPorPagina.value, pagina);    
    TOTALPAGINAS = totalPaginas;
    mostrarLista(divPaginas, totalPaginas, pagina);
})();


//CAMBIAR PAGINADO SEGUN LA CANTIDAD DE REGISTROS
numeroPorPagina.addEventListener('change', async function(e){
    let pagina = 1;
    let divPaginas = document.getElementById('divPaginas');    
    reiniciarPaginado(divPaginas);
    
    let lista = new Array();
    let totalPaginas = await listarPaginasFetch('../App/CardsController.php', 'Paginas', 'post', numeroPorPagina.value, pagina); 
    TOTALPAGINAS = totalPaginas;   
    mostrarLista(divPaginas, totalPaginas, pagina);

    let listaCards = new Array();
    let totalCards = await listarCardsFetch('../App/CardsController.php', 'Cards', 'post', numeroPorPagina.value, pagina);   
});

//MOSTRAR PAGINADO
async function mostrarLista(divPaginas, totalPaginas, pagina){
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
        

    //GENERAR TODOS
    for(let i=1; i <= totalPaginas; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.className='page-item';
        a.className='page-link';
        a.innerText = i;
        a.id = i;
        a.addEventListener('click', cambioPagina);
        li.appendChild(a);
        elementos.push(li);
    }     
    ul.appendChild(liPrevius);

    //SIN RESUMIR ELEMENTOS     12345
    if(totalPaginas < 6){
        for(let i=0; i < elementos.length; i++){
            ul.appendChild(elementos[i]);
        }    
    }

    //RESUMIR ELEMENTOS         12345...N
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

    //MOSTRAR CARDS
    reiniciarCards();
    let listaCards = new Array();
    let totalCards = await listarCardsFetch('../App/CardsController.php', 'Cards', 'post', numeroPorPagina.value, pagina);  
    mostrarCards(totalCards, divCards); 
}

//CAMBIO PAGINA SELECCIONADA CLICK
function cambioPagina(){
    reiniciarPaginado(divPaginas);
    mostrarLista(divPaginas, TOTALPAGINAS, this.id);
}

//CAMBIO PAGINA SIGUIENTE
function siguiente(){
    if(parseInt(this.id) > 0 && parseInt(this.id) <= TOTALPAGINAS){
        reiniciarPaginado(divPaginas);
        mostrarLista(divPaginas, TOTALPAGINAS, this.id);                
    }
}

//CAMBIO PAGINA ANTERIOR
function anterior(){
    if(parseInt(this.id) > 0 && parseInt(this.id) < TOTALPAGINAS){
        reiniciarPaginado(divPaginas);
        mostrarLista(divPaginas, TOTALPAGINAS, this.id);        
    }
}

//BORRAR PAGINADO
function reiniciarPaginado(){
    let divPaginas = document.getElementById('divPaginas');
    let contenedor = divPaginas.lastChild;
    contenedor.remove();
}

//MOSTRAR CARDS
function mostrarCards(totalCards, divCards){
    let elementos = [];
    let contenedor = document.createElement('div');
    
    for(let i =0; i < totalCards.length; i++){
        let div = document.createElement('div');
        div.className="card";
        div.style.display="inline-block";
        div.style.marginRight="10px";
        div.style.marginBottom="10px";

        let divBody = document.createElement('div');
        let h5 = document.createElement('h5');
        let p = document.createElement('p');
        h5.innerText = totalCards[i]["Titulo"];
        p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus laborum omnis hic, delectus";
        divBody.appendChild(h5);
        divBody.appendChild(p);
        
        
        let img = document.createElement('img');
        img.style.width="280px";
        img.alt = totalCards[i]["Titulo"];
        img.src = totalCards[i]["URL"];
        div.appendChild(img);
        div.appendChild(divBody);
        contenedor.appendChild(div);
    }
   
    divCards.append(contenedor);
    loading.style.display="none";
}

//BORRAR CARDS
function reiniciarCards(){
    let divCards = document.getElementById('divCards');
    let contenedor = divCards.lastChild;
    contenedor.remove();
    loading.style.display="inline";
}
