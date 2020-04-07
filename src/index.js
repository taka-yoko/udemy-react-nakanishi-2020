import React from "react";
import { render } from "react-dom";

import ReactComponent from "./ReactComponent";

class Human {
  constructor(name, music) {
    this.name = name;
    this.music = music;
  }

  callMyProfile() {
    console.log(this.name, this.music);
  }
}

const tamori = new Human("タモリ", "ジャズ");
const takeshi = new Human("たけし", "サックス");

tamori.callMyProfile();
takeshi.callMyProfile();

render(
  <div>
    <ReactComponent name={tamori.name} music={tamori.music} />
    <ReactComponent name={takeshi.name} music={takeshi.music} />
  </div>,
  document.getElementById("root")
);
