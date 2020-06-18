import React from "react";

function Headlines(props) {
  return (
    <div>
      {props.headlines.map((elem) => {
        //   console.log(elem, "Headlines");
        return (
            // <div className="news_right">
                <div className="news_card">
                    <div className="flex">
                        <a href={elem.url}><span className="channel">{elem.source.name}</span></a>
                        <span>{elem.publishedAt.split('T')[0]}</span>
                    </div>
                    <h4> {elem.title} </h4>
                </div>
            // </div>
        );
      })}
    </div>
  );
}
export default Headlines;
