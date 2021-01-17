import React from "react";
import {Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import { useDataLayerValue } from "../Reducer/DataLayer";
import PlayerList from "./PlayerList";
import SelectedPlayers from "./SelectedPlayers";

function Page1() {
  //   const [opposingBet, setOpposingBet] = React.useState(0);
  const [state, dispatch] = useDataLayerValue();

  const handleOpposingBet = () => {
    dispatch({
      type: "SET_OPPOSING_BET",
      payload: { newBet: Math.round(Math.random() * 10) },
    });
  };

  return (
    <div className="container-fluid p-3">
      <Link to="./page2">
        <Button variant="contained" onClick={() => handleOpposingBet} className="float-right">Start</Button>
      </Link>
      <div className="row">
        <div className="col-4">
          <SelectedPlayers />
        </div>
        <div className="col">
          <PlayerList />
        </div>
      </div>
    </div>
  );
}

export default Page1;
