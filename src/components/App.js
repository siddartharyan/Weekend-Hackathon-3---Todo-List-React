import React from "react";
import "./../styles/App.css";

function App() {
  let [arr, setArr] = React.useState([]);
  let [pos, setPos] = React.useState(-1);

  const update = () => {
    let data;
    let k = [...arr];
    data = document.getElementById("task").value;
    data = data.trim();
    if (pos === -1 || data !== "") {
      let k1 = Date.now();
      if (data === "") {
        return;
      }
      let obj = {
        info: data,
        uid: k1
      };
      k.push(obj);
      setArr(k);
    } else if (pos !== -1) {
      data = document.getElementById("text" + arr[pos].uid).value;
      data = data.trim();
      if (data === "") {
        return;
      }
      let obj = {
        info: data,
        uid: arr[pos].uid
      };
      k[pos] = obj;
      setArr(k);
    }
    setPos(-1);
    document.getElementById("task").value = "";
  };

  const handleEdit = (id) => {
    document.getElementById("t" + id).classList.remove("non");
    let k = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].uid === id) {
        k = i;
        break;
      }
    }
    document.getElementById("text" + id).value = arr[k].info;
    setPos(k);
  };

  const handleDelete = (id) => {
    let newarray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].uid !== id) {
        newarray.push(arr[i]);
      }
    }
    if (newarray.length === 0) {
      setPos(-1);
    }
    setArr(newarray);
  };

  const Get = ({ info, ke }) => {
    let textid = "text" + ke;
    return (
      <div className="list" key={ke}>
        <p>{info}</p>
        <button className="editTask" onClick={() => handleEdit(ke)}>
          edit
        </button>
        <button className="delete" onClick={() => handleDelete(ke)}>
          Delete
        </button>
        <div id={"t" + ke} className="non">
          <textarea id={textid}></textarea>
          <button className="saveTask" onClick={update}>
            SaveTask
          </button>
        </div>
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
