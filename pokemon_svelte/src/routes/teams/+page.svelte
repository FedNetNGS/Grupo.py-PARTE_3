<script>
        import Typehead from 'svelte-typeahead';
    import { writable } from 'svelte/store';
    
    export let data;

</script>

<h1 class="titulo">Esta es la página de los equipos</h1>

<p class="subtitulo">Aquí podrás ver todos los equipos</p>
<div class="div-tabla">
    <table class="tabla_general">
        <thead>
            <tr>
                <th>Nombre del equipo</th>
                <th>ID del equipo</th>
                <th>Información detallada</th>
            </tr>
        </thead>
        <tbody>
            {#each data.equipos as equipo}
                <tr>    
                    <td>{equipo.nombre_de_equipo}</td>
                    <td>{equipo.id_equipo}</td>
                    <td>
                        <a href={`/teams/${equipo.id_equipo}`}>Ver equipo</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>




