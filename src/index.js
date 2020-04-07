import React from "react";
import { render } from "react-dom";

const RerutnReactElement = props => {
  return (
    <h2>
      {props.name} {props.music}
    </h2>
  );
};

render(
  <RerutnReactElement name="嘉門達夫" music="替え歌" />,
  document.getElementById("root")
);
