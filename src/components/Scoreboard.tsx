import React, { useState } from "react";
import Player from "./Player";
import "../style/Scoreboard.scss";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sortBy, setSortBy] = useState("score");

  type Player = {
    id: number;
    name: string;
    score: number;
  };

  function compareByScore(player_a: Player, player_b: Player) {
    return player_b.score - player_a.score;
  }

  function compareByName(player_a: Player, player_b: Player) {
    return player_a.name.localeCompare(player_b.name);
  }

  const players_sorted =
    sortBy === "score"
      ? [...players].sort(compareByScore)
      : [...players].sort(compareByName);

  const incrementScore = (id: number) => {
    const playerWithUpdatedScore = players.map((player) => {
      if (id === player.id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    setPlayers(playerWithUpdatedScore);
  };

  const resetScore = () => {
    const playersWithZeroScore = players.map((player) => {
      return {
        ...player,
        score: 0,
      };
    });
    setPlayers(playersWithZeroScore);
  };

  const randomizeScore = () => {
    const randomizedPlayers = players.map((player) => {
      const randomNum = Math.floor(Math.random() * 1000);
      return {
        ...player,
        score: randomNum,
      };
    });
    setPlayers(randomizedPlayers);
  };

  const addPlayer = (name: string) => {
    const playersNewAdded = [
      ...players,
      { id: players.length + 1, name, score: 0 },
    ];

    setPlayers(playersNewAdded);
  };

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <p>
        Sort order:{" "}
        <select
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          value={sortBy}
        >
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={resetScore}>Reset</button>
      <br></br>
      <button onClick={randomizeScore}>Randomize</button>
      <p>Player's scores:</p>
      <ul>
        {players_sorted.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
