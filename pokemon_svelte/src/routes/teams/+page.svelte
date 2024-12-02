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
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        {#each data.equipos as equipo}
            <tr>
                <td><a href="/teams/{equipo.id_equipo}">{equipo.nombre_de_equipo}</a></td>
                <td><a href="/teams/{equipo.id_equipo}">{equipo.id_equipo}</a></td>
                <td>
                    <form method="POST" action="?/Borrar">
                        <input type="hidden" name="id_equipo" value={equipo.id_equipo} />
                        <button class="boton_agregar">Borrar equipo</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<div class="mensaje_triste">
    {#if !data.equipos.length}
        <p>No hay nada por acá, create un grupete!</p>
        <img src="https://image.emojipng.com/157/9436157.png" alt="😢" width="100px" height="100px">
    {/if}
</div>

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
        <h3 class="subtitulo">Integrantes del equipo</h3>
        
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



<style>

    .mensaje_triste {
        font-size: 20px;
        text-align: center;
        color: #000000;
        font-family: 'mochiy pop one', sans-serif;
        text-transform: uppercase;
        padding: 15px;
        font-weight: 80;
        border-radius: 20px;
    }
    .crear-equipo {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "mochiy pop one", sans-serif;
        margin-top: 30px;

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