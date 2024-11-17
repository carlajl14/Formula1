//Obtener informacion de las sesiones
const getSessions = async() => {
    const url = "https://api.openf1.org/v1/sessions?session_name=Race&year=2024";
    const res = await fetch(url);
    const sessions = await res.json();
    console.log(sessions);
    return sessions;
}

export default getSessions;