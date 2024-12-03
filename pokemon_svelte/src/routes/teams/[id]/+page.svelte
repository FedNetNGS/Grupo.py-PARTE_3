<script>

    import Typeahead from 'svelte-typeahead';

    let { data } = $props();

    let estado = $state({integrante: null});
</script>

<h1 class="titulo">Esta es la página del equipo: "{data.equipo.nombre_de_equipo}"</h1>

<p class="subtitulo">
    Acá podrás ver todos los pokemons que forman parte de este equipo
</p>


<h1 class="subtitulo">Integrantes del equipo</h1>

<div class="div-tabla">
    <table class="tabla_general">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Movimientos</th>
                <th></th>
                <th>Tipo</th>
                <th>Naturaleza</th>
                <th>Foto</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {#each data.integrantes as integrante (integrante.id)}
                <tr>
                    <td>{integrante.id}</td>
                    <td>{integrante.nombre}</td>
                    <td>
                        {#each integrante.movimientos as movimiento}
                            <ul>
                                <li>
                                    "{movimiento.nombre}" / id: {movimiento.id}
                                </li>
                            </ul>
                        {/each}
                    </td>
                    <td>
                        <form method="POST" action="?/eliminarMoves">
                            <input type="hidden" name="id" value={integrante.id} />
                            <input type="hidden" name="id_equipo" value={data.equipo.id_equipo} />
                            <button>Eliminar movimientos</button>
                        </form>
                    </td>
                    <td>{integrante.tipo}</td>
                    
                    <td>
                        {#if integrante.nature}
                            {integrante.nature.identifier} / {integrante.nature.id}
                        {:else}
                            Sin Naturaleza
                        {/if}
                    </td>
                    <td><img src="{data.pokemones[integrante.id - 1].imagen}" alt="" width="80px" height="80px"></td>
                    <td>
                        <form method="POST" action="?/desinscribir">
                            <input type="hidden" name="id" value={integrante.id} />
                            <input type="hidden" name="id_equipo" value={data.equipo.id_equipo} />
                            <button>Desinscribir</button>
                        </form>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<h1 class="subtitulo">Equipo: {data.equipo.nombre_de_equipo}</h1>
<fieldset>
    <legend>Integrante</legend>
    <Typeahead
        label="Seleccionar integrante a editar"
        placeholder={"Seleccionar pokemon por nombre"}
        data={data.integrantes}
        extract={(pokemon) => `${pokemon.nombre}`}
        on:select={({ detail }) => (estado.integrante = detail.original)}
        inputAfterSelect='clear'
    />
</fieldset>



{#if estado.integrante}
    <form method="POST" action="?/Actualizar">

        <input type="hidden" name="id_pokemon" value={estado.integrante.id} />
        <input type="hidden" name="id_equipo" value={data.equipo.id_equipo} />

        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" value={estado.integrante.nombre} />
        </div>

        <div>
            <label for="id">ID del pokemon:</label>
            <input type="number" name="id" value={estado.integrante.id} />
        </div>

        <div>
            <label for="naturaleza">ID de la naturaleza (1-25):</label>
            <input type="number" name="id_naturaleza" value={estado.integrante.naturaleza} />
        </div>
        <div>
            <label for="movimientos">Movimientos:</label>
            <input type="number" name="id_movimiento" value={estado.integrante.movimientos || ''} />
        </div>

        <button type="submit">Actualizar</button>
    </form>
{/if}



<style>
    form {
        display: flex;
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


    fieldset {
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        border-style: solid none none none;
        border-width: 10px;
        border-color: #8ac1fc;
    }

    legend {
        font-family: "mochiy pop one", sans-serif;
        font-size: 20px;
        color: black;
        text-align: center;
        padding: 10px;
    }

    input {
        font-family: "mochiy pop one", sans-serif;
        padding: 5px;
        margin: 20px;
    }

    label {
        font-family: "mochiy pop one", sans-serif;
        padding: 5px;
        margin: 20px;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
        padding-left: 30px;
        background-image: url(https://cdn-icons-png.flaticon.com/512/16037/16037595.png) ;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: left center;

    }

</style>