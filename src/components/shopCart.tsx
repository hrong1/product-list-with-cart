import emptyCart from '../assets/images/illustration-empty-cart.svg';
import removeIcon from '../assets/images/icon-remove-item.svg';
import tree from '../assets/images/icon-carbon-neutral.svg';
import { type Product } from "./type";

interface ShopCartProps {
    productList: Product[];
    onRemoveItem: (productName: string) => void;
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const ShopCart = ({ productList, onRemoveItem }: ShopCartProps) => {
    const itemNumber = productList.reduce((total, p) => total + p.quantity, 0);
    const totalPrice = productList.reduce((total, p) => total + (p.price * p.quantity), 0);
    
    return (
        <div>
            <h3>Your Cart ({itemNumber})</h3>
            {itemNumber > 0 ? (
                <div>
                    <ul>
                        {productList.map(product => (
                            <li key={product.name}>
                                <h5>{product.name}</h5>
                                <div>
                                    <span>{product.quantity}×</span>
                                    <span>@ {currencyFormatter.format(product.price)}</span>
                                    <span>
                                        {currencyFormatter.format(product.price * product.quantity)}
                                    </span>
                                </div>
                                <button 
                                    onClick={() => onRemoveItem(product.name)}
                                    type='button' 
                                    aria-label='remove product'>
                                    <img src={removeIcon} alt=''/>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <span>Total</span>
                        <span>
                            {currencyFormatter.format(totalPrice)}
                        </span>
                    </div>
                    <div>
                        <img src={tree} alt=''/>
                        This is <b>carbon-neutral</b> delivery
                    </div>
                    <button type='button'>
                        Confirm Order
                    </button>
                </div>
            ) : (
                <div>
                    <img src={emptyCart} alt=''/>
                    <span>Your added items will appear here</span>
                </div>
            )}
        </div>
    )
}

export default ShopCart;