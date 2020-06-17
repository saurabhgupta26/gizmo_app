import React from 'react';
// import './App.css';
 import Buttons from './components/Buttons.jsx';
// import Headlines from './components/Headlines.jsx';
// import Everything from './components/Everything.jsx';
import Wholepage from './components/Wholepage.jsx';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      sources : null,
      headlines : null,
      everything : null
    }
  }

  componentDidMount() {
      // this.setState({sources : null});
    fetch(`https://newsapi.org/v2/sources?language=en&country=us&apiKey=fd574688ac0743ea9dae28f36bd7df97`)
      .then((response) => response.json())
      .then((articles) => this.setState({sources: articles.sources}))
      console.log("state: ",this.state.sources);      

    // this.setState({headlines : null});
    fetch(`https://newsapi.org/v2/top-headlines?language=en&country=in&apiKey=fd574688ac0743ea9dae28f36bd7df97`)
      .then((response) => response.json())
      .then((articles) => this.setState({headlines: articles.articles}))
      console.log("headlines:",this.state.headlines);
  
    // this.setState({everything : null});
    fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=fd574688ac0743ea9dae28f36bd7df97`)
      .then((response) => response.json())
      .then((articles) => this.setState({ everything: articles.articles }))
      console.log("Everything:",this.state.everything);
  }

  handleLink = (btn) => {
    var date = new Date();
    var month = (+date.getMonth() + 1 <= 9
        ? "0" + (+date.getMonth() + 1)
        : +date.getMonth() + 1);
  
        if(btn==='all') {
          fetch(
            `https://newsapi.org/v2/everything?q=${month}&language=en&apiKey=fd574688ac0743ea9dae28f36bd7df97`
          )
          .then((res) => res.json())
          .then((articles) => this.setState({headlines : articles.articles, everything: articles.articles }));
      } else {
        fetch(
          `https://newsapi.org/v2/everything?sources=${btn}&language=en&apiKey=fd574688ac0743ea9dae28f36bd7df97`
        )
          .then((res) => res.json())
          .then((articles) => this.setState({ headlines: articles.articles, everything: articles.articles }));
      }
    };

  render() {
    return ( 
    <>
      <Wholepage sources= {this.state.sources} headlines = {this.state.headlines} everything = {this.state.everything}/>
      {/* <Buttons data={this.state.sources} click={this.handleLink} /> */}
    </>
    )
  }
}
