export async function load({ params }) {
    const id = params.id; 
    const url = `http://localhost:8000/natures/${id}/`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error al cargar la naturaleza: ${response.status}`);
    }

    const nature = await response.json();

    return {
        nature
    };
}