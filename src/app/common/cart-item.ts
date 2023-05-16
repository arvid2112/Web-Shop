import { Product } from './product';

export class CartItem {

    id: string;
    title: string;
    image: string;
    price: number;

    quantity: number;

    constructor(product: Product) {
        this.id = product.id;
        this.title = product.title;
        this.image = product.image;
        this.price = product.price;

        this.quantity = 1;
    }
}

