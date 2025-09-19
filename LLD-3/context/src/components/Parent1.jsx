import React, { useContext } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { ParkContext } from "./ParkContext";

function Parent1() {
  const data = useContext(ParkContext);

  return (
    <>
      <div className="parent">
        Parent1 RollerCoaster:{data.rollerCoaster} MerryGoRound:
        {data.merryGoRound}
      </div>
      <Child1 />
      <Child2 />
    </>
  );
}

export default Parent1;
