import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = 'http://localhost:3001/toys'
function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect(() => {
    fetch(API).then(r => r.json()).then(data => setToyList(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(obj) {
    setToyList([...toyList, obj])
  }

  function deleteToy(id) {
    const filtered = toyList.filter((obj) => obj.id !== id)
    setToyList(filtered)
  }

  function upLike(data) {
    const updatedObj = toyList.map((obj) => obj.id === data.id ? data : obj)
    setToyList(updatedObj)
  }
return (
  <>
    <Header />
    {showForm ? <ToyForm addToy={addToy} /> : null}
    <div className="buttonContainer">
      <button onClick={handleClick}>Add a Toy</button>
    </div>
    <ToyContainer toyList={toyList} deleteToy={deleteToy} upLike={upLike} />
  </>
);
}

export { API }
export default App;
