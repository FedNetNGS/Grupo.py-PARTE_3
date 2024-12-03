<script>
    export let data;
</script>

<h1 class="titulo">INFORMACIÓN DEL MOVIMIENTO</h1>

<div class="div-tabla">
    <table class="tabla_general">
        <thead>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>TIPO</th>
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
                <td>{data.move.tipo}</td>
                <td>{data.move.generacion}</td>
                <td>{data.move.usos}</td>
                <td>{data.move.precision}</td>
                <td>{data.move.potencia}</td>
                <td>{data.move.efecto}</td>
            </tr>
        </tbody>
    </table>
</div>




<a href="/movimientos" class="links_retroceder">
    Volver a la lista de movimientos
</a>
