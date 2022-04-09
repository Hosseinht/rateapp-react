import PropTypes from 'prop-types';
import {useContext} from "react";
import RateContext from "../context/RateContext";

function Header({text, bgColor, textColor}) {
    const {reverse, setReverse} = useContext(RateContext)
    const headerStyles = {
        backgroundColor : bgColor,
        color : textColor,
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
                <button onClick={() => setReverse(!reverse)}>click</button>
            </div>
        </header>
    );
}

//
Header.defaultProps = {
    text: 'Hello There',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}
// if we don't pass props from App component Header component will use this default props


Header.propTypes = {
    text: PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,

}

export default Header;