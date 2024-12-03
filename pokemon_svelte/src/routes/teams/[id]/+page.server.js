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

    let pok_id = params.id;
    let urlmoves = new URL(`http://localhost:8000/pokemon/${pok_id}/moves_aprendibles/`)
    const responsemoves = await fetch(urlmoves);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    let movimientos = await responsemoves.json();
 
    return {
        equipo,
        integrantes,
        pokemones: pokemones,
        movimientos: movimientos
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
    },
    Actualizar: async ({ request }) => {
        const data = await request.formData();

        const id_pokemon = data.get('id');

        let url = new URL(`http://localhost:8000/equipos/${data.get('id_pokemon')}/asignar_nature/`);
        let params = {
            nature_id: data.get('id_naturaleza'),
         };
        url.search = new URLSearchParams(params).toString();

        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            error(response.status, 'Algo falló');
       }

        let url_moves_aprendibles = new URL(`http://localhost:8000/equipos/${data.get('id_pokemon')}/asignar_move`);
        let params_moves = {
            move_id: data.get('id_movimiento'),
         };
        url_moves_aprendibles.search = new URLSearchParams(params_moves).toString();

        const response_moves = await fetch(url_moves_aprendibles, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            error(response.status, 'Algo falló');
       }
    },
    eliminarMoves: async ({ request }) => {
        const data = await request.formData();

        let url_moves = new URL(`http://localhost:8000/equipos/${data.get('id')}/eliminar_moves/`);
        let params_integrante = {
            id_del_integrante: data.get('id'),
         };
        url_moves.search = new URLSearchParams(params_integrante).toString();

        const response = await fetch(url_moves, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            error(response.status, 'Algo falló');
       }
    },
    
}