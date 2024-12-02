<script>
    export let data;
</script>

<h1 class="titulo">INFORMACIÓN DE LA NATURALEZA</h1>

<div class="div-tabla">
    <table class="tabla_general">
        <thead>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>ESTADÍSTICA AUMENTADA</th>
                <th>ESTADÍSTICA DISMINUIDA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{data.nature.id}</td>
                <td>{data.nature.identifier}</td>
                <td>{data.nature.increased_stat_id}</td>
                <td>{data.nature.dicreased_stat_id}</td>
            </tr>
        </tbody>
    </table>
</div>




<a href="/naturalezas" class="links_retroceder">
    Volver a la lista de naturalezas
</a>
