
(() => {
    // TODO EL CODIGO VA AQUI EN LA FUNCION ANONIMA

    console.log("Console log desde funcion anonima");
    document.getElementById("convertButton").addEventListener("click", convertir);
    document.getElementById("informationButton").addEventListener("click", showInformation);

    const currencyFrom = document.getElementById("currencyFrom");
    const currencyTo = document.getElementById("currencyTo");
    const amountFrom = document.getElementById("amountFrom");
    const amountTo = document.getElementById("amountTo");


    function convertir() {
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
                console.log(data , "response data");
                let result = data[currencyTo.value] * amountFrom.value; // ojo aqui como leeimos el valor
                amountTo.value = result.toFixed(2);
                console.log(result);
            })
            // como esto con async y await.....
            // como cargo dinamicamente los select.....
    }

    function showInformation() {
        console.log("Se realizo un click en el boton informacion");
    }

})()

