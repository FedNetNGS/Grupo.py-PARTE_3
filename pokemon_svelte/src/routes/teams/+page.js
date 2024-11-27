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
    
    


    return {
        equipos: equipos,
    };
}
