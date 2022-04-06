import {createContext, useState} from "react";


const RateContext = createContext()

export const RateProvider = ({children}) => {
    const [rateData, setRateData] = useState({
        id: 1,
        text: "This item is from context",
        rating: 10
    })
    return <RateContext.Provider value={{
        // rateData:rateData,
        rateData
    }}>
        {children}
    </RateContext.Provider>
    // value: any value we want to passed in like state or any function to use
    // are gonna be passed into a prop of value and it's gonna be an object
}

export default RateProvider;