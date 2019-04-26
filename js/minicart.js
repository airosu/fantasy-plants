// ============================== LOCAL STORAGE ===================================

class Store {
    static getItems() {
        let items;
        if (localStorage.getItem('products') === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('products'));
        }

        return items;
    }


    static checkIfPresent(id) {
        const localProducts = this.getItems();
        let res;

        localProducts.forEach(product => {
            if (product.id == id) {
                res = true;
            } else {
                res = false;
            }
        });

        return res;
    }


    static addItem(product) {
        const localProducts = this.getItems();

        localProducts.push(product);
        localStorage.setItem('products', JSON.stringify(localProducts));
    }



    static removeItem(id) {
        const localProducts = this.getItems();

        localProducts.forEach((product, index) => {
            if (product.id == id) {
                localProducts.splice(index, 1);
            }
        });

        localStorage.setItem('products', JSON.stringify(localProducts));
    }
}



// =============================== MINICART UI ====================================

class UI {
    static displayProducts() {
        const storedProducts = Store.getItems();

        const cartProducts = storedProducts;

        cartProducts.forEach(product => UI.addProductToList(product))
    }


    static displaySubtotal() {
        const storedProducts = Store.getItems();
        let subtotal = [];

        storedProducts.forEach(product => {
            subtotal.push(product.price);
        });

        console.log(subtotal);
        let sum = [2.3, 3.4].reduce((partial_sum, a) => partial_sum + parseFloat(a));
        console.log(sum.toFixed(2));
    }


    static addProductToList(product) {
        const list = document.getElementById('minicart-products');

        const item = document.createElement('div');
        
        item.className = 'minicart-product';
        item.innerHTML = `
        <div class="minicart-product__image-container">
            <img class="minicart-product__image" src="${product['src']}">
        </div>
        <div class="minicart-product__info">
            <p class="minicart-product__name">${product.name}</p>
            <p class="minicart-product__price">${product.price} $</p>
            <a href="#" class="minicart-product__remove" data-id="${product.id}">Remove Product</a>
        </div>
        <div class="minicart-product__quantity"></div>
        `;

        list.appendChild(item);
    }

    static removeProductFromList(element) {
        element.parentElement.parentElement.remove();
    }
}






// === Initialize Minicart ===

UI.displayProducts();

