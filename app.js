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

function getCep() {
    let cep = document.getElementById('input-cep').value;
    let url = `https://cep.awesomeapi.com.br/json/${cep}`
    if (cep.length === 8) {
        fetch(url)
            .then(response => response.json())  // converter para json
            .then(data => {
                    let address = document.getElementById('address');
                    address.value = data.address;
                    let state = document.getElementById('state');
                    state.value = data.state;
                    let district = document.getElementById('district');
                    district.value = data.district;
                    let city = document.getElementById('city');
                    city.value = data.city;
                    let ddd = document.getElementById('ddd');
                    ddd.value = data.ddd;
                }
            )
            .catch(err => console.log('Erro de solicitação', err));  // lidar com os erros por catch
    }
    else {
        alert('CEP inválido.');
    }

}
