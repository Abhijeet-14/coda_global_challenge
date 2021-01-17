import React from "react";
import { useDataLayerValue } from "../Reducer/DataLayer";

function SelectedPlayers() {
  const [{playing9, values}, dispatch] = useDataLayerValue();

  return (
    <div>
      <h3>Playing 9</h3>
      {playing9.length !== 0 && <>
        {playing9.map((player, index) => {
          const curr = values[player];
          return (
            <div className="container-fluid m-0 px-0 py-2" key={index}>
              <div className="row m-0 p-0">
                <div className="col m-0 p-0">
                  <img
                    src={curr["Profile Image"]}
                    alt={curr["Name"]}
                    width="64px"
                  />
                </div>
                <div className="col m-0 p-0">
                  <h5>{curr["Name"]}</h5>
                  <p>{curr["Bet"]}</p>
                </div>
                <div className="col m-0 p-0">{curr["Price"]}</div>
              </div>
            </div>
          );
        })}
      </>}
      {playing9.length === 0 && <h6>No player in Playing 9 !! </h6>}
    </div>
  );
}

export default SelectedPlayers;
