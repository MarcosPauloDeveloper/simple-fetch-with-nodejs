function quotation() {
    let select_currency = document.getElementById('currency');
    let value_of_select = select_currency.options[select_currency.selectedIndex].text;
    let url = `https://economia.awesomeapi.com.br/json/last/${value_of_select}-BRL`;
    fetch(url)
        .then(response => response.json())  // converter para json
        .then(data => {
                for (let d in data) {
                    let name = document.getElementById('name');
                    name.value = data[d].name;
                    let high = document.getElementById('high');
                    high.value = data[d].high;
                    let low = document.getElementById('low');
                    low.value = data[d].low;
                    let bid = document.getElementById('bid');
                    bid.value = data[d].bid;
                }
            }
        )
        .catch(err => console.log('Erro de solicitação', err));  // lidar com os erros por catch
}
