export async function load({ params }) {
    const id = params.id;
    const url = `http://localhost:8000/moves/${id}/`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error al cargar el movimiento: ${response.status}`);
    }

    const move = await response.json();

    return {
        move
    };
}
