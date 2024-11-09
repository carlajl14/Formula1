//Obtener informacion de un circuito
const getOneCircuit = async(circuit_key) => {
    const url = "https://api.openf1.org/v1/meetings?year=2024&circuit_key=" + circuit_key;
    const res = await fetch(url);
    const circuit = await res.json();
    console.log(circuit);
    return circuit;
}

export default getOneCircuit;