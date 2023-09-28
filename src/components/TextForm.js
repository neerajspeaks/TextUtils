import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpperCase = () => {
        console.log("handleUpperCase function was called.");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    };

    const handleLowerCase = () => {
        console.log("handleLowerCase function was called.");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    };

    const handleOnChange = (event) => {
        console.log("handleOnChange function was called.");
        setText(event.target.value);
    };

    const copyText = () => {
        console.log("copyText function was called.");
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    };

    const clearText = () => {
        console.log("clearText function was called.");
        var text = document.getElementById("myBox");
        setText("");
        props.showAlert("Text cleared!", "success");
    }

    const removeExtraSpaces = () => {
        console.log("removeExtraSpaces function was called.");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    return (
        <>
            <div className="container">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} rows="4"></textarea>
                </div>
                <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>Convert to Upper case</button>
                <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Convert to Lower case</button>
                <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
            </div>

            <div className="container my-3">
                <h4>Paragraph summary</h4>
                <p>{text.split(" ").filter((element) => {return element.length !==0}).length} Words, {text.length} characters</p>
                <h5>Preview</h5>
                <p>{text.length > 0 ?text : "Enter something to preview."}</p>
            </div>
        </>
    );
}
