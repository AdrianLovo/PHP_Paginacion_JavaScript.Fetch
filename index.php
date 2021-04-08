<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Paginación en PHP y JavaScript</title>

    <!--Librerias Sweet-->
    <link rel="stylesheet" href="/Resources/sweet/sweetalert2.min.css">

    <!--Libreria Main-->
    <link rel="stylesheet" href="PaginacionBasica.css">

    <!--Bootstrap Estilos-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>
<body>

    <div id="container" class="container mt-3">

        <center>
            <label for="numero">Resultados por página</label>
        </center>
        <select id="numeroPorPagina" name="numeroPorPagina" class="form-select" aria-label="Default select example">
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>

        <div id="divPaginas" class="mt-3">         
        </div>

        <div id="peliculas">
            <?php
                //$peliculas->mostrarPeliculas();
            ?>
        </div>
    </div>


    <!--Libreria Sweet-->
    <script src="/Resources/sweet/sweetalert2.min.js"></script>      

    <!--Controller-->
    <script type="module" src="/js/index.js"></script>
    
</body>
</html>
