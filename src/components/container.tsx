import DessertCard from "./foodcard";
import ShopCard from "./shopCart";
import { getList, type Product } from "./type";
import { useState } from "react";


const Container = () => {
    const [products, setProducts] = useState<Product[]>(getList());
    const cartItems = products.filter(p => p.quantity > 0);
    return (
        <div>
            <h1>Desserts</h1>
            <div>
                {products.map(product => (
                    <DessertCard 
                        key={product.name}
                        product={product}/>
                ))}
            </div>
            <ShopCard productList={cartItems}/>
        </div>
    )
}

export default Container;