<script>
    export let data;
    import '../../../styles/tablas.css';
</script>

<h1 class="titulo">Esta es la página del equipo: "{data.equipo.nombre_de_equipo}"</h1>

<p class="subtitulo">
    Acá podrás ver todos los pokemons que forman parte de este equipo
</p>

<table class="tabla_general">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>ID del Pokémon</th>
            <th>Movimientos</th>
            <th>Naturaleza</th>
        </tr>
    </thead>
    <tbody>
        {#each data.integrantes as integrante}
            <tr>
                <td>{integrante.nombre}</td>
                <td>{integrante.tipo}</td>
                <td>{integrante.id}</td>
                <td>
                    {#each integrante.movimientos as movimiento}
                    <li>
                        <a href={`/movimientos/${movimiento.id}`}>
                            {movimiento.nombre}
                        </a>
                    </li>
                    {/each}
                </td>
                <td>{integrante.nature.identifier}</td>
            </tr>
        {/each}
    </tbody>
</table>

