import React from "react";

function MyComponent(props) {
  const { name, children } = props;
  return (
    <>
      Welcome to Incheon. {children}! <br />
      <h3>컴퓨터공학부 20학번 {name}</h3>
    </>
  );
}

export default MyComponent;
