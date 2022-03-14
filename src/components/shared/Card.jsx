import PropTypes from "prop-types";
import {useState} from "react";

const Card = ({children, reverse}) => {
    // const [reverse, setReverse] = useState(false)
    // return (
    //     <div className={`card ${reverse && 'reverse'}`}>
    //         {children}
    //     </div>
    // );

    return (
        <div className='card' style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : "#fff",
            color: reverse ? "#fff" : '#000'
        }}>
            {children}
        </div>
    );


};

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card;
