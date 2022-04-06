import {motion, AnimatePresence} from "framer-motion";
import RateItem from "./RateItem";


const RateList = ({rateData, reverse, handleDelete}) => {
    if (!rateData || rateData.length === 0) {
        return <p>No rate yet</p>
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {rateData.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <RateItem
                            reverse={reverse}
                            key={item.id}
                            item={item}
                            handleDelete={handleDelete}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
    // return (
    //     <div className='feedback-list'>
    //         {rateData.map((item) => (
    //             <RateItem
    //                 reverse={reverse}
    //                 key={item.id}
    //                 item={item}
    //                 handleDelete={handleDelete}
    //             />
    //         ))}
    //     </div>
    // );
    //
};

export default RateList;
