import React from "react";

function MyComponent(props) {
  return (
    <>
      Welcome to Incheon. {props.children}! <br />
      <h3>컴퓨터공학부 20학번 {props.name}</h3>
    </>
  );
}

MyComponent.defaultProps = { name: "횃불이", children: "유니" };

export default MyComponent;
