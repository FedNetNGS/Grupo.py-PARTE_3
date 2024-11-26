export async function load({ params }) {
    const id = params.id;
    const move_aprendible_url = `http://localhost:8000/pokemon/${id}/moves_aprendibles`;
    const move_aprendible_response = await fetch(move_aprendible_url);

    if (!move_aprendible_response.ok) {
        throw new Error('Movimientos no encontrados');
    }

    const move_aprendible = await move_aprendible_response.json();

    return {
        move_aprendible
    };
}