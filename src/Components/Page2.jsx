import React from "react";
import { useDataLayerValue } from "../Reducer/DataLayer";

function Page2() {
  const [{ values, playing9, opposingBet }, dispatch] = useDataLayerValue();

  return (
    <div className="container-fluid">
      <h2>Your Playing 9</h2>
      <h6>{opposingBet}</h6>
      <div className="row">
        {playing9.map((player, index) => {
          const curr = values[player];
          let currPrice = 0;
          if (parseInt(curr?.Bet) === opposingBet) {
            console.log("Equal for", index, curr?.Price);
            currPrice = 2 * curr?.Price;
          } else currPrice = curr?.Price;
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
                <div className="col m-0 p-0">{currPrice}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page2;
