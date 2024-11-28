export async function load() {
    const url = 'http://localhost:8000/equipos/';
    const responseTeams = await fetch(url);

    if (!responseTeams.ok) {
        return {
            status: responseTeams.status,
            error: new Error(`Error al obtener los equipos: ${responseTeams.statusText}`)
        };
    }


    
    const urlintegrantes = 'http://localhost:8000/equipos/integrantes_disponibles';
    const responseintegrantes = await fetch(urlintegrantes);

    if (!responseintegrantes.ok) {
        return {
            status: responseintegrantes.status,
            error: new Error(`Error al obtener los integrantes disponibles: ${responseintegrantes.statusText}`)
        };
    }

    let integrantes = await responseintegrantes.json();
    let equipos = await responseTeams.json();


    return {
        equipos: equipos,
        integrantes: integrantes,

    };
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();

        const nombre_de_equipo = data.get('nombre');
        const integrantes = JSON.parse(data.get('integrantes') || '[]');


        const payload = { nombre_de_equipo, integrantes };

        console.log(payload);

        let url = new URL('http://localhost:8000/equipos/');
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Error al crear el equipo: ${response.status}`);
        }
    },
}