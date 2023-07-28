
const NavBar = ()=>{
    return (<div className="w-screen py-4 flex justify-center">
     
     <div className="flex justify-between lg:w-1/3  md:w-1/3 w-2/5 rounded-2xl border-2 h-12">
           <input  type="text " className=" w-full ml-1 border-none  " placeholder="Search" />
           <button className="mx-2"  type="submit" 
           ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
</svg>
</button>
        </div>
           
    </div>)
}

export default NavBar;