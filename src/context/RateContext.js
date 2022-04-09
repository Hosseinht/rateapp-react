import {createContext, useContext, useState} from "react";
import {v4 as uuidv4} from "uuid";


const RateContext = createContext()

export const RateProvider = ({children}) => {
    const [reverse, setReverse] = useState(false)
    const [rateData, setRateData] = useState([
        {
            id: 1,
            rating: 10,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
            id: 2,
            rating: 9,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
            id: 3,
            rating: 8,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
    ])

    const [rateEdit, setRateEdit] = useState({
        item: {},
        // whenever we click on an item the data of that item will go on to this item here
        edit: false
    })

    const deleteRateData = (id) => {
        if (window.confirm('Are you sure you want to delete?'))
            setRateData(rateData.filter((item) =>
                item.id !== id
            ))
    }

    const addRate = (newRate) => {
        newRate.id = uuidv4()
        setRateData([newRate, ...rateData])
        // state is immutable so we can't just push on to it we need to make a copy of it
    }

    const editRate = (item) => {
        setRateEdit({
            item,
            edit: true
        })
    }


    return (
        <RateContext.Provider value={{
            // rateData:rateData,
            rateData,
            deleteRateData,
            addRate,
            reverse,
            setReverse,
            editRate
        }}>
            {/*whatever we wrap. which is the children that we passed in*/}
            {children}
            {/*all our components that need to access to context*/}
        </RateContext.Provider>
    )
    // value: any value we want to passed in like state or any function to use
    // are gonna be passed into a prop of value and it's gonna be an object
}

export default RateContext;