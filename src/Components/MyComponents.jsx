import React from "react";
import { useDataLayerValue } from "../Reducer/DataLayer";
import {Route, Switch, Link} from "react-router-dom"

import Page1 from './Page1'
import Page2 from './Page2'

function MyComponents() {
  const [state, dispatch] = useDataLayerValue();

  React.useEffect(() => {
    fetch(
      "http://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("fetching!!");
        dispatch({
          type: "SET_VALUES",
          payload: { values: data, selectedList: [] },
        });
      })
      .catch((err) => console.log("err occured: ", err));
  }, []);

  console.log(state);
  return (
    <div className="container-fluid m-0 p-0 text-center">
      <h1>Coda Global Challenge!!!</h1>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Switch>
        <Route path="/page1" render={()=> <Page1 />} />
        <Route path="/page2" render={()=> <Page2 />} />
      </Switch>
    </div>
  );
}

export default MyComponents;
