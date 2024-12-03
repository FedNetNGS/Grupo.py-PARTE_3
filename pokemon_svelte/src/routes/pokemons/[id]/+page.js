export async function load({ params }) {
    const id = params.id;
    const pokurl = `http://localhost:8000/pokemon/${id}`;
    const response = await fetch(pokurl);

    if (!response.ok) {
        throw new Error('Pokémon no encontrado');
    }

    const pokemon = await response.json();

    return {
        pokemon,
    };
}