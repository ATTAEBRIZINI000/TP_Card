import { Product } from './Product';

export class Cart {
    private cartItems: Product[] = [];

    addProduct(product: Product): any {
        this.cartItems.push(product);
    }

    getTotalPrice(): number {
        return this.cartItems.reduce((total, product) => total + product.price, 0);
    }
    
}