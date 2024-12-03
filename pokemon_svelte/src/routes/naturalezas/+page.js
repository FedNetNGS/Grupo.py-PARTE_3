export async function load() {
    let url = new URL('http://localhost:8000/natures/')
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
 
    let natures = await response.json();
 
    return {
        natures: natures
    };
 }