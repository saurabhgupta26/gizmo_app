import React from "react";

function randomNumber(arr) {
  return Math.floor(Math.random() * (arr.length - 9));
}
function handleLink (btn){
  // var date = new Date();
  // var month = (+date.getMonth() + 1 <= 9
  //     ? "0" + (+date.getMonth() + 1)
  //     : +date.getMonth() + 1);

  //     if(btn==='all') {
  //       fetch(
  //         `https://newsapi.org/v2/everything?q=${month}&language=en&apiKey=fd574688ac0743ea9dae28f36bd7df97`
  //       )
  //       .then((res) => res.json())
  //       .then((articles) => this.setState({headlines : articles.articles, everything: articles.articles }));
  //   } else {
  //     fetch(
  //       `https://newsapi.org/v2/everything?sources=${btn}&language=en&apiKey=fd574688ac0743ea9dae28f36bd7df97`
  //     )
  //       .then((res) => res.json())
  //       .then((articles) => this.setState({ headlines: articles.articles, everything: articles.articles }));
  //   }
  
  };

function Buttons(props) {
  return (
      <div>
      <button className='btn_source btn_source_all' onClick={() => this.handleLink("all")}>All</button>
      {props.s.splice(randomNumber(props.s), 8).map((elem) => {
        console.log(elem.name, "NEWS");
        return <>
        <button className='btn_source' onClick={()=>handleLink(elem.id)}> {elem.name} </button>
        </>
      })}
    </div>
  );
}
export default Buttons;
