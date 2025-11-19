export interface DessertImage {
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface DessertCardProps {
    dessertImage: DessertImage;
    name: string;
    category: string;
    price: number;
}

const DessertCard = ({ dessertImage, name, category, price }: DessertCardProps) => {
    return (
        <div>
            <picture>
                <source
                media="(min-width: 1024px)"
                srcSet={dessertImage.desktop}
                />
                <source
                media="(min-width: 768px)"
                srcSet={dessertImage.tablet}
                />
                <img
                src={dessertImage.mobile}
                alt=""
                />
            </picture>
            <div>
                <span>{category}</span>
                <h5>{name}</h5>
                <span>${price}</span>
            </div>
        </div>
    )
}

export default DessertCard;