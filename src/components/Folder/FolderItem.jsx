import React from 'react';
import { Link } from "react-router-dom";

const FolderItem = (props) => {
  const {
    item,
    deleteFolder,
    handleOnClickEdit
  } = props

  return (
    <div className="d-flex flex-row">
      <div className="col-8 d-flex align-items-center justify-content-around">
        <p className="">-{item.name}</p>
        <Link to={{ pathname: "/itemslist", state: { item } }}>View Items</Link>
        <div className="d-flex">
          <span onClick={() => handleOnClickEdit(item)} className="d-flex justify-content-end">Edit</span>
          /
          <span onClick={() => deleteFolder(item.id)} className="d-flex justify-content-end">Remove</span>
        </div>
      </div>
    </div>
  );
}

export default FolderItem;