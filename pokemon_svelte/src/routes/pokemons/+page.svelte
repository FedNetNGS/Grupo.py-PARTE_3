<script>
    export let data;
    import '../../styles/tablas.css';
    import Typeahead from "svelte-typeahead";
    let filtrados = data.pokemones;
</script>

<h1 class="titulo">
    Bienvenido a la lista de Pokémons
</h1>
<p class="subtitulo">
    Acá podes ver a todos tus pokemons favoritos
</p>

<div class="buscador">
    <Typeahead
        label="Buscar Pokémon"
        placeholder="Ingresa el nombre del Pokémon:"
        data={data.pokemones}
        extract={(pokemones) => pokemones.nombre}
        on:select={({ detail }) => {
            filtrados = [detail.original]; 
        }}
        inputAfterSelect="clear" 
    />
    <button on:click={() => (filtrados = data.pokemones)}>
        Ver todos
    </button>
</div>

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
       {#each filtrados as pokemon}
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
