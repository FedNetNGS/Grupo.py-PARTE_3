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
                <th>información</th>
            </tr>
        </thead>
        <tbody>
            {#each data.integrantes as integrante (integrante.id)}
                <tr>
                    <td>{integrante.id}</td>
                    <td>
                        <form method="POST" action="?/desinscribir">
                            <input type="hidden" name="id" value={integrante.id} />
                            <input type="hidden" name="id_equipo" value={data.equipo.id_equipo} />
                            <span>{integrante.nombre} / {integrante.tipo} / <img src="{data.pokemones[integrante.id].imagen}" alt="" width="50px" height="50px"></span>
                            <button>Desinscribir</button>
                        </form>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<h1>Equipo: {data.equipo.nombre_de_equipo}</h1>
<fieldset>
    <legend>Integrante</legend>
    <Typeahead
        label="Seleccionar integrante a editar"
        placeholder={"Seleccionar pokemon por nombre"}
        data={data.integrantes}
        extract={(pokemon) => `${pokemon.nombre}`}
        on:select={({ detail }) => integrante = detail.original}
        inputAfterSelect='clear'
    />
    <div>
</fieldset>


{#if estado.integrante}
    <form method="POST" action="?/inscribir">
        <input type="hidden" name="id_pokemon" value={estado.integrante.id} />
        <input type="hidden" name="id_equipo" value={data.equipo.id_equipo} />
        <span>{integrantePre.nombre}</span>
        <button>Inscribir</button>
    </form>
{/if}

<style>
    form {
        display: flex;
        align-items: center;
    }

    form span {
        display: flex;
        align-items: center;
        font-size: 20px;
        padding: 10px;
        text-decoration: none;
    }
</style>