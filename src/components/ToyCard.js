import React from "react";

function ToyCard({toy, deleteToy, upLike}) {
  const {name, image, likes, id} = toy
  function handleDelete (){
    fetch(`http://localhost:3001/toys/${id}`, {
      method:"DELETE"
    }).then(r=>r.json())
    .then(()=> deleteToy(id))
  }

  function handleLike (){
    fetch(`http://localhost:3001/toys/${id}`, {
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    }).then(r=>r.json())
    .then((data)=> {
      upLike(data)})
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
