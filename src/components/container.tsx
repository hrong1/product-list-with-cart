import DessertCard, { type DessertCardProps, type DessertImage } from "./foodcard";
import ShopCard, { type productList, type productProps } from "./shopCart";
import data from '../assets/data.json';
import { useState } from "react";

const imageModules = import.meta.glob('../assets/images/*', 
    { 
        eager: true, 
        query: '?url', 
        import: 'default' 
    });

function getImageUrl(filename: string) {
    const pathKey = `../assets/images/${filename}`;
    const imageUrl = imageModules[pathKey];
    if (!imageUrl) {
        console.warn(`Image not found: ${pathKey}`);
        return '';
    }
    return imageUrl as string;
}

function getCardList(): DessertCardProps[] {
    return data.map((element) => ({
        dessertImage: {
            mobile: getImageUrl(element.image.mobile),
            tablet: getImageUrl(element.image.tablet),
            desktop: getImageUrl(element.image.desktop)
        },
        name: element.name,
        category: element.category,
        price: element.price,
    }));
}


const Container = () => {
    const dessertCardList: DessertCardProps[] = getCardList();
    const [cartItems, setCartItems] = useState<productProps[]>([]);
    return (
        <div>
            <h1>Desserts</h1>
            <div>
                {dessertCardList.map(dessert => (
                    <DessertCard 
                        key={dessert.name}
                        dessertImage={dessert.dessertImage}
                        name={dessert.name}
                        category={dessert.category}
                        price={dessert.price}/>
                ))}
            </div>
            <ShopCard productList={cartItems}/>
        </div>
    )
}

export default Container;