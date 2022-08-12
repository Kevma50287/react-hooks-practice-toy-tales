import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, deleteToy, upLike}) {

  const toyArr = toyList.map((toy)=>{
    return (
      <ToyCard toy={toy} deleteToy={deleteToy} upLike={upLike} />
    )
  })

  return (
    <div id="toy-collection">
      {toyArr}
    </div>
  );
}

export default ToyContainer;
