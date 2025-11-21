import { type Product } from "./type";

const DessertCard = ({ product }: { product: Product }) => {
    return (
        <div>
            <picture>
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
            <div>
                <span>{product.category}</span>
                <h5>{product.name}</h5>
                <span>${product.price.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default DessertCard;