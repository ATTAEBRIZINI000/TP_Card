import { InMemoryStorage, LocalStorage } from './services/InMemoryStorage';

import { Cart } from './Cart';
import { Product } from './Product';


const storage = new InMemoryStorage();
// const storage = new InMemoryStorage();
const cart = new Cart();

const product1 = new Product("p1", 20);
const product2 = new Product("p2", 10);

cart.addProduct(product1);
cart.addProduct(product2);


storage.save('cartData', cart);
const storedCartData = storage.get('cartData');

if (storedCartData) {
    console.log('Data retrieved from InMemoryStorage:', storedCartData);
    console.log('Total du panier:', storedCartData.getTotalPrice());
} else {
    console.log('No data found in InMemoryStorage for key "cartData".');
}
