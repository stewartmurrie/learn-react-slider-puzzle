import * as React from "react";
import { render } from "react-dom";
import { Frame } from "framer";

import "./styles.css";

const Digit = ({ digit, ...props }) => {
  return (
    <Frame
      borderRadius={8}
      size={96}
      background="darkorange"
      style={{
        fontSize: 54,
        fontWeight: 500,
        fontFamily: "sans-serif",
        margin: 8
      }}
      position="relative"
      {...props}
    >
      {digit}
    </Frame>
  );
};

function App() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return digits.map(digit => <Digit digit={digit} />);
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
