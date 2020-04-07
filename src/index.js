import React from "react";
import { render } from "react-dom";

import ClassComponent1 from "./ClassComponent1";
import ClassComponent2 from "./ClassComponent2";
import { ClassComponent3 } from "./ClassComponent3";

render(
  <div>
    <ClassComponent1 />
    <ClassComponent2 />
    <ClassComponent3 />
  </div>,
  document.getElementById("root")
);
