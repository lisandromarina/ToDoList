import React from 'react';
import AddItem from './AddItem';

const EditObject = (props) => {
  const {
    handleOnChange,
    handleOnSubmit,
    setHidden,
    textInput,
    title
  } = props;
  return (
    <div className="container w-100 card d-flex justify-content-center text-center">
      <h2>Edit {title}</h2>
      <div className="w-50 d-flex justify-content-center m-5">
        <AddItem
          placeholder={"Edit"}
          handleOnSubmit={handleOnSubmit}
          handleOnChange={handleOnChange}
          textInput={textInput}
        />
        <button className="w-25" onClick={() => setHidden(true)}>cancel</button>
      </div>
    </div>
  );
}

export default EditObject;
