export async function load() {
    let url = `http://localhost:8000/equipos/integrantes_disponibles`;
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('Error al obtener los pokemons');
    }
    let integrantes = await response.json();

    return {
        integrantes: integrantes,
    };
}