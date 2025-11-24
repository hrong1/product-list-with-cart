import { type Product } from "./type";
import AddCart from '../assets/images/icon-add-to-cart.svg';
import Increment from '../assets/images/icon-increment-quantity.svg';
import Decrement from '../assets/images/icon-decrement-quantity.svg';

interface DessertCardProps {
    product: Product;
    onIncrement: () => void; 
    onDecrement: () => void;
}

const DessertCard = ({ product, onIncrement, onDecrement }: DessertCardProps) => {
    return (
        <div>
            <div>
                <picture>
                    <source
                    media="(min-width: 1024px)"
                    srcSet={product.image.desktop}
                    />
                    <source
                    media="(min-width: 768px)"
                    srcSet={product.image.tablet}
                    />
                    <img
                    src={product.image.mobile}
                    alt=""
                    />
                </picture>
                { product.quantity > 0 ? (
                    <div>
                        <button onClick={onDecrement} type="button">
                            <img src={Decrement} alt=""/>
                        </button>
                        {product.quantity}
                        <button onClick={onIncrement} type="button">
                            <img src={Increment} alt=""/>
                        </button>
                    </div>
                ):(
                    <button onClick={onIncrement} type="button">
                        <img src={AddCart} alt=""/>
                        Add to Cart
                    </button>
                )}
            </div>
            <div>
                <span>{product.category}</span>
                <h5>{product.name}</h5>
                <span>${product.price.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default DessertCard;