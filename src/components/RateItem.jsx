import Card from "./shared/Card";
import {FaTimes} from "react-icons/fa";
import {useState} from "react";

const RateItem = ({item, reverse, handleDelete}) => {
    // const handleClick = (gooz) => {
    //     console.log(gooz)
    //     // gooz is id
    // }
    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
            {/*<button onClick={() => setReverse(!reverse)}>click</button>*/}
        </Card>
    );
};

export default RateItem;
