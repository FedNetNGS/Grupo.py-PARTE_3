import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const id_del_equipo = params.id;
    const url = `http://localhost:8000/equipos/${id_del_equipo}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Equipo no encontrado');
    }

    const urlintegrantes = `http://localhost:8000/equipos/${id_del_equipo}/integrantes`;
    const response2 = await fetch(urlintegrantes);

    if (!response2.ok) {
        throw new Error('Integrantes del equipo no encontrados');
    }

    const integrantes = await response2.json();
    const equipo = await response.json();


    let urlpokemons = new URL('http://localhost:8000/pokemon/')
    const responsepokemons = await fetch(urlpokemons);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
 
    let pokemones = await responsepokemons.json();
 
    return {
        equipo,
        integrantes,
        pokemones: pokemones
    };
}

export const actions = {
    inscribir: async ({ request }) => {
        const data = await request.formData();

        let url = new URL(`http://localhost:8000/equipos/${data.get('id')}/inscribir_integrante/`);
        let params = { id_del_integrante: data.get('id_pokemon') };
        url.search = new URLSearchParams(params).toString();

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw error(response.status, 'Error al inscribir el Pokémon');
        }
    },
    desinscribir: async ( { request } ) => {
        const data = await request.formData();

        let url = new URL(`http://localhost:8000/equipos/${data.get('id')}/desinscribir/`);
        let params = { equipo_id: data.get('id_equipo') };
        url.search = new URLSearchParams(params).toString();

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            error(response.status, 'Algo falló');
       }
    }
}