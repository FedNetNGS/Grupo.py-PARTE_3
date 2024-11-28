<script>
    export let data;
</script>

<h1> Bienvenido a la página de edición de pokemons</h1>

<p>Acá podrás editar los pokemons que pueden forman parte de tu equipo</p>

<div class="div-tabla">
    <table class="tabla_general">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>ID</th>
                <th>Naturaleza</th>
                <th>Movimientos</th>
                <th>Editar</th>
            </tr>
        </thead>
        <tbody>
            {#each data.integrantes as pokemon}
                <tr>
                    <td>{pokemon.nombre}</td>
                    <td>{pokemon.tipo}</td>
                    <td>{pokemon.id}</td>
                    <td>{pokemon.nature.identifier}</td>
                    <td>
                        <li>
                        {#each pokemon.movimientos as movimiento}
                             <a href="/movimientos/{movimiento.id}">{movimiento.nombre}</a>
                        {/each}
                        </li>
                    </td>
                    <td>
                        <a href="/teams/editar_pokemon/movimientos/{pokemon.id}">Editar</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>