import React from "react";
import { render } from "react-dom";

const RerutnReactElement = ({ name, music }) => {
  return (
    <h2>
      {name} {music}
    </h2>
  );
};

render(
  <RerutnReactElement name="嘉門達夫" music="替え歌" />,
  document.getElementById("root")
);
