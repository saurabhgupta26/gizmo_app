import React from "react";

function Topnews(props) {
  return (
      <>
      {props.headlines.splice(0, 1).map((elem) => {
        console.log(elem.urlToImage, "NEWS");
        return (
          <>
            <div className="flex">
              <img className='img_topnews' src={elem.urlToImage} alt="img" />
              <div className="topnews_side">
                  <div className="topnews_card_titleside">
                    <div className="flex flex1">
                    <a href={elem.url}><span className="channel">{elem.source.name}</span></a>
                    <span>{elem.publishedAt.split('T')[0]}</span>
                    </div>
                    <h2 className='topnews_card_title'>{elem.title}</h2>

                  </div>
                <p>{elem.description}</p>
                <button className="btn_source btn_source_all">Read More</button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default Topnews;
