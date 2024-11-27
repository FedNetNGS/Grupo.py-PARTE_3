export async function load() {
    const url = 'http://localhost:8000/equipos/';
    const responseTeams = await fetch(url);

    if (!responseTeams.ok) {
        return {
            status: responseTeams.status,
            error: new Error(`Error al obtener los equipos: ${responseTeams.statusText}`)
        };
    }

    let equipos = await responseTeams.json();
    
    const urlintegrantes = 'http://localhost:8000/equipos/integrantes_disponibles';
    const responseintegrantes = await fetch(urlintegrantes);

    if (!responseintegrantes.ok) {
        return {
            status: responseintegrantes.status,
            error: new Error(`Error al obtener los integrantes disponibles: ${responseintegrantes.statusText}`)
        };
    }

    let integrantes = await responseintegrantes.json();


    return {
        equipos: equipos,
        integrantes: integrantes,

    };
}

