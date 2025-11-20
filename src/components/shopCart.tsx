import emptyCart from '../assets/images/illustration-empty-cart.svg';

export interface productProps {
    name: string
    thumbnail: string;
    price: number;
    number: number;
}

export interface productList {
    productList: productProps[];
}



const ShopCard = ({ productList }: productList) => {
    const itemNumber = productList.reduce((total, product) => {
        total += product.number
        return total;
    }, 0)
    return (
        <div>
            <h3>Your Cart ({itemNumber})</h3>
            {itemNumber !==0 ? (
                <div>Item</div>
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