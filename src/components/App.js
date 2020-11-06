import React, { useState } from "react";
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
    let s;
    for (let i = 0; i < items.length; i++) {
      if (items[i].uid === uid) {
        s = items[i].infor;
        break;
      }
    }
    setEditItem(s);
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

  const Other = ({ val }) => {
    return (
      <>
        <input
          onChange={handleEditChange}
          type="string"
          className="editTask"
          value={val}
        />
        <button
          disabled={val === ""}
          onClick={() => handleSave()}
          className="saveTask"
        >
          save
        </button>
      </>
    );
  };

  const Get = ({ data }) => {
    return (
      <>
        <li className="list">
          {index === data.uid ? <Other val={editItem} /> : data.infor}
        </li>
        <button onClick={() => handleDelete(data.uid)}>Delete</button>
        <button onClick={() => handleEdit(data.uid)}>edit</button>
      </>
    );
  };
  return (
    <div id="main">
      <textarea id="task" onChange={handleChange} value={info}></textarea>
      <button onClick={handleClick}>Add</button>
      {items.map((ele) => (
        <Get key={ele.uid} data={ele} editItem={editItem} />
      ))}
    </div>
  );
}
export default App;
