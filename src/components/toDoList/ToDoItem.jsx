import React from 'react';

const ToDoItem = (props) => {
  const {
    item,
    indexItem,
    handleOnClickCheck,
    handleOnClickEdit,
    deleteTask
  } = props;

  return (
    <div className="d-flex flex-row">
      <div className="col-8 d-flex align-items-center justify-content-center">
        <input
          className=""
          type="checkbox"
          checked={item.checked}
          onClick={() => handleOnClickCheck(indexItem)}
        />
        <p className="">{item.name}</p>
      </div>
      <div className="d-flex">
        <span onClick={() => handleOnClickEdit(item)} className="d-flex justify-content-end">Edit</span>
          /
          <span onClick={() => deleteTask(item.id)} className="d-flex justify-content-end">Remove</span>
      </div>
    </div>
  );
}

export default ToDoItem;
