<script>
        import Typehead from 'svelte-typeahead';
    import { writable } from 'svelte/store';
    
    export let data;

    let equipo = writable({
        nombre_de_equipo: '',
        id_equipo: '',
        integrantes: []
    });

    function AgregarIntegrante() {
        equipo.update(s => {
            s.integrantes.push({nombre : '', tipo: '', id: '',});
            return s;
        });
    }

    function EliminarIntegrante(index) {
        equipo.update(s => {
            s.integrantes.splice(index, 1);
            return s;
        });
    }
</script>

<h1 class="titulo">Esta es la página de los equipos</h1>

<p class="subtitulo">Aquí podrás ver todos los equipos</p>



<table class="tabla_general">
    <thead>
        <tr>
            <th>Nombre del equipo</th>
            <th>ID del equipo</th>
        </tr>
    </thead>
    <tbody>
        {#each data.equipos as equipo}
            <tr>
                <td><a href="/teams/{equipo.id_equipo}">{equipo.nombre_de_equipo}</a></td>
                <td><a href="/teams/{equipo.id_equipo}">{equipo.id_equipo}</a></td>
            </tr>
        {/each}
    </tbody>
</table>

<h2 class="subtitulo">Crear un nuevo equipo</h2>

<form method="POST" action="?/create">
        <label class="crear-equipo">
            Nombre del equipo:
            <input
                name="nombre"
                type="text"
                bind:value={$equipo.nombre_de_equipo}
                autocomplete="off"
                required
                placeholder="Escribe el nombre del equipo"
            />
        </label>


    <div class="div-integrantes">
        <input type="hidden" name="integrantes" value={JSON.stringify($equipo.integrantes)} />
        <h3>Integrantes del equipo</h3>
        {#each $equipo.integrantes as integrante, index}
            <fieldset>
                <legend>Integrante {index + 1}</legend>
                <Typehead
                    label="Seleccionar integrante"
                    placeholder={"Seleccionar integrante por nombre"}
                    data={data.pokemones}
                    extract={(integrante) => `${integrante.nombre}`}
                    on:select={({ detail }) => integrante = detail.original}
                    inputAfterSelect='clear'
                />
                <div>
                    <label for="integrante-name-{index}">Nombre</label>
                    <input
                        id="integrante-name-{index}"
                        type="text"
                        bind:value={integrante.nombre}
                        required
                        readonly
                    />
                </div>
                <div>
                    <label for="integrante-id-{index}"><img src="{integrante.imagen}" alt="" width="100px" height="100px"></label>
                </div>
                <div>
                    <label for="integrante-tipo-{index}">Tipo</label>
                    <input
                        id="integrante-tipo-{index}"
                        type="text"
                        bind:value={integrante.tipo}
                        required
                    />
                </div>
                <div>
                    <label for="integrante-id-{index}">ID del pokemon</label>
                    <input
                        id="integrante-id-{index}"
                        type="number"
                        bind:value={integrante.id}
                        required
                        readonly
                    />
                </div>
                <button type="button" on:click={() => EliminarIntegrante(index)}>
                    Eliminar integrante
                </button>
            </fieldset>
        {/each}
    </div>
    <div class="div-boton-agregar">
        <button class="boton_agregar" type="button" on:click={AgregarIntegrante}>
            Agregar integrante
        </button>
    

        <button class="boton_agregar" type="submit">
            Crear equipo
        </button>
    </div>

</form>

<h2 class="subtitulo">Edición de equipos</h2>

<a href="/teams/editar_pokemon">Edición de pokemons</a>


<style>
    .crear-equipo {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "mochiy pop one", sans-serif;

    }

    input {
        font-family: "mochiy pop one", sans-serif;
        padding: 5px;
        margin: 20px;
    }

    .div-integrantes {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "mochiy pop one", sans-serif;
        margin-top: 20px;
    }

    .div-boton-agregar {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .boton_agregar {
        display: flex;
        background-color: #caebfd;
        border: none;
        border-radius: 5px;
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

    .boton_agregar:hover {
        background-color: #afb645;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    a {
        display: flex;
        font-size: 20px;
        padding: 10px;
        text-decoration: none;
        font-family: "mochiy pop one", sans-serif;
        align-items: center;
        justify-content: center;
    }
</style>