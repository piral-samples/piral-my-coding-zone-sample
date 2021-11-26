import * as React from "react";
import { PiletApi } from "my-coding-zone-piral-app";
import { Link } from "react-router-dom";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  const connect = app.createConnector(() =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json()
    )
  );

  app.registerTile(
    () => (
      <div className="teaser">
        <div style={{ fontSize: "2em", color: "red" }}>
          My Coding Zone <b>ROCKS</b>!
        </div>
      </div>
    ),
    {
      initialColumns: 4,
      initialRows: 2,
    }
  );

  app.registerMenu(() => <Link to="/foo">Sample</Link>);

  app.registerPage("/foo", connect(Page));
}
