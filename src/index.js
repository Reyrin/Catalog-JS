function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

//You can also use 'https://sleepy-cliffs-19222.herokuapp.com/3sAo6GF0v.json'

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 1000)
        
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });