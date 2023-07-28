import { clothsDetails } from "../data/details";
import ImageWithOverlay from "./ImageWithOverlay";
import ItemCard from "./ItemCard";

const Home = ()=>{
    const data = clothsDetails.data;
     console.log(data);
     return(
        <>
        <h1>data consoled</h1>

        <div className="">
        {
        }
        </div>
       <ItemCard {...data[0]}/>
        
        </>
     );
};


export default Home;