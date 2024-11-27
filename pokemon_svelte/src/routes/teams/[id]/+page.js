export async function load({ params }) {
    const id = params.id;
    const url = `http://localhost:8000/equipos/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Equipo no encontrado');
    }

    const equipo = await response.json();

    const url2 = `http://localhost:8000/equipos/${id}/integrantes`;
    const response2 = await fetch(url2);

    if (!response2.ok) {
        throw new Error('Integrantes del equipo no encontrados');
    }

    const integrantes = await response2.json();

    return {
        equipo,
        integrantes,
    };
}