import React from "react";
import "../style/Player.scss";

type Props = {
  id: number;
  name: string;
  score: number;
  incrementScore: (id: number) => void;
};

export default function Player(props: Props) {
  const onClickIncrementScore = () => {
    console.log(props.id);
    props.incrementScore(props.id);
  };

  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      ></div>
      <p>
        {props.name} (Score: {props.score})
      </p>
      <button onClick={onClickIncrementScore}>Increment</button>
    </li>
  );
}
