import React, { useState } from "react";

export default function App() {

const [item, updateitem] = useState('');
const [items, updateitem1] = useState([]);

function ret(event){
const newvalue=event.target.value;
updateitem(newvalue)
};

function put(event){
updateitem1((previtem) => {
return[...previtem, item]
});
updateitem('')
};
return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={ret} type="text" value={item} />
        <button onClick={put}>
          <span >Add</span>
        </button>
      </div>
      <div>
        <ul>
         {items.map(todoitem=> <li>{todoitem}</li>)}
        </ul>
      </div>
    </div>
  );
}
