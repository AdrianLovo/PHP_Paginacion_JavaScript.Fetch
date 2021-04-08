<?php

    include_once 'Conexion.php';

    class Card extends Conexion{

        private $indice;
        private $totalPaginas;
        private $paginaActual;
        private $numeroResultados;
        private $resultadosPorPagina;
        private $error = false;

        function __construct($nPorPagina){
            parent::__construct();
            $this->resultadosPorPagina = $nPorPagina;
            $this->indice = 0;
            $this->paginaActual = 1;
            $this->calcularPaginas();
        }

        function calcularPaginas(){
            $query = $this->connect()->query('SELECT COUNT(*) AS total FROM bdpaginacion.post');
            $this->numeroResultados = $query->fetch(PDO::FETCH_OBJ)->total;
            $this->totalPaginas = round($this->numeroResultados / $this->resultadosPorPagina);  
            
            if(($this->numeroResultados % $this->resultadosPorPagina) > 0){
                $this->totalPaginas++;
            }
            
        

            if(isset($_GET['pagina'])){
                
                //Validar que pagina sea un numero
                if(is_numeric($_GET['pagina'])){

                    //Validar que pagina sea mayor o igual a 1 y menor o igual a totalPaginas
                    if($_GET['pagina'] >= 1 && $_GET['pagina'] <= $this->totalPaginas){                      
                        $this->paginaActual = $_GET['pagina'];
                        $this->indice = ($this->paginaActual - 1) * ($this->resultadosPorPagina);   
                       
                    }else{
                        echo "No existe esa pagina";
                        $this->error = true;
                    }
                }else{
                    echo("Error al mostrar la pagina");
                    $this->error = true;
                }                
            }
        }

        function mostrarPeliculas(){
            if(!$this->error){
                $query = $this->connect()->prepare('SELECT * FROM bdpaginacion.post LIMIT :pos, :n');
                $query->execute(['pos' => $this->indice, 'n' => $this->resultadosPorPagina]);

                foreach($query as $pelicula){
                    include 'AppBasica/vista-pelicula.php';
                }
            }
        }

        //SET Y GET
        public function getTotalPaginas(){
            return $this->totalPaginas;
        }

        public function setTotalPaginas($totalPaginas){
            $this->totalPaginas = $totalPaginas;
        }

    }


    $metodo = isset($_POST['metodo']) ? $_POST['metodo'] : null;
    $tabla = isset($_POST['tabla']) ? $_POST['tabla'] : null;
    $numeroPorPagina = isset($_POST['numeroPorPagina']) ? $_POST['numeroPorPagina'] : null;


    if($metodo === "Paginas"){
        $cards = new Card($numeroPorPagina);
        echo($cards->getTotalPaginas());
    }
