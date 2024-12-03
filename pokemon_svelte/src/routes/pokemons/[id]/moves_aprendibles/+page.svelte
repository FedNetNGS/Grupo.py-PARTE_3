<script>
    export let data;
</script>

<h1 class="titulo">
    Movimientos Aprendibles
</h1>
<div class="div-lista">
    <ul>
        {#each data.move_aprendible as move}
        <li>
            <a href="/movimientos/{data.move.id}">{move}</a>
        </li>
        {/each}
    </ul>
</div>
<style>
    .div-lista{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        padding: 16px;
    }
    li {
        list-style: none;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #8ac1fc;
        margin: 10px;
        font-size: 20px;
        font-family: "mochiy pop one", sans-serif;
        text-transform: capitalize;
    }

</style>