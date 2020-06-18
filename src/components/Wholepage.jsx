import React from "react";
import Buttons from "./Buttons";
import Headlines from "./Headlines.jsx";
import Everything from "./Everything.jsx";
import Topnews from "./Topnews.jsx";
import Loading from './Loading.jsx';

function Wholepage(props) {
  return (
    <div className="container">
      <div className="flex">
        <h1>
          <span className="channel">GIZ</span>MO
        </h1>
        <div className="flex">
          <span>
            <input type="text" placeholder="Search.." />{" "}
            <i class="fas fa-search"></i>
          </span>
          <span className="head_english channel">EN</span>
        </div>
      </div>

      {props.sources ? (
        <div>
          <Buttons s={props.sources} handleLink={props.handleLink} />
        </div>
      ) : (
        <Loading />
      )}

      <div className="flex flex1">
        <div className="both_card">
          <div className="topnews_card">
            {props.headlines ? (
              <Topnews headlines={props.headlines} />
            ) : (
              <Loading />
            )}
          </div>

          {props.everything ? (
            <div>
              {/* <h3> TOP NEWS </h3> */}
              <Everything everything={props.everything} />
            </div>
          ) : (
            <Loading />
          )}
        </div>

        <section className='right_panel'>
          <h2>HEADLINES</h2>
          {props.headlines ? (
            <Headlines headlines={props.headlines} />
          ) : (
            <Loading />
          )}
        </section>
      </div>
    </div>
  );
}
export default Wholepage;