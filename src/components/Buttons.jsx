import React from "react";

function randomNumber(arr) {
  return Math.floor(Math.random() * (arr.length - 10));
}

function handleLink({elem}) {
    fetch(`http://newsapi.org/v2/top-headlines?sources=${elem.id}&apiKey=fd574688ac0743ea9dae28f36bd7df97`)
      .then((response) => response.json())
      .then((articles) => this.setState({sources: articles.sources})) 
      
}

function Buttons(props) {
  return (
      <div>
      <button className='btn_source btn_source_all'>All</button>
      {props.s.splice(randomNumber(props.s), 9).map((elem) => {
        // console.log(elem.name, "NEWS");
        return <>
        <button className='btn_source' onClick={()=>handleLink({elem})}> {elem.name} </button>
        </>
      })}
    </div>
  );
}
export default Buttons;
