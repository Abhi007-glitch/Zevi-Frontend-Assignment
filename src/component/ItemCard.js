import { useState } from "react";
import CardDetail from "./CardDetail";

const ItemCard = (props) => {
  const url = props.url;
  const id = props.id;
  const [liked, setLiked] = useState(false);

  return (
    <div className=" group flex flex-col justify-center w-40 h-60 lg:w-48 lg:h-[350px] md:w-48 md:h-[350px] ">
      <div className=" border-2 relative w-full h-full rounded-md flex flex-col   ">
        <img src={url} className="w-full h-full  object-cover  " />
        <div className="absolute h-8  bottom-0 w-full flex justify-center items-center bg-light-purple opacity-0 group-hover:opacity-70 transition-opacity">
          <h1 className="text-base font-sans line-height: 1rem font-normal text-white">
            View Product
          </h1>
        </div>

        <div
          onClick={() => {
            setLiked(!liked);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 absolute top-2 right-2 z-10 ${
              liked ? "fill-red-600" : "fill-none"
            }  ${
              liked
                ? "stroke-width-0 stroke-none"
                : "stroke-width-1 stroke-white"
            }`}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className={`w-6 h-6 absolute top-2 right-2 z-10 ${liked? "fill-red-700":"fill-white"}`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg> */}
        </div>
      </div>
      <CardDetail {...props} />
    </div>
  );
};

export default ItemCard;
