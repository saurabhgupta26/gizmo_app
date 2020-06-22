import React from "react";

function Headlines(props) {
  console.log(props.headlines,"head lines in Headlines.jsx")

  return (
    <div>
      {props.headlines.slice(1).map((elem, i) => {
        //   console.log(elem, "Headlines");
        return (
                <div className="news_card" key={i}>
                    <div className="flex">
                        <a href={elem.url}><span className="channel">{elem.source.name}</span></a>
                        <span>{elem.publishedAt.split('T')[0]}</span>
                    </div>
                    <h4> {elem.title} </h4>
                </div>
        );
      })}
    </div>
  );
}
export default Headlines;
