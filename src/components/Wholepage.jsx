import React from "react";
import Buttons from "./Buttons";
import Headlines from "./Headlines.jsx";
import Everything from "./Everything.jsx";
import Topnews from "./Topnews.jsx";
import Loading from "./Loading.jsx";

function Wholepage(props) {
  return (
    <div className="container">
      <div className="flex fixed_header">
        <h1>
          <span className="channel">GIZ</span>MO
        </h1>
        <div className="flex">
          <span>
            <form onSubmit={props.submit}>
            <i class="fas fa-search">
              <input
                type="text"
                onChange={props.searchText}
                placeholder="Search.."
                className='searchBar'
              />
              </i>
              <label>Pick preferred language:
                <select value={props.value} onChange={props.input} className='searchBtn'>
                  <option value="ar" role='img' aria-hidden="true">🇸🇦 Ar</option>
                  <option value="de" role='img' aria-hidden="true">🇩🇪 De</option>
                  <option value="en" role='img' aria-hidden="true">🇺🇸 En</option>
                  <option value="es" role='img' aria-hidden="true">🇪🇸 Es</option>
                  <option value="fr" role='img' aria-hidden="true">🇫🇷 Fr</option>
                  <option value="he" role='img' aria-hidden="true">🇮🇱 He</option>
                  <option value="it" role='img' aria-hidden="true">🇮🇹 It</option>
                  <option value="nl" role='img' aria-hidden="true">🇳🇱 Nl</option>
                  <option value="no" role='img' aria-hidden="true">🇿🇦 No</option>
                  <option value="pt" role='img' aria-hidden="true">🇵🇹 Pt</option>
                  <option value="ru" role='img' aria-hidden="true">🇷🇺 Ru</option>
                  <option value="se" role='img' aria-hidden="true">🇯🇵 Se</option>
                  <option value="ud" role='img' aria-hidden="true">🇵🇰 Ud</option>
                  <option value="zh" role='img' aria-hidden="true">🇨🇳 Zh</option>
               </select>
              </label>
                  <input type="submit" onClick={props.article} value="Search" className='searchBtn' />
            </form>
          </span>
        </div>
      </div>

      {props.sources ? (
        <div className='buttons_styling'>
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
