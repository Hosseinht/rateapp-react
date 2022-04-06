import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import RateList from "./components/RateList";
import RateData from "./data/RateData";
import {useState} from "react";
import RateStats from "./components/RateStats";
import RateForm from "./components/RateForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";


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
        <Router>
            <Header reverse={reverse} setReverse={setReverse}/>
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <RateForm handleAdd={addRate}/>
                            <RateStats rateData={rateData}/>
                            <RateList
                                reverse={reverse}
                                rateData={rateData}
                                handleDelete={deleteRateData}
                            />
                        </>
                    }>

                    </Route>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
                <AboutIconLink/>
            </div>
        </Router>
    );
}

export default App;
