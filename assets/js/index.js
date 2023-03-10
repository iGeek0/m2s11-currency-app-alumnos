// API DOCUMENTATION : https://github.com/fawazahmed0/currency-api
(() => {
    // TODO EL CODIGO VA AQUI EN LA FUNCION ANONIMA

    console.log("Console log desde funcion anonima");
    document.getElementById("convertButton").addEventListener("click", convertir);
    document.getElementById("informationButton").addEventListener("click", showInformation);

    const currencyFrom = document.getElementById("currencyFrom");
    const currencyTo = document.getElementById("currencyTo");
    const amountFrom = document.getElementById("amountFrom");
    const amountTo = document.getElementById("amountTo");

    function cargarMonedas() {
        console.log("entro a funcion cargar monedas");
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`;
        fetch(url, { method: "GET" })
            .then(response => response.json())
            .then((data) => {
                for (let property in data) {
                    console.log(`${property}: ${data[property]}`);
                    let option = document.createElement("option");
                    // let option = <option><option>
                    // key:value
                    option.value = property;
                    option.text = data[property] + ` (${property.toLocaleUpperCase()})`; //probar con inner i innerText
                    // let option = <option value="usd">Estados unidos<option>
                    currencyFrom.appendChild(option);
                    currencyTo.appendChild(option.cloneNode(true));
                }
            })
    }


    function convertir() {
        if (amountFrom.value <= 0) {
            // alert("El monto de origen no puede ser 0 o un numero negativo.")
            Swal.fire(
                {
                    icon: "error",
                    title: "Mensaje",
                    text: "El monto de origen debe ser mayor a 0.",
                    showCancelButton: true,
                    confirmButtonColor: '#A5E041',
                    cancelButtonColor: '#FA0CDC',
                }
            );
            return;
        }
        console.log("Se realizo un click en el boton convertir.");
        console.log(currencyFrom.value, "currencyFrom");
        console.log(currencyTo.value, "currencyTo");
        console.log(amountFrom.value, "amountFrom");
        console.log(amountTo.value, "amountTo");
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom.value}/${currencyTo.value}.json`;
        // Llamada HTTP de tipo GET
        fetch(url)
            .then(response => response.json()) // 2ms
            .then((data) => {
                console.log(data, "response data");
                let result = data[currencyTo.value] * amountFrom.value; // ojo aqui como leeimos el valor
                amountTo.value = result.toFixed(2);
                console.log(result);
            })
        // como esto con async y await.....
        // como cargo dinamicamente los select.....
    }

    function showInformation() {
        Swal.fire(
            {
                icon: "info",
                title: "Conversor v1.0",
                text: "Creado por Jesus Cardenas",
            }
        );
    }

    cargarMonedas();

})()

