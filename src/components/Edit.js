import React from "react";
export default function Edit({ handleEditChange, handleSave, editItem }) {
  return (
    <>
      <input
        onChange={handleEditChange}
        type="string"
        className="editTask"
        value={editItem}
      />
      <button
        disabled={editItem === ""}
        onClick={handleSave}
        className="saveTask"
      >
        save
      </button>
    </>
  );
}
