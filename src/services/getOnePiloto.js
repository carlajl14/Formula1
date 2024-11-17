//Obtener informacion de un piloto
const getOnePiloto = async(driver_number) => {
    const url = "https://api.openf1.org/v1/position?driver_number="+ driver_number;
    const res = await fetch(url);
    const piloto = await res.json();
    console.log(piloto);
    return piloto;
}

export default getOnePiloto;