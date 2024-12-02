<script>
    import Typeahead from "svelte-typeahead";
    export let data;

    let Movimientos = data.moves; 
</script>

<h1 class="titulo">MOVIMIENTOS</h1>

<p class="subtitulo">
    Acá podrás ver todos los movimientos que pueden tener tus pokemons favoritos
</p>


<div class="buscador">
    <Typeahead
        label="Buscar movimiento"
        placeholder="Ingresa el nombre del movimiento:"
        data={data.moves}
        extract={(moves) => moves.nombre}
        on:select={({ detail }) => {
            Movimientos = [detail.original]; 
        }}
        inputAfterSelect="clear" 
    />
    <button on:click={() => (Movimientos = data.moves)}>
        Ver todos
    </button>
</div>

<table class="tabla_general">
    <thead>
        <tr>
             <th>ID</th>
             <th>NOMBRE</th>
             <th>INFORMACIÓN</th>
        </tr>
    </thead>
    <tbody>
        {#each Movimientos as moves}
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