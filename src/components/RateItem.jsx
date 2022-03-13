import Card from "./shared/Card";
import {useState} from "react";

const RateItem = ({item}) => {
    const [reverse, setReverse] = useState(false)
    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            <button onClick={() => setReverse(!reverse)}>click</button>
        </Card>
    );
};

export default RateItem;
