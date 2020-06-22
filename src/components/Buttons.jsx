import React from "react";

function randomNumber(arr) {
  return Math.floor(Math.random() * (arr.length - 9));
}
function Buttons(props) {
  return (
      <div>
      <button className='btn_source btn_source_all' onClick={() => props.handleLink("all")}>All</button>
      {props.s.splice(randomNumber(props.s), 8).map((elem) => {
        console.log(elem.name, "NEWS");
        return <>
        <button className='btn_source' onClick={()=>props.handleLink(elem.id)}> {elem.name} </button>
        </>
      })}
    </div>
  );
}
export default Buttons;
