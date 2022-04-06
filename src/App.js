import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header";
import RateList from "./components/RateList";
import RateData from "./data/RateData";
import {useState} from "react";
import RateStats from "./components/RateStats";
import RateForm from "./components/RateForm";


function App() {
    const [rateData, setRateData] = useState(RateData)
    const [reverse, setReverse] = useState(false)

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

    return (
        <>
            <Header reverse={reverse} setReverse={setReverse}/>
            <div className='container'>
                <RateForm handleAdd={addRate}/>
                <RateStats rateData={rateData}/>
                <RateList
                    reverse={reverse}
                    rateData={rateData}
                    handleDelete={deleteRateData}
                />
            </div>
        </>
    );
}

export default App;
