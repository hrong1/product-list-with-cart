import { type Product, currencyFormatter } from "./type";
import confirmed from '../assets/images/icon-order-confirmed.svg'

interface ShopCartInfo {
    OrderInfo: Product[];
    closeMenu: () => void;
    totalPrice: number;
}

const OrderConfirm = ({OrderInfo, closeMenu, totalPrice} : ShopCartInfo) => {
    

    return (
        <>
            <div onClick={closeMenu} aria-hidden="true" />
            <div>
                <img src={confirmed} alt=''/>
                <h3>Order Confirm</h3>
                <span>We hope you enjoy your food!</span>
                <ul>
                    {OrderInfo.map(product => (
                        <li key={product.name}>
                            <img src={product.image.thumbnail}/>
                            <div>
                                <h5>{product.name}</h5>
                                <span>{product.quantity}</span>
                                <span>{currencyFormatter.format(product.price)}</span>
                            </div>
                            <p>{currencyFormatter.format(product.price * product.quantity)}</p>
                        </li>
                    ))}
                </ul>
                <div>
                    <p>Total</p>
                    <p>{currencyFormatter.format(totalPrice)}</p>
                </div>
                <button type="button" onClick={closeMenu}>
                    Start New Order
                </button>
            </div>
        </>
    )
}

export default OrderConfirm;