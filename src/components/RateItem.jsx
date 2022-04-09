import Card from "./shared/Card";
import {FaTimes, FaEdit} from "react-icons/fa";
import {useContext} from "react";
import RateContext from "../context/RateContext";

const RateItem = ({item}) => {
    const {deleteRateData, editRate, reverse} = useContext(RateContext)
    // const handleClick = (gooz) => {
    //     console.log(gooz)
    //     // gooz is id
    // }
    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteRateData(item.id)} className="close">
                <FaTimes color='purple'/>
            </button>
            <button onClick={() => editRate(item)} className="edit">
                <FaEdit color='purple'/>
            </button>

            <div className="text-display">{item.text}</div>
            {/*<button onClick={() => setReverse(!reverse)}>click</button>*/}
        </Card>
    );
};

export default RateItem;


// const RateItem = ({item, reverse, handleDelete}) => {
//     // const handleClick = (gooz) => {
//     //     console.log(gooz)
//     //     // gooz is id
//     // }
//     return (
//         <Card reverse={reverse}>
//             <div className="num-display">{item.rating}</div>
//             <button onClick={() => handleDelete(item.id)} className="close">
//                 <FaTimes color='purple'/>
//             </button>
//             <div className="text-display">{item.text}</div>
//             {/*<button onClick={() => setReverse(!reverse)}>click</button>*/}
//         </Card>
//     );
// };
//
// export default RateItem;

