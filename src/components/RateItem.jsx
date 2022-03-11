import {useState} from "react";

const RateItem = () => {
    const [rating, setRating] = useState(1)
    const [text, setText] = useState('Rate Example')

    // const handleClick = () => {
    //     setRating(10)
    // }

    const handleClick = () => {
        setRating((prev) => {
            return prev + 1
        })
        // if we want to add number to previous number
    }
    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default RateItem;
