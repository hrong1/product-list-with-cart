import DessertCard, { type DessertCardProps, type DessertImage } from "./foodcard";
import data from '../assets/data.json';

interface Thumbnail {
    name: string
    thumbnail: string;
}

const imageModules = import.meta.glob('../assets/images/*.jpg', 
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


const Container = () => {
    
    return (
        <div>
            <h1>Desserts</h1>
            <div>
                {dessetData.map(dessert => (
                    <DessertCard />
                ))}
            </div>
        </div>
    )
}

export default Container;