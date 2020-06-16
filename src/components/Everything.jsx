import React from "react";

function Everything(props) {
  return (
    <div className='grid'>
      {props.everything.map((elem) => {        
        return (
            // <div className="grid">
              <div className="news_left">
              <div className="news_card top_card">
                <img src={elem.urlToImage} alt="img" />
                <div className="flex">
                  <span className="channel">{elem.source.name}</span>
                  <span>{elem.publishedAt}</span>
                </div>
                <h4> {elem.title} </h4>
              </div>
            </div>
            // </div>
        );
      })}
    </div>
  );
}
export default Everything;
