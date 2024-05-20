import React from "react";

function MyComponent(props) {
  return (
    <>
      <h3>Incheon National University에 다니는 {props.name}입니다.</h3>
    </>
  );
}
MyComponent.defaultProps = { name: "인천대학교" }; // 디폴트값 설정

export default MyComponent;
