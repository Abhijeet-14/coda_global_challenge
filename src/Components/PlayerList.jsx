import React from "react";
import { useDataLayerValue } from "../Reducer/DataLayer";
import { Checkbox } from "@material-ui/core";

function PlayerList({ opposingBet }) {
  const [state, dispatch] = useDataLayerValue();
  const [checked, setChecked] = React.useState(state.checkboxList);
  const [isDisable, setIsDisable] = React.useState(false);

  React.useEffect(() => {
    setChecked({ ...checked });
  }, []);

  React.useEffect(() => {
    state.playing9.length === 9 ? setIsDisable(true) : setIsDisable(false);
  }, [state.playing9]);

  React.useEffect(() => {
    dispatch({
      type: "SET_CHECKED",
      payload: { checkedList: { ...checked } },
    });
  }, [checked, dispatch]);

  const handleChange = (e) => {
    setChecked({ ...checked, [e.target?.name]: e.target?.checked });
    if (!e.target?.checked) {
      dispatch({
        type: "REMOVE_SELECTED",
        payload: { selected: e.target?.name },
      });
    } else {
      dispatch({
        type: "ADD_SELECTED",
        payload: { selected: e.target?.name },
      });
    }
  };
  console.log(state, checked);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Select</th>
          <th scope="col">Player Name</th>
          <th scope="col">Level</th>
          <th scope="col">Avatar</th>
          <th scope="col">Bet</th>
          <th scope="col">Wins</th>
          <th scope="col">Lost</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {state?.values?.map((value, index) => {

          return (
            <tr key={index}>
              <th scope="row">
                <Checkbox
                  checked={checked.index || false}
                  onChange={handleChange}
                  color="primary"
                  name={index}
                  inputProps={{ "aria-label": "primary checkbox" }}
                  disabled={isDisable}
                />
              </th>
              <td>{value?.Name}</td>
              <td>2</td>
              <td>
                <img
                  src={value["Profile Image"]}
                  alt={value?.Name}
                  width="36px"
                />
              </td>
              <td>{value?.Bet}</td>
              <td>20</td>
              <td>3</td>
              <td>{value.Price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PlayerList;
