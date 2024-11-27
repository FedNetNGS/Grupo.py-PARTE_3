<script>
    export let data;
    import '../../styles/tablas.css';
</script>

<h1 class="titulo">
    Bienvenido a la lista de Pokémons
</h1>
<p class="subtitulo">
    Acá podes ver a todos tus pokemons favoritos
</p>

<table class="tabla_general">
   <thead>
       <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>ID del Pokémon</th>
            <th>Información</th>
       </tr>
   </thead>
   <tbody>
       {#each data.pokemones as pokemon}
           <tr>
               <td>{pokemon.nombre}</td>
               <td><img src={pokemon.imagen} alt={pokemon.nombre} width="100" /></td>
               <td>{pokemon.id}</td>
               <td>
                <a href={`/pokemons/${pokemon.id}`}>Ver Pokémon</a>
               </td>
               
           </tr>
       {/each}
   </tbody>
</table>
