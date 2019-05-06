

// ====================================== PRODUCT CLASS ====================================

class Product {
    constructor(id, name, price, total, img, qty) {
        this.id = id
        this.name = name
        this.price = price
        this.total = total
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
        let miniList = [];

        for (let i of items) {
            miniList.push(i.id);
        }
        
        return miniList.includes(id);
    }



    static addItem(product) {
        let items = this.getItems();

        items.push({
            "id": product.id,
            "qty": product.qty,
            "price": product.price,
            "total": product.price,
        });

        localStorage.setItem('products', JSON.stringify(items));
    }

    static updateItem(id) {
        let items = this.getItems();

        for (let i of items) {
            if (i.id == id) {
                i.qty++;
                i.total = (parseFloat(i.price) + parseFloat(i.total)).toFixed(2)
            } 
        }

        localStorage.setItem('products', JSON.stringify(items));
    }



    static decreaseQty(id) {
        let items = this.getItems();

        for (let i of items) {
            if (i.id == id) {
                if (i.qty > 1) {
                    i.qty--;
                    i.total = (parseFloat(i.total) - parseFloat(i.price)).toFixed(2)
                }
            }
        }

        localStorage.setItem('products', JSON.stringify(items));
    }




    static removeItem(id) {
        let items = this.getItems();

        for (let i of items) {
            if (i.id == id) {
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
            for (let stored of storedProducts) {
                if (product.id == stored.id) {
                    let finalProduct = new Product(product.id, product.name, product.price, stored.total, product.src, stored.qty);
                    cartProducts.push(finalProduct);
                }
            }
        }
        return cartProducts;
    }
}






// ======================================= UI PRODUCTS =====================================


class UI {
    static displayVisibleMinicart() {
        document.querySelector('.minicart__wrapper').classList.remove('hide');
        document.querySelector('.minicart__no-items').classList.remove('show');

    }

    static displayEmptyMinicart() {
        document.querySelector('.minicart__wrapper').classList.add('hide');
        document.querySelector('.minicart__no-items').classList.add('show');
    }

    // Executed once, on page load
    static initializeMinicart() {
        if (Store.getItems().length >0 ) {
            this.displayVisibleMinicart();
        } else {
            this.displayEmptyMinicart();
        }

        this.displayProducts();
        this.displayMinicart();
    }



    

    static displayProducts() {
        const products = Cart.getProducts();

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

        products.forEach(product => priceList.push(product.total));
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
        item.classList.add(`product-${product.id}`);
        item.innerHTML = `
        <div class="minicart-product__image-container">
            <img class="minicart-product__image" src="${product.img}">
        </div>
        <div class="minicart-product__info">
            <p class="minicart-product__name">${product.name}</p>
            <p class="minicart-product__price mini-price">${product.price} $</p>
            <a href="#" class="minicart-product__remove" data-id="${product.id}">Remove Product</a>
        </div>
        <div class="minicart-product__quantity-container">
            <div class="minicart-product__quantity-main">
                <a class="minicart-product__change"><span class="minicart-product__minus-sign minicart-qty-change" data-id="${product.id}">-</span></a>
                <span class="minicart-product__quantity mini-qty">${product.qty}</span>
                <a class="minicart-product__change"><span class="minicart-product__plus-sign minicart-qty-change" data-id="${product.id}">+</span></a>
            </div>
        </div>
        `;

        list.appendChild(item);
    }



    static updateProduct(productId) {
        const products = Cart.getProducts();
        const qty = document.querySelector(`.product-${productId} .mini-qty`);
        const price = document.querySelector(`.product-${productId} .mini-price`);

        for (let p of products) {
            if (p.id == productId) {
                qty.innerText = p.qty;
                price.innerText = `${p.total} $`;
            }
        }
    }





    static removeProduct(element) {
        element.parentElement.parentElement.remove();

    }
}





// === Initialize Minicart ===

UI.initializeMinicart();

