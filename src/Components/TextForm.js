import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClickHi = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Changed to uppercase","Success");
  };
  const handleUpClickLo = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Changed to lowercase","Success");
  };
  const handleClear = () => {
    setText('');
    props.showAlert("Cleared the text","Success");
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  // Calculate word count based on trimmed text
  const trimmedText = text.trim();
  const wordCount = trimmedText ? trimmedText.split(/\s+/).length : 0;

  return (
    <>
      <div className="container" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='light'?'black':'white'}}
            id="exampleFormControlTextarea1"
            rows="8"
            
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClickHi}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClickLo}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>
          Clear Text 
        </button>
      </div>
      <div className="container my-3" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} words {trimmedText.length} characters
        </p>
        <p>{0.008 * wordCount} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
