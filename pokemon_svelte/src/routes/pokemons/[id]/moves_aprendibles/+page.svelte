<script>
    export let data;
    import '../../../../styles/tablas.css';
</script>

<h1 class="titulo">
    Movimientos Aprendibles
</h1>

<ul>
    {#each data.move_aprendible as move}
    <li>
        {move}
    </li>
    {/each}
</ul>