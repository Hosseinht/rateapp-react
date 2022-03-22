import PropTypes from "prop-types";

const RateStats = ({rateData}) => {
    // Calculate rating average
    let average = rateData.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / rateData.length
    // accumulator + current. 0 is default for acc
    // for example we have 3 number 10, 9, 8. first is 0 + 10
    // then acc is 10 and it will be 10 +9 . and now acc is 19 and ....
    average = average.toFixed(1).replace(/[.,]0$/,'')
    // we don't want 8.6666666 or something like that. if it is 0 replace it with nothing
    // toFixed(1) mean 8.999 should be 8.9 . and replace mean 8.0 should be 8
    return (
        <div className='feedback-stats'>
           <h4>{rateData.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
            {/*if is NaN show 0 else average */}
        </div>
    );
};

RateStats.prototype = {
    rateData: PropTypes.array.isRequired
}

export default RateStats;
