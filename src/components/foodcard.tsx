export interface DessertImage {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface Dessert {
  image: DessertImage;
  name: string;
  category: string;
  price: number;
}

const DessertCard = ({ dessert }: { dessert : Dessert }) => {
    return (
        <div>
            
        </div>
    )
}

export default DessertCard;