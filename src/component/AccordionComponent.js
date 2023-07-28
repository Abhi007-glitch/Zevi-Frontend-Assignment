import { useState } from "react";
import OptionComponent from "./OptionComponent";


const AccordionComponent = ({data,type,id})=>{
    
   
    const [visible, setVisible] = useState(true);
   
 
return (
<div id={id} className="flex flex-col w-full justify-center items-center">
    
    <div className="flex flex-wrap w-full  justify-around ">
    <div>
    <h1 className="from-bold text-xl">{type}</h1>
    {(visible===true )?
    (<div className="flex flex-col  justify-center  w-full  ">
{   
    (data).map((item,i)=>{
        
return <OptionComponent opt={item} id={i}/>
        })
}
    </div>):<></>}

    </div> 
    <div  className="top-3 right-3">
    <button onClick={()=>{setVisible((visible===true)?(false):true)}}   >
        { visible?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
 }
        </button>

    </div>
        
        
    </div>


    {/* conditional rendering */}
    {/* Accordian */}
 

<div className=" h-[1px] w-3/4 bg-zinc-300 my-8"> 
</div>
  
</div>
);
}



export default AccordionComponent;