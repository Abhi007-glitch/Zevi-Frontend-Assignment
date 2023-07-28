

const OptionComponent = ({opt})=>{
return(
<div className="flex justify-start py-1">
<input type="checkbox" className="h-4 w-4 pt-1 border-gray-300 rounded mt-1 mx-1"/>
<h1 className="">{opt}</h1>
</div>
)
}


export default OptionComponent;