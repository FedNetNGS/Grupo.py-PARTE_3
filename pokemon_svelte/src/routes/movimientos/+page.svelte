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

 <style>
    .buscador {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        display: flex;
        background-color: #caebfd;
        border: none;
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;
        font-family: "mochiy pop one", sans-serif;
        font-size: 20px;
        color: black;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        margin: 20px;
    }

    button:hover {
        background-color: #afb645;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
 </style>