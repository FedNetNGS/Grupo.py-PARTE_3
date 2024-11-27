<header>
<nav>
   <button>
      <a href="/">Inicio</a>
   </button>
   <button>
      <a href="/pokemons">Pokémons</a>
   </button>
   <button>
      <a href="/movimientos">Movimientos</a>
   </button>
   <button>
       <a href="/teams">Equipos</a>
   </button>
</nav>
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: #caebfd;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    button {
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
    }

    button:hover {
        background-color: #afb645;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    nav a {
        font-size: 20px;
        padding: 10px;
        text-decoration: none;
        color: black;
    }
</style>