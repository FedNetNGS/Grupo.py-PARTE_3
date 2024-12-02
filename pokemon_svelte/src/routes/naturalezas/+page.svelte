<script>
    export let data;
</script>

<h1 class="titulo">NATURALEZAS</h1>

<p class="subtitulo">
    Acá podrás ver todos las naturalezas que pueden tener tus pokemons favoritos
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
        {#each data.natures as natures}
            <tr>
                <td>{natures.id}</td>
                <td>{natures.identifier}</td> 
                <td>
                    <a href={`/naturalezas/${natures.id}`}>
                        Ver más información
                    </a>
                </td>                 
            </tr>
        {/each}
    </tbody>
 </table>