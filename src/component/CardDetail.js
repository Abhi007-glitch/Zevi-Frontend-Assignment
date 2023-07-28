import { useState } from "react";
import RatingComponent from "./RatingComponent";


const CardDetail = ({name,rating,price,MRP,noOfReviews})=>{
// console.log(rating,price, MRP,noOfReviews);

return (  <div className="flex flex-col w-full h-full justify-start py-2 ">
<h1 className="font-normal font-sans text-base ">{name}</h1>
<div className="flex items-center">
<span className="text-gray-400 text-lg line-through mr-2">Rs. {MRP}</span>
<span className="text-light-purple text-lg font-sans font-medium ">Rs.{price}</span>
</div>
<div className="flex ">
    <RatingComponent rating={rating}/> 
    <h1 className="font-light font-sans pt-[2px] text-sm text-gray-600">({noOfReviews}) </h1>
</div>
  
</div>)    
  

}

export default CardDetail;