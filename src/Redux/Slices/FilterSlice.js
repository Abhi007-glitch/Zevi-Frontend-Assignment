
import { createSlice } from "@reduxjs/toolkit";
import { clothsDetails } from "../../data/details";

const data= clothsDetails.data;

const FilterSliceConfig = { name: "cart", 
                     initialState : {items:[data],filters:0},
                     reducers: {
                      applyFilter:(state,action)=>{
                        let category = action.payload.category;
                        let type = action.payload.type;
                        

                        
                         state.items = state.items.filter((item)=>{
                             if (item.category==category && item.type==type)
                             {
                                return true;
                             }
                             else 
                             {
                                return false;
                             }
                          });
                          state.filters=state.filters+1;
                        
                      },
                      removeFilter:(state,action)=>{
                        let category = action.payload.category;
                        let type = action.payload.type;

                        if (count==1)
                        {
                           state.items = data;
                           state.filters=0;
                        }
                        else 
                        {
                          
                          
                        }

                        
                      }


                     } };

const FilterSlice = createSlice(FilterSliceConfig);

export const {} = cartSlice.actions;

export default cartSlice.reducer;
