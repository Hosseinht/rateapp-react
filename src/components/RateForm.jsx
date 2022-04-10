import {useContext, useState, useEffect} from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import RateContext from "../context/RateContext";

// when we have a form we are gonna have a piece of state for each input in that form
const RateForm = ({select}) => {
    // whatever we type in input we want it to put in tex. so onChange={handleTextChange}

    const {addRate, rateEdit, updateRate} = useContext(RateContext)

    // whenever we click on edit we want something to happen. we want the form to get the
    // text and rating from the current rating item. that's called an effect or side effect in the way
    // that we deal with side effects with functional components and
    // hooks is with a special hook called useEffect

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (rateEdit.edit === true) {
            setBtnDisabled(false)
            setText(rateEdit.item.text)
            setRating(rateEdit.item.rating)
        }
    }, [rateEdit])

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

    // Event handler for submitting form
    const handleSubmit = (e) => {
        // default behaviour is submitting to the actual file
        e.preventDefault()
        // even thou we manage it in handleTextChange, client can do
        // something like un disable the button using tools in chrome
        if (text.trim().length > 10) {
            const newRate = {
                // text:text,
                // rating:rating
                text,
                rating
            }
            // now we need to call a function in app level
            if (rateEdit.edit === true) {
                updateRate(rateEdit.item.id, newRate)
            } else {
                addRate(newRate)
            }
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
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


// const RateForm = ({select, handleAdd}) => {
//     // whatever we type in input we want it to put in tex. so onChange={handleTextChange}
//
//     const [text, setText] = useState('')
//     const [rating, setRating] = useState(10)
//     const [btnDisabled, setBtnDisabled] = useState(true)
//     const [message, setMessage] = useState('')
//
//     const handleTextChange = (e) => {
//         if (text === '') {
//             setBtnDisabled(true)
//             setMessage(null)
//             // setMessage = null because when there is no text no message should be shown
//         } else if (text !== '' && text.trim().length <= 10) {
//             // trim = no white space
//             setBtnDisabled(true)
//             setMessage('Text must be at least 10 characters')
//         } else {
//             setBtnDisabled(false)
//             setMessage(null)
//         }
//         // event parameter(e)? we need to get whatever being typed in
//         setText(e.target.value)
//     }
//
//     // Event handler for submitting form
//     const handleSubmit = (e) => {
//         // default behaviour is submitting to the actual file
//         e.preventDefault()
//         // even thou we manage it in handleTextChange, client can do
//         // something like un disable the button using tools in chrome
//         if (text.trim().length > 10) {
//             const newRate = {
//                 // text:text,
//                 // rating:rating
//                 text,
//                 rating
//             }
//             // now we need to call a function in app level
//             handleAdd(newRate)
//             setText('')
//         }
//     }
//
//     return (
//         <Card>
//             <form onSubmit={handleSubmit}>
//                 <h2>How would you rate your service with us</h2>
//                 <RatingSelect select={(rating) => setRating(rating)}/>
//                 <div className="input-group">
//                     <input
//                         onChange={handleTextChange}
//                         type="text"
//                         placeholder='Write a review'
//                         value={text}
//                     />
//                     <Button type='submit' isDisabled={btnDisabled}>Send</Button>
//                 </div>
//                 {message && <div className='message'>{message}</div>}
//             </form>
//         </Card>
//
//
//     );
// };
//
// export default RateForm;
//

