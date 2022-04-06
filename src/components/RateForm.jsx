import {useState} from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

// when we have a form we are gonna have a piece of state for each input in that form
const RateForm = ({select}) => {
    // whatever we type in input we want it to put in tex. so onChange={handleTextChange}

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
            // setMessage = null because when there is no text no message should be shown
        } else if (text !== '' && text.trim().length <= 10) {
            // trim = no white space
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        // event parameter(e)? we need to get whatever being typed in
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>


    );
};

export default RateForm;
