import PropTypes from "prop-types";

const RateStats = ({rateData}) => {
    let average = rateData.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / rateData.length
    // accumulator + current. 0 is default for acc

    average = average.toFixed(1).replace(/[.,]0$/,'')
    // we don't want 8.6666666 or something like that. if it is 0 replace it with nothing

    return (
        <div className='feedback-stats'>
           <h4>{rateData.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
};

RateStats.prototype = {
    rateData: PropTypes.array.isRequired
}

export default RateStats;
