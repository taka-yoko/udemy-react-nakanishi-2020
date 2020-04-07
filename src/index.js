import React from "react";
import { render } from "react-dom";

// const returnReactElement = () => {
//   return <h2>ほげ</h2>;
// };
// const returnReactElement2 = () => <h2>ふが</h2>;
// const returnReactElement3 = hello => <h2>{hello}</h2>;
const returnReactElement4 = (no, name) => {
  const newStrings = `${no}番号は${name}さんです。`;
  return <h2>{newStrings}</h2>;
};

// render(returnReactElement3("ちゃーす"), document.getElementById("root"));
render(
  returnReactElement4(3, "なかやまきんに君"),
  document.getElementById("root")
);

// const reactElement = <h2>おはよう世界</h2>;

// console.log(reactElement);

// render(reactElement, document.getElementById("root"));
