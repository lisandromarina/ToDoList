import React from 'react';

const ToDoItem = (props) => {
  const {
    item,
    indexItem,
    handleOnClickCheck
  } = props;

  return (
    <div className="d-flex flex-row">
      <div className="col-8 d-flex align-items-center">
        <input
          className=""
          type="checkbox"
          checked={item.checked}
          onClick={() => handleOnClickCheck(indexItem)}
        />
        <p className="">{item.name}</p>
      </div>
      <span className="col-4" onClick={() => console.log("se clickeo")}>Edit</span>
    </div>
  );
}

export default ToDoItem;
