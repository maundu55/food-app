import React, { createContext} from "react";
import {productsData} from '../../assets/assets'


export const ShopContext = createContext();

const ShopContextProvider =({children}) =>{


    return(
        <ShopContext.Provider>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;