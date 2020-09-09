import react, { useState } from 'react';

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg);
    };
    /* When we submit the form in <MessageForm /> it passes the information up to the parent < App /> component which 
    in turn passes it down to the < MessageDisplay /> component. This then displays our message. */

    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Message</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={(e) => setMsg(e.target.value) }
                value={msg}
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};

export default MessageForm;