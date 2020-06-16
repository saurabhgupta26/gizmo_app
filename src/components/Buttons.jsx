import React from "react";

function randomNumber(arr) {
  return Math.floor(Math.random() * (arr.length - 10));
}

function Buttons(props) {
  return (
      <div>
      <button className='btn_source'>All</button>
      {props.s.splice(randomNumber(props.s), 9).map((elem) => {
        // console.log(elem.name, "NEWS");
        return <>
        <button className='btn_source'> {elem.name} </button>
        </>
      })}
    </div>
  );
}
export default Buttons;
