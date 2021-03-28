async function getWeather() {
    const response_datum = await fetch('http://localhost:8080/datum')
    const data_datum = await response_datum.text();

    const response_prognoza = await fetch('http://localhost:8080/prognoza')
    const data_prognoza = await response_prognoza.text();


    return data_datum + " -> " + data_prognoza;
}

document.addEventListener("DOMContentLoaded", async() => {
    let weather = ''
    try {
        weather = await getWeather();

        const test = document.getElementById('app');

        test.innerHTML = weather;
    } catch(e) {
        console.log("Error: ", e);
    }
    console.log("Prognoza ",weather);
});