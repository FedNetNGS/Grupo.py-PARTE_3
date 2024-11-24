<script>
    export let data;
</script>

<h1>Esta es la pagina de los Pokemones</h1>

<table>
   <thead>
       <tr>
            <th>nombre</th>
            <th>imagen</th>
            <th>peso</th>
            <th>altura</th>
            <th>ATK</th>
            <th>DEF</th>
            <th>SPDEF</th>
            <th>SPATK</th>
            <th>HP</th>
            <th>SPEED</th>
            <th>TOTAL</th>
            <th>id</th>
       </tr>
   </thead>
   <tbody>
       {#each data.pokemones as pokemon}
           <tr>
               <td>{pokemon.nombre}</td>
               <td><img src={pokemon.imagen} alt={pokemon.nombre} width="50" /></td>
               <td>{pokemon.peso}</td>
               <td>{pokemon.altura}</td>
               <td>{pokemon.ATK}</td>
               <td>{pokemon.DEF}</td>
               <td>{pokemon.SPDEF}</td>
               <td>{pokemon.SPATK}</td>
               <td>{pokemon.HP}</td>
               <td>{pokemon.SPEED}</td>
               <td>{pokemon.TOTAL}</td>
               <td>{pokemon.id}</td>
               
           </tr>
       {/each}
   </tbody>
</table>
