import DessertCard from "./foodcard";
import ShopCard from "./shopCart";
import { getList, type Product } from "./type";
import { useState } from "react";


const Container = () => {
    const dessertCardList: Product[] = getList();
    const [cartItems, setCartItems] = useState<Product[]>([]);
    return (
        <div>
            <h1>Desserts</h1>
            <div>
                {dessertCardList.map(dessert => (
                    <DessertCard 
                        key={dessert.name}
                        product={dessert}/>
                ))}
            </div>
            <ShopCard productList={cartItems}/>
        </div>
    )
}

export default Container;