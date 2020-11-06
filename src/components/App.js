import React, { useState } from "react";
import Get from "./Get";
import "./../styles/App.css";
function App() {
  const [items, setItems] = useState([]);
  const [info, setInfo] = useState("");
  const [editItem, setEditItem] = useState("");
  const [index, setIndex] = useState(-1);

  const handleChange = (event) => {
    setInfo(event.target.value);
  };

  const handleEditChange = (event) => {
    setEditItem(event.target.value);
  };

  const handleEdit = (uid) => {
    setIndex(uid);
  };

  const handleDelete = (uid) => {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].uid !== uid) {
        arr.push(items[i]);
      }
    }
    setItems(arr);
  };

  const handleSave = () => {
    if (editItem === "") {
      return;
    }
    let obj = {
      infor: editItem,
      uid: index
    };
    let ar = [...items];
    for (let i = 0; i < ar.length; i++) {
      if (ar[i].uid === index) {
        ar[i] = obj;
      }
    }
    setItems(ar);
    setEditItem("");
    setIndex(-1);
  };
  const handleClick = () => {
    if (info === "") {
      return;
    }
    const obj = {
      infor: info,
      uid: Date.now()
    };
    let dupArr = [...items];
    dupArr.push(obj);
    setItems(dupArr);
    setInfo("");
  };

  return (
    <>
      <div id="main">
        <textarea id="task" onChange={handleChange} value={info}></textarea>
        <button id="btn" onClick={handleClick}>
          Add
        </button>
      </div>
      {items.map((ele) => (
        <Get
          key={ele.uid}
          data={ele}
          handleChange={handleChange}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleEditChange={handleEditChange}
          handleSave={handleSave}
          handleEdit={handleEdit}
          index={index}
          editItem={editItem}
        />
      ))}
    </>
  );
}
export default App;
