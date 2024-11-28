<script>

    import Typeahead from 'svelte-typeahead';
    import '../../../styles/tablas.css';

    let { data } = $props();

    let estado = $state({integrante: null});
</script>

<h1 class="titulo">Esta es la página del equipo: "{data.equipo.nombre_de_equipo}"</h1>

<p class="subtitulo">
    Acá podrás ver todos los pokemons que forman parte de este equipo
</p>


<h1>Integrantes del equipo</h1>

<table>
    <tbody>
        {#each data.integrantes as integrante (integrante.id)}
            <tr>
                <td>{integrante.id}</td>
                <td>
                    <form method="POST" action="?/desinscribir">
                        <input type="hidden" name="id" value={integrante.id} />
                        <input type="hidden" name="id_equipo" value={data.equipo.id_equipo} />
                        <span>{integrante.nombre} - {integrante.tipo}</span>
                        <button>Desinscribir</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>


<h1>Equipo: {data.equipo.nombre_de_equipo}</h1>
<Typeahead
    label="Seleccionar pokemon"
    placeholder={"Seleccionar pokemon por nombre"}
    data={data.pokemons}
    extract={(pokemon) => `${pokemon.nombre}`}
    on:select={({ detail }) => integrante = detail.original}
    inputAfterSelect='clear'
/>

{#if estado.integrante}
    <form method="POST" action="?/inscribir">
        <input type="hidden" name="id_pokemon" value={estado.integrante.id} />
        <input type="hidden" name="id_equipo" value={data.equipo.id_equipo} />
        <span>{integrantePre.nombre}</span>
        <button>Inscribir</button>
    </form>
{/if}