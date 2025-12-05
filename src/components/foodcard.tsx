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
    const buttonClass = `flex p-2 px-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full  items-center w-30 min-w-fit`
    const iconClass = `border border-white rounded-full p-0.5 w-3 h-3 cursor-pointer`
    const itemSelected = product.quantity > 0;
    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="relative flex flex-col gap-5 w-fit">
                <picture className={`flex rounded-2xl overflow-hidden w-full h-full border-2 object-cover ${itemSelected ? 'border-red' : 'border-transparent'}`}>
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
                { itemSelected ? (
                    <div 
                        className={`${buttonClass} justify-between bg-red text-white text-sm`}>
                        <button className={`${iconClass} `} onClick={onDecrement} type="button">
                            <img className="w-full h-auto" src={Decrement} alt=""/>
                        </button>
                        {product.quantity}
                        <button className={`${iconClass}`} onClick={onIncrement} type="button">
                            <img src={Increment} alt=""/>
                        </button>
                    </div>
                ):(
                    <button 
                        className={`${buttonClass} justify-center bg-white border border-rose-500 text-red-900 text-sm text-nowrap cursor-pointer hover:border-red`}
                        onClick={onIncrement} 
                        type="button">
                        <img className="mr-1" src={AddCart} alt=""/>
                        Add to Cart
                    </button>
                )}
            </div>
            <div>
                <span className="text-xs text-rose-500">{product.category}</span>
                <h5 className="font-semibold text-rose-900 text-sm">{product.name}</h5>
                <span className="text-xs font-medium text-red">${product.price.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default DessertCard;