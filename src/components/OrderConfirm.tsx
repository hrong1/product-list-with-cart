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
            <div className="fixed inset-0 bg-black/50" onClick={closeMenu} aria-hidden="true" />
            <div className="fixed left-0 bottom-0 bg-white w-full  rounded-t-2xl animate-slide-up md:max-w-120 md:rounded-2xl md:left-1/2 md:bottom-1/2 md:transform-[50%_50%] md:-translate-x-1/2 md:translate-y-1/2 overflow-hidden">
                <div className="max-h-[90vh] overflow-y-auto overscroll-contain flex flex-col gap-3 h-full p-5">
                    <img className="max-w-10 max-h-10" src={confirmed} alt=''/>
                    <h3 className="text-4xl font-bold text-rose-900">Order Confirm</h3>
                    <span className="text-rose-400">We hope you enjoy your food!</span>
                    <ul className="bg-rose-100 p-3 rounded-xl flex flex-col">
                        {OrderInfo.map(product => (
                            <li className="grid grid-cols-[auto_1fr_auto] gap-3 justify-center items-center border-b border-b-rose-400 py-3" key={product.name}>
                                <img className="block rounded-xl" src={product.image.thumbnail}/>
                                <div className="min-w-0">
                                    <h5 className="truncate text-rose-900 font-bold text-sm">{product.name}</h5>
                                    <span className="text-red font-bold text-sm">{product.quantity}x</span>
                                    <span className="text-rose-500 text-sm px-2">@{currencyFormatter.format(product.price)}</span>
                                </div>
                                <p className="text-rose-900 font-bold">{currencyFormatter.format(product.price * product.quantity)}</p>
                            </li>
                        ))}
                        <div className="flex justify-between items-center mt-3">
                            <p className="text-rose-900 text-sm">Order Total</p>
                            <p className="text-rose-900 text-2xl font-bold">{currencyFormatter.format(totalPrice)}</p>
                        </div>
                    </ul>
                    
                    <button className="bg-red text-white rounded-full w-full p-2 cursor-pointer hover:bg-rose-500" type="button" onClick={closeMenu}>
                        Start New Order
                    </button>
                </div>
            </div>
        </>
    )
}

export default OrderConfirm;