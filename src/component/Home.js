import { clothsDetails } from "../data/details";


import ItemCard from "./ItemCard";

const Home = ()=>{
    const data = clothsDetails.data;
     console.log(data);
     return(
        <div className="flex justify-center pt-2 lg:w-11/12 ">
       
       
        <div className=" w-3/4 lg:w-5/6 md:w-5/6 h-full flex justify-center ">
        <div className="w-full  h-full flex flex-wrap justify-evenly mx-3">
        {data.map((item)=>{ return <ItemCard {...item}/>})}
        </div>
        </div>
        
       
        
        </div>
     );
};


export default Home;