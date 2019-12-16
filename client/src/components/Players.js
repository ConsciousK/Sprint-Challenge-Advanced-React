import React from "react";

const Players = props => {
  return (
    <div className="playersCont">
      {props.players.map(person => (
        <p>
          Number of Searches: {person.searches} - {person.name},{" "}
          {person.country}
        </p>
      ))}
    </div>
  );
};

export default Players;
