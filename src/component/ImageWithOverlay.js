import React from "react";
import { clothsDetails } from "../data/details";



const ImageWithOverlay = () => {
    const data = clothsDetails.data;
  return (
    
    <div class="relative flex w-1/4  group"
        href="##">
        <img class="absolute inset-0 object-cover
                     group-hover:opacity-50"
            src=
{data[0].url} />
        <div class="relative p-5">
            <div class="mt-40">
                {/* Hidden content */}
                <div class="transition-all transform
                    translate-y-8 opacity-0
                    group-hover:opacity-100
                    group-hover:translate-y-0">
                    <div class="p-2">
                        <p class="text-lg text-white">
                            Welcome to GeeksforGeeks.
                        </p>
                        
                    </div>
                </div>
                {/* End of hidden content */}
            </div>
        </div>
    </div>

  );
};

export default ImageWithOverlay;
