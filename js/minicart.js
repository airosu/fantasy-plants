

// ====================================== PRODUCT CLASS ====================================

class Product {
    constructor(id, name, price, img, qty) {
        this.id = id
        this.name = name
        this.price = price
        this.img = img
        this.qty = qty
    }
}


// ====================================== LOCAL STORAGE ====================================

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
        const items = this.getItems();
        let res;

        items.forEach(storedId => {
            if (storedId == id) {
                res = true;
            } else {
                res = false;
            }
        });

        return res;
    }



    static addItem(product) {
        let items = this.getItems();

        items.push(product.id);
        localStorage.setItem('products', JSON.stringify(items));
    }


    static removeItem(id) {
        let items = this.getItems();

        for (let i of items) {
            if (i == id) {
                items = items.filter(save => save != i);
            }
        }

        localStorage.setItem('products', JSON.stringify(items));
    }
}







// ====================================== CART PRODUCTS ====================================

class Cart {
    static getProducts() {
        let storedProducts = Store.getItems();
        let cartProducts = [];

        for (let product of localProducts) {
            for (let id of storedProducts) {
                if (product.id == id) {
                    let finalProduct = new Product(product.id, product.name, product.price, product.src, 1);
                    cartProducts.push(finalProduct);
                }
            }
        }
        return cartProducts;
    }
}






// ======================================= UI PRODUCTS =====================================


class UI {
    static displayProducts() {
        const products = Cart.getProducts();
        console.log(products);

        products.forEach(product => UI.addProduct(product))
    }

    static displayNumberOfProducts() {
        const products = Cart.getProducts();
        const total = document.getElementById('minicart-articles');

        total.innerText = products.length;
    }

    static displaySubtoalPrice() {
        const products = Cart.getProducts();
        const price = document.getElementById('minicart-subtotal');
        let priceList = [];

        products.forEach(product => priceList.push(product.price));
        price.innerText = Calc.arraySumFloat(priceList);
    }

    static displayMinicart() {
        this.displayNumberOfProducts();
        this.displaySubtoalPrice();
    }





    static addProduct(product) {
        const list = document.getElementById('minicart-products');
        const item = document.createElement('div');

        item.className = 'minicart-product';
        item.innerHTML = `
        <div class="minicart-product__image-container">
            <img class="minicart-product__image" src="${product.img}">
        </div>
        <div class="minicart-product__info">
            <p class="minicart-product__name">${product.name}</p>
            <p class="minicart-product__price">${product.price} $</p>
            <a href="#" class="minicart-product__remove" data-id="${product.id}">Remove Product</a>
        </div>
        <div class="minicart-product__quantity">${product.qty}</div>
        `;

        list.appendChild(item);
    }





    static removeProduct(element) {
        element.parentElement.parentElement.remove();
    }
}














// QA
// Store.addItem(localProducts[25]);
// Cart.getProducts();





// === Initialize Minicart ===
UI.displayProducts();
UI.displayMinicart();
