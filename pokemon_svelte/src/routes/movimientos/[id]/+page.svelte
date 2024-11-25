<script>
    export let data;
</script>

<h1>Detalle del movimiento</h1>

<p><strong>ID:</strong> {data.move.id}</p>
<p><strong>NOMBRE:</strong> {data.move.nombre}</p>
<p><strong>GENERACIÓN:</strong> {data.move.generacion}</p>
<p><strong>USOS:</strong> {data.move.usos}</p>
<p><strong>PRECISIÓN:</strong> {data.move.precision}</p>
<p><strong>POTENCIA:</strong> {data.move.potencia}</p>
<p><strong>EFECTOS:</strong> {data.move.efecto}</p>

<a href="/movimientos">Volver a la lista de movs</a>