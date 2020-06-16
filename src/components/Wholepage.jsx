import React from "react";
import Buttons from "./Buttons";
import Headlines from "./Headlines.jsx";
import Everything from "./Everything.jsx";

function Wholepage(props) {
  return (
    <div className='container'>
      <div className="flex">
        <h1> GIZMO <span className='channel'> APP </span> </h1>
        <div className="flex">
            <span>
            <input type="text" placeholder="Search.." /> <i class="fas fa-search"></i>
            </span>
            <span className='head_english channel'>
                EN
            </span>
        </div>
      </div>

      {props.sources ? (
        <div>
          <Buttons s={props.sources} />
        </div>
      ) : (
        <h1> Loading ...</h1>
      )}

      <h2>HEADLINES</h2>
      <div className="flex">
        {props.everything ? (
          <div>
            {/* <h3> TOP NEWS </h3> */}
            <Everything everything = {props.everything} />
          </div>
        ) : (
          <h1> Loading ...</h1>
        )}
        

        <section>
          {props.headlines ? (
            <Headlines headlines={props.headlines} />
          ) : (
            <h1> Loading ...</h1>
          )}
        </section>
      </div>
    </div>
  );
}

export default Wholepage;
