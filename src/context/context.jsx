import { createContext, useContext, useEffect, useReducer } from "react"
import Reducer from "./reducer";

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    text:""
}
   
export const FilterContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState);
    const getValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        console.log(name);
        console.log(value);
    
         dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
      };

    return (
        <FilterContext.Provider
          value={{
            ...state,
            getValue
          }}
        >
          {children}
        </FilterContext.Provider>
      );

 
}

export const useFilterContext = () => {
    return useContext(FilterContext);
  };