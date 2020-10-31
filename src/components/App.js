import React from "react";
import "./../styles/App.css";

function App() {
  let [arr, setArr] = React.useState([]);
  let [pos, setPos] = React.useState(-1);
  const update = () => {
    let data = document.getElementById("task").value;
    let k = [...arr];
    if (pos === -1) {
      let k1 = Date.now();
      if (data.length === 0) {
        return;
      }
      let obj = {
        info: data,
        uid: k1
      };
      k.push(obj);
      setArr(k);
    } else {
      if (data === "") {
        return;
      }
      let obj = {
        info: data,
        uid: arr[pos].uid
      };
      let newarray = arr;
      newarray[pos] = obj;
      setArr(newarray);
      setPos(-1);
    }
    document.getElementById("task").value = "";
  };
  const handleEdit = (id) => {
    let k = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].uid === id) {
        k = i;
        break;
      }
    }
    setPos(k);
    document.getElementById("task").value = arr[k].info;
  };
  const handleDelete = (id) => {
    let newarray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].uid !== id) {
        newarray.push(arr[i]);
      }
    }
    setArr(newarray);
  };
  const Get = ({ info, ke }) => {
    return (
      <div className="list" key={ke}>
        <p>{info}</p>
        <button onClick={() => handleEdit(ke)} id={ke}>
          edit
        </button>
        <button onClick={() => handleDelete(ke)} id={ke}>
          Delete
        </button>
      </div>
    );
  };
  return (
    <>
      <div id="main">
        <textarea id="task"></textarea>
        <button id="btn" onClick={update}>
          Click here to add
        </button>
      </div>
      {arr.map((ele) => (
        <Get info={ele.info} ke={ele.uid} key={ele.uid} />
      ))}
    </>
  );
}

export default App;
