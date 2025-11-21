import data from '../assets/data.json';

export interface Product {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
    quantity: number;
}

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

function getData(): Product[] {
    return data.map((element) => ({
        image: {
            thumbnail: getImageUrl(element.image.thumbnail),
            mobile: getImageUrl(element.image.mobile),
            tablet: getImageUrl(element.image.tablet),
            desktop: getImageUrl(element.image.desktop)
        },
        name: element.name,
        category: element.category,
        price: element.price,
        quantity: 0
    }));
}

export function getList() {
    return getData();
}