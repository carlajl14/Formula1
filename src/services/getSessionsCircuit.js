//Obtener informacion de las sesiones de un circuito
const getSessionsCircuit = async(circuit_key) => {
    const url = "https://api.openf1.org/v1/sessions?circuit_key=" + circuit_key +"&year=2024";
    const res = await fetch(url);
    const sessions = await res.json();
    console.log(sessions);
    return sessions;
}

export default getSessionsCircuit;