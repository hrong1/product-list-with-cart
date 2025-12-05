import DessertCard from "./foodcard";
import ShopCart from "./shopCart";
import OrderConfirm from "./OrderConfirm";
import { getList, type Product } from "./type";
import { useState } from "react";


const Container = () => {
    const [products, setProducts] = useState<Product[]>(getList());
    const [isConfirmed, setOrderConfirmed] = useState(false);
    const cartItems = products.filter(p => p.quantity > 0);
    const totalPrice = cartItems.reduce((total, p) => total + (p.price * p.quantity), 0);
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

    const handleConfirmOrder = (isConfirmed: boolean) =>{
        setOrderConfirmed(isConfirmed);
    }

    const handleCartClear = () => {
        setOrderConfirmed(false)
        setProducts(getList());
    }

    return (
        <div className={`flex flex-col content-center-safe justify-center p-8 gap-5 bg-rose-50 min-h-screen ${isConfirmed ? "overflow-y-hidden" : ""}`}>
            <h1 className="font-bold text-3xl text-rose-900">Desserts</h1>
            <div className="md:grid md:grid-cols-[1fr_18rem] md:gap-5">
                <div className="flex flex-col gap-5 md:grid md:grid-cols-3 w-full">
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
                    onRemoveItem={(name) => handleRemove(name)}
                    totalPrice={totalPrice}
                    orderConfirmed={() => handleConfirmOrder(true)}
                />
            </div>
            {isConfirmed && 
                <OrderConfirm 
                    OrderInfo={cartItems}
                    closeMenu={handleCartClear}
                    totalPrice={totalPrice}
                />
            }
        </div>
    )
}

export default Container;