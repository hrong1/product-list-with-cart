import emptyCart from '../assets/images/illustration-empty-cart.svg';
import removeIcon from '../assets/images/icon-remove-item.svg'
import { type Product } from "./type";



const ShopCard = ({ productList }: { productList: Product[] }) => {
    const itemNumber = productList.reduce((total, product) => {
        return total + product.number;
    }, 0);
    const totalPrice = productList.reduce((total, product) => {
        return total + (product.price * product.number);
    }, 0);
    return (
        <div>
            <h3>Your Cart ({itemNumber})</h3>
            {itemNumber !==0 ? (
                productList.map(product => (
                    <div key={product.name}>
                        <div>
                            <div>
                                <h5>{product.name}</h5>
                                <div>
                                    <span>{product.number}×</span>
                                    <span>@ ${product.price.toFixed(2)}</span>
                                    <span>
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD'
                                        }).format(product.price * product.number)}
                                    </span>
                                </div>
                                <button type='button' aria-label='remove product'>
                                    <img src={removeIcon} alt=''/>
                                </button>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>{totalPrice}</span>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <img src={emptyCart} alt={''}/>
                    <span>Your added item will appear here</span>
                </div>
            )}
        </div>
    )
}

export default ShopCard;