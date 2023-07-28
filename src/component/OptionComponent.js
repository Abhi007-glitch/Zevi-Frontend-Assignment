import RatingComponent from "./RatingComponent";


const OptionComponent = ({opt,id})=>{
return(
<div id={id} className="flex justify-start py-1">
<input type="checkbox" className="h-4 w-4 pt-1 border-gray-300 rounded mt-1 mx-1"/>
{(typeof opt === 'string')?( (<h1 className="">{opt}</h1>)):(<RatingComponent rating={opt}/>)  }

</div>
)
}


export default OptionComponent;