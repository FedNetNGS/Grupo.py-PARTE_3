<script>
    export let data;
</script>

<h1 class="titulo">INFORMACIÓN DEL MOVIMIENTO</h1>


<style>
    :global(body) {
        background: #f1e96f; 
    }
    .titulo { 
        text-align: auto;
        font-family: sans-serif;
        color: #4b4ef7;
        background-color: #dfdec3; 
        border: 3px solid #000; 
        padding: 10px 10px;
        box-shadow: 2px 2px 8px rgba(0, 0, 5, 3);
         
    }

    table {
        width: 75%;
        margin: auto;
        border-collapse: collapse;
        background-color: #dfdec3;
        border: 6px solid black
    }

    th, td {
        text-align: center;
        padding: 30px;
        border: 1px solid black
    }

    th {
        background-color: #d83535; 
        color: #ffffff;
        font-size: 18px;
    }

    td {
        font-size: 20px;
    }

    a {
        color: #1a73e8;
    }


    h1 {
        text-align: center;
        color: #4b4ef7;
    }
</style>


<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>GENERACIÓN</th>
            <th>USOS</th>
            <th>PRECISIÓN</th>
            <th>POTENCIA</th>
            <th>EFECTOS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{data.move.id}</td>
            <td>{data.move.nombre}</td>
            <td>{data.move.generacion}</td>
            <td>{data.move.usos}</td>
            <td>{data.move.precision}</td>
            <td>{data.move.potencia}</td>
            <td>{data.move.efecto}</td>
        </tr>
    </tbody>
</table>





<div style="text-align: center;
                 margin-top: 20px;">
    <a href="/movimientos">Volver a la lista de movimientos</a>
</div>
