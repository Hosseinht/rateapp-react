import {useState} from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

// when we have a form we are gonna have a piece of state for each input in that form
const RateForm = () => {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us</h2>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button type='submit'>Send</Button>
                </div>
            </form>
        </Card>


    );
};

export default RateForm;
