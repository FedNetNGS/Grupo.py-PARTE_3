<script>
    export let data;

</script>

<h1 class="titulo">MOVIMIENTOS</h1>

<p class="subtitulo">
    Acá podrás ver todos los movimientos que pueden tener tus pokemons favoritos
</p>

<table class="tabla_general">
    <thead>
        <tr>
             <th>ID</th>
             <th>NOMBRE</th>
             <th>INFORMACIÓN</th>
        </tr>
    </thead>
    <tbody>
        {#each data.moves as moves}
            <tr>
                <td>{moves.id}</td>
                <td>{moves.nombre}</td> 
                <td>
                    <a href={`/movimientos/${moves.id}`}>
                        Ver más información
                    </a>
                </td>              
            </tr>
        {/each}
    </tbody>
 </table>