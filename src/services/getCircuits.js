//Obtener todos los circuitos
const getCircuits = async() => {
    const url = "https://api.openf1.org/v1/meetings?year=2024";
    const res = await fetch(url);
    const circuits = await res.json();
    console.log(circuits);
    return circuits;
}

export default getCircuits;