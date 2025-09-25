import React, { createContext, useState} from "react";
import {productsData} from '../../assets/assets'


export const ShopContext = createContext();

const ShopContextProvider =({children}) =>{

        const [products, setProducts] = useState(productsData);

    return(
        <ShopContext.Provider value ={{products}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;