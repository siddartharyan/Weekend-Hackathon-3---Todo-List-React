import React from "react";
import Edit from "./Edit";
export default function Get({
  data,
  index,
  handleEditChange,
  handleSave,
  editItem,
  handleDelete,
  handleEdit
}) {
  return (
    <>
      <li className="list">
        {index === data.uid ? (
          <Edit
            handleEditChange={handleEditChange}
            handleSave={handleSave}
            editItem={editItem}
          />
        ) : (
          data.infor
        )}
      </li>
      <button onClick={() => handleDelete(data.uid)} className="edit">
        Delete
      </button>
      <button onClick={() => handleEdit(data.uid)} className="delete">
        edit
      </button>
    </>
  );
}
