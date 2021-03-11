import React, { useState } from 'react';

const AddItem = (props) => {
  const {
    handleOnSubmit,
    placeholder,
    handleOnChange,
    textInput
  } = props;

  const onSubmit = (text) => {
    handleOnSubmit(text);
    handleOnChange("")
  }

  return (
    <div className="d-flex">
      <input
        onChange={(event) => handleOnChange(event.target.value)}
        value={textInput}
        type="text"
        placeholder={placeholder}
        style={{ width: "70%" }}
      />
      <button onClick={() => onSubmit(textInput)}>Add</button>
    </div>
  );
}

export default AddItem;
