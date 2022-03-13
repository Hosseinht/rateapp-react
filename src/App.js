import Header from "./components/Header";
import RateList from "./components/RateList";
import RateData from "./data/RateData";
import {useState} from "react";


function App() {
    const [rateData, setRateData] = useState(RateData)

    return (
        <>
            <Header/>
            <div className='container'>
                <RateList rateData={rateData}/>
            </div>
        </>
    );
}

export default App;
