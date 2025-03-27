<header>
<nav>
   <button>
      <a href="/">INICIO</a>
   </button>
   <button>
      <a href="/pokemons">MAPA</a>
   </button>
   <button>
      <a href="/movimientos">ALQUILAR / COMPRAR</a>
   </button>
    <button>
        <a href="/tipos">RED SOCIAL</a>
    </button>
</nav>
<div class="div_logo">
    <img
        src="https://static.tokkobroker.com/tfw_images/903_Inmobiliaria%20CHV/CHV%20marca%20apaisada%20Transparente.png"
        alt="CHVS"
        class="logo"
        width="400"
    
         />
</div>

<div class="div_center">
    <img
        src="https://www.cariverplate.com.ar/css/img/ico-redes-big.png"
        alt="REDES"
        width="300"
        class="redes"
    />
</div>
</header>

<style>
    header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        margin: 0 20px;
        margin-top: 10px;
        background-color: #004466;
    }

    .redes {
        position: absolute;
        right: 20px;
    }

    .div_logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .div_center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        position: absolute;
        left: 20px;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    button {
        display: flex;
        background-color: #004466; 
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        font-family:  "Inter";
        font-weight: 700;
        font-size: 700px;
        color: black;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    button:hover {
        background-color: #80e1ff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    nav a {
        font-size: 20px;
        padding: 10px;
        text-decoration: none;
        color: white;
    }
</style>