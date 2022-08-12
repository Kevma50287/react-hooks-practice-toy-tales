import React, { useState } from "react";
import { API } from "./App";

function ToyForm({addToy}) {
  const [newName, setNewName]= useState(null)
  const [newImg, setNewImg]= useState(null)

  function handleNewName (e){
    setNewName(e.target.value)
  }

  function handleNewImg (e){
    setNewImg(e.target.value)
  }

  function handleSubmit (e){
    e.preventDefault()
    fetch(API, {
      method:"POST",
      headers:{
        'Content-type':"application/json"
      },
      body: JSON.stringify({
        name:newName,
        image:newImg,
        likes:0
      })
    }).then(r=>r.json())
    .then(data=> addToy(data))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNewName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleNewImg}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
