import {useContext, useState, useEffect} from "react";
import RateContext from "../context/RateContext";

const RatingSelect = ({select}) => {
    const [selected, setSelected] = useState(10)
    const {rateEdit} = useContext(RateContext)

    useEffect(() => {
        setSelected(rateEdit.item.rating)
    }, [rateEdit])

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        // what is +? typeof currentTarget is string but we need number
        // with + we turn that string to a number
        select(+e.currentTarget.value)
        // we need to get this value up in the form because that's where we're actually going to submit the form
    }
    return (
        <ul className='rating'>
            <li>
                <input
                    type="radio"
                    id="num1"
                    name='rating'
                    value='1'
                    onChange={handleChange}
                    checked={selected === 1}
                    // if selected === 1 checked will be true
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num2"
                    name='rating'
                    value='2'
                    onChange={handleChange}
                    checked={selected === 2}
                />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num3"
                    name='rating'
                    value='3'
                    onChange={handleChange}
                    checked={selected === 3}
                />
                <label htmlFor="num3">3</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num4"
                    name='rating'
                    value='4'
                    onChange={handleChange}
                    checked={selected === 4}
                />
                <label htmlFor="num4">4</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num5"
                    name='rating'
                    value='5'
                    onChange={handleChange}
                    checked={selected === 5}
                />
                <label htmlFor="num5">5</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num6"
                    name='rating'
                    value='6'
                    onChange={handleChange}
                    checked={selected === 6}
                />
                <label htmlFor="num6">6</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num7"
                    name='rating'
                    value='7'
                    onChange={handleChange}
                    checked={selected === 7}
                />
                <label htmlFor="num7">7</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num8"
                    name='rating'
                    value='8'
                    onChange={handleChange}
                    checked={selected === 8}
                />
                <label htmlFor="num8">8</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num9"
                    name='rating'
                    value='9'
                    onChange={handleChange}
                    checked={selected === 9}
                />
                <label htmlFor="num9">9</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num10"
                    name='rating'
                    value='10'
                    onChange={handleChange}
                    checked={selected === 10}
                />
                <label htmlFor="num10">10</label>
            </li>

        </ul>
    );
};

export default RatingSelect;
