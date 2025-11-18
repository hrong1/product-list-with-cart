import DessertCard, { type Dessert, type DessertImage } from "./foodcard";
import data from '../assets/data.json';


const Container = () => {

    const dessetData: Dessert[] = data;
    
    return (
        <div>
            <h1>Desserts</h1>
            <div>
                {dessetData.map(dessert => (
                    <DessertCard dessert={dessert}/>
                ))}
            </div>
        </div>
    )
}

export default Container;