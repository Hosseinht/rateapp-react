import RateItem from "./RateItem";


const RateList = ({rateData , reverse,handleDelete}) => {
    if (!rateData || rateData.length === 0) {
        return <p>No rate yet</p>
    }
    return (
        <div className='feedback-list'>
            {rateData.map((item) => (
                <RateItem
                    reverse={reverse}
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default RateList;
