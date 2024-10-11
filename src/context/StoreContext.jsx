import { createContext, useState } from "react";
// import { foodList } from "../assets";


const StoreContext = createContext(null);


// const StoreContextProvider = (props) => {

//     const contextValue = {
//         foodList
//     }

//     return (
//         <StoreContextProvider value={contextValue}>
//             {props.children}
//         </StoreContextProvider>
//     )
// }

export default StoreContext