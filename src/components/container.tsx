import DessertCard from "./foodcard";
import ShopCart from "./shopCart";
import { getList, type Product } from "./type";
import { useState } from "react";


const Container = () => {
    const [products, setProducts] = useState<Product[]>(getList());
    const cartItems = products.filter(p => p.quantity > 0);

    const handleUpdateQuantity = (productName: string, delta: number) => {
        setProducts(prevProducts => 
            prevProducts.map(product => {
                if (product.name === productName) {
                    const newQuantity = Math.max(0, product.quantity + delta);
                    return { ...product, quantity: newQuantity };
                }
                return product;
            })
        );
    };

    const handleRemove = (productName: string) => {
        setProducts(prevProducts => {    
            return prevProducts.map(product => {
                if (product.name === productName) {
                    return { ...product, quantity: 0 }; 
                }
                return product;
            });
        });
    };
    return (
        <div>
            <h1>Desserts</h1>
            <div>
                {products.map(product => (
                    <DessertCard 
                        key={product.name}
                        product={product}
                        onIncrement={() => handleUpdateQuantity(product.name, 1)}
                        onDecrement={() => handleUpdateQuantity(product.name, -1)}/>
                ))}
            </div>
            <ShopCart 
                productList={cartItems}
                onRemoveItem={(name) => handleRemove(name)}/>
        </div>
    )
}

export default Container;