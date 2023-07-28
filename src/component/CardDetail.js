import { useState } from "react";
import RatingComponent from "./RatingComponent";


const CardDetail = ({name,rating,price,MRP,noOfReviews})=>{

noOfReviews=210;
return (  <div className="flex flex-col justify-start py-2 ">
<h1 className="font-normal font-sans text-base ">Round neck cotton Tee</h1>
<div class="flex items-center">
<span class="text-gray-400 text-base line-through mr-2">Rs. 599</span>
<span class="text-light-purple text-base font-sans font-medium ">Rs.549</span>
</div>
<div className="flex ">
    <RatingComponent stars={5}/> 
    <h1 className="font-light font-sans p-[2px] text-xs text-gray-600">({noOfReviews}) </h1>
</div>
  
</div>)    
  

}

export default CardDetail;