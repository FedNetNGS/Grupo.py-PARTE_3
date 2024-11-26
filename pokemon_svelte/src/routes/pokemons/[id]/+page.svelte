<script>
    export let data;
    import '../../../styles/tablas.css';
</script>

<h1 class="titulo">
    Pokémon
</h1>

<table class="pokemon_solo">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>Ataque</th>
            <th>Defensa</th>
            <th>Velocidad de Defensa</th>
            <th>Velocidad de Ataque</th>
            <th>HP</th>
            <th>Velocidad</th>
            <th>TOTAL</th>
            <th>Movimientos Posibles</th>
            <th>ID</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{data.pokemon.nombre}</td>
            <td><img src={data.pokemon.imagen} alt={data.pokemon.nombre} width="50" /></td>
            <td>{data.pokemon.peso}</td>
            <td>{data.pokemon.altura}</td>
            <td>{data.pokemon.ATK}</td>
            <td>{data.pokemon.DEF}</td>
            <td>{data.pokemon.SPDEF}</td>
            <td>{data.pokemon.SPATK}</td>
            <td>{data.pokemon.HP}</td>
            <td>{data.pokemon.SPEED}</td>
            <td>{data.pokemon.TOTAL}</td>
            <td>
                <a href={`/pokemons/${data.pokemon.id}/moves_aprendibles`}>Ver Movimientos</a>
            </td>
            <td>{data.pokemon.id}</td>
        </tr>
    </tbody>
</table>

<a href="/pokemons" class="links_retroceder">
    Volver
</a>


