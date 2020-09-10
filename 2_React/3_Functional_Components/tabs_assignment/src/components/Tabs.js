import React, {useState} from 'react';

const Tabs = (props) => {
    const {allText} = props;
    const [text, setText] = useState("");

    const onClickHandler = (e, i) => {
        let currentText = allText[i];
        setText(currentText);
    }

    return (
        <div>
            <div className="row">
                <div className="col-3">
                    {
                        allText.map((text, i) =>
                            <button className="btn" key={i} onClick={e => onClickHandler(e, i)}>Tab {i + 1}</button>)
                    }
                </div>
            </div>

            <div className="row">
                <div className="col-9">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;