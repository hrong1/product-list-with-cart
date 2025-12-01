import emptyCart from '../assets/images/illustration-empty-cart.svg';
import removeIcon from '../assets/images/icon-remove-item.svg';
import tree from '../assets/images/icon-carbon-neutral.svg';
import { type Product, currencyFormatter } from "./type";

interface ShopCartProps {
    productList: Product[];
    onRemoveItem: (productName: string) => void;
    totalPrice: number;
    orderConfirmed: () => void;
}

const ShopCart = ({ productList, onRemoveItem , totalPrice, orderConfirmed}: ShopCartProps) => {
    const itemNumber = productList.reduce((total, p) => total + p.quantity, 0);
    
    return (
        <div className='rounded-xl p-5 w-full flex flex-col bg-white h-fit'>
            <h3 className='text-red text-2xl font-bold'>Your Cart ({itemNumber})</h3>
            {itemNumber > 0 ? (
                <div className='flex flex-col gap-5 mt-2'>
                    <ul className='flex flex-col'>
                        {productList.map(product => (
                            <li className='grid grid-cols-[1fr_auto] grid-rows-2 border-b border-rose-100' key={product.name}>
                                <h5 className='col-1 row-1 font-bold text-xs text-rose-900 self-center'>{product.name}</h5>
                                <div className='flex gap-3 col-1 row-2 self-center pb-2'>
                                    <span className='text-red text-sm font-bold'>{product.quantity}x</span>
                                    <span className='text-sm text-rose-500'>@ {currencyFormatter.format(product.price)}</span>
                                    <span className='text-sm text-rose-400 font-semibold'>
                                        {currencyFormatter.format(product.price * product.quantity)}
                                    </span>
                                </div>
                                <button 
                                    className='col-2 row-span-2 border border-rose-500 rounded-full w-3 h-3 cursor-pointer self-center'
                                    onClick={() => onRemoveItem(product.name)}
                                    type='button' 
                                    aria-label='remove product'>
                                    <img className='place-self-center' src={removeIcon} alt=''/>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className='flex items-center justify-between'>
                        <span>Order Total</span>
                        <span className='text-3xl font-bold text-rose-900'>
                            {currencyFormatter.format(totalPrice)}
                        </span>
                    </div>
                    <div className='bg-rose-50 rounded-lg flex items-center justify-center p-2' >
                        <img  src={tree} alt=''/>
                        <span className='ml-2 text-xs text-rose-900 text-nowrap'>This is a <b className='font-semibold'>carbon-neutral</b> delivery</span>
                    </div>
                    <button className='bg-red text-white rounded-full w-full p-2 cursor-pointer hover:bg-rose-500' type='button' onClick={orderConfirmed}>
                        Confirm Order
                    </button>
                </div>
            ) : (
                <div className='w-full h-auto flex flex-col justify-center items-center mt-10 gap-5 text-center'>
                    <img className='' src={emptyCart} alt=''/>
                    <span className='text-rose-500 font-semibold'>Your added items will appear here</span>
                </div>
            )}
        </div>
    )
}

export default ShopCart;