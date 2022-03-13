import RateItem from "./RateItem";


const RateList = ({rateData}) => {
    if (!rateData || rateData.length === 0) {
        return <p>No rate data yet</p>
    }
    return (
        <div className='feedback-list'>
            {rateData.map((item) => (
                <RateItem key={item.id} item={item}/>
            ))}
        </div>
    );
};

export default RateList;
