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

    return (
        <>
            <Header reverse={reverse} setReverse={setReverse}/>
            <div className='container'>
                <RateForm/>
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
