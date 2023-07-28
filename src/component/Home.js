import { clothsDetails, FilteringInfo } from "../data/details";
import AccordionComponent from "./AccordionComponent";

import ItemCard from "./ItemCard";

const Home = ()=>{
    const data = clothsDetails.data;
    const categoryInfo = FilteringInfo.data;

    //  console.log(categoryInfo);
     return(
        <div className="flex justify-center pt-2 lg:w-11/12 ">
        <div className=" flex flex-col justify-end  w-1/4 lg:w-1/6 md:w-1/5 h-full">
        { categoryInfo.map((item)=>{
          {/* console.log(item.types,"   ",item.category); */}
          return (<AccordionComponent data={item.types} type={item.category}/>)
        })
        }
          

        </div>
       
        <div className=" w-3/4 lg:w-5/6 md:w-5/6 h-full flex justify-center ">
        <div className="w-full  h-full flex flex-wrap justify-evenly mx-3">
        {data.map((item)=>{ return <ItemCard {...item}/>})}
        </div>
        </div>
        
       
        
        </div>
     );
};


export default Home;