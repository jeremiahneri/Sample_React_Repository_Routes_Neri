import React, { useState } from "react";

const FunctionalState = () => {
  let [sampleContent, changeElement] = useState("Hello world");
  let [color,changeColor] = useState("blue");

    function changeSomething(){
        changeElement("Wow nabago na!");
        color == "blue" ? changeColor("green") : changeColor("blue");
        
    }

  return (
    <>
      <h1 style={{background:color}}>{sampleContent}</h1>
      <button onClick={() => changeSomething()}>Change Sample Element</button>
    </>
  );
};

export default FunctionalState;