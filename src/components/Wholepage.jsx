import React from "react";
import Buttons from "./Buttons";
import Headlines from "./Headlines.jsx";
import Everything from "./Everything.jsx";
import Topnews from "./Topnews.jsx";
import Loading from "./Loading.jsx";

function Wholepage(props) {
  return (
    <div className="container">
      <div className="flex">
        <h1>
          <span className="channel">GIZ</span>MO
        </h1>
        <div className="flex">
          <span>
            <form onSubmit={props.submit}>
              <input
                type="text"
                onChange={props.searchText}
                placeholder="Search.."
              />
              <i class="fas fa-search"></i>
              <label>Pick preferred laguage : 
                <select value={props.value} onChange={props.input}>
                  <option value="ar">Ar</option>
                  <option value="en">En</option>
                  <option value="es">Es</option>
                  <option value="de">De</option>
                  <option value="fr">Fr</option>
                  <option value="he">He</option>
                  <option value="it">It</option>
                  <option value="nl">Nl</option>
                  <option value="no">No</option>
                  <option value="pt">Pt</option>
                  <option value="ru">Ru</option>
                  <option value="se">Se</option>
                  <option value="ud">Ud</option>
                  <option value="zh">Zh</option>
               </select>
              </label>
              <input type="submit" onClick={props.article} value="Submit" />
            </form>
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

        <section className="right_panel">
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
