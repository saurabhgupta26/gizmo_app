import React from "react";
import Wholepage from "./components/Wholepage.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: null,
      headlines: null,
      everything: null,
      search: "",
      country: "in",
      language: "en" || null,
    };
  }

  componentDidMount() {
    // this.setState({sources : null});
    fetch(
      `https://cors-anywhere.herokuapp.com/newsapi.org/v2/sources?language=en&country=us&apiKey=fd574688ac0743ea9dae28f36bd7df97`
    )
      .then((response) => response.json())
      .then((articles) => this.setState({ sources: articles.sources }));
    console.log("state: ", this.state.sources);

    // this.setState({headlines : null});
    fetch(
      `https://cors-anywhere.herokuapp.com/newsapi.org/v2/top-headlines?language=en&country=us&apiKey=fd574688ac0743ea9dae28f36bd7df97`
    )
      .then((response) => response.json())
      .then((articles) => this.setState({ headlines: articles.articles }));
    console.log("headlines:", this.state.headlines);

    // this.setState({everything : null});
    fetch(
      `https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?q=india&pageSize=100&apiKey=fd574688ac0743ea9dae28f36bd7df97`
    )
      .then((response) => response.json())
      .then((articles) => this.setState({ everything: articles.articles }));
    console.log("Everything:", this.state.everything);
  }

  allArticle = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?q=${this.state.search}&language=${this.state.language}&pageSize=100&apiKey=fd574688ac0743ea9dae28f36bd7df97`
    )
      .then((response) => response.json())
      .then((articles) => this.setState({ everything: articles.articles, headlines:articles.articles }));
      console.log(this.state.everything, "in the allArticle");
  }

  handleLink = (btn) => {
    var date = new Date();
    var month =
      +date.getMonth() + 1 <= 9
        ? "0" + (+date.getMonth() + 1)
        : +date.getMonth() + 1;
    if (btn === "all") {
      fetch(
        `https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?q=${month}&language=en&apiKey=fd574688ac0743ea9dae28f36bd7df97`
      )
        .then((res) => res.json())
        .then((articles) =>
          this.setState({
            headlines: articles.articles,
            everything: articles.articles,
            sources: articles.sources,
          })
        );
    } else {
      fetch(
        `https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?sources=${btn}&language=en&apiKey=fd574688ac0743ea9dae28f36bd7df97`
      )
        .then((res) => res.json())
        .then((articles) =>
          this.setState({
            headlines: articles.articles,
            everything: articles.articles,
          })
        );
    }
  };

  searchText = async (event) => {
    await this.setState({search : event.target.value});    
  };


  handleInput = async(e) => {
    try {
      await this.setState({language: e.target.value});
    } catch(error) {
      return error;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <>
        <Wholepage
          sources={this.state.sources}
          headlines={this.state.headlines}
          everything={this.state.everything}
          handleLink={this.handleLink}
          searchText={this.searchText}
          value ={this.state.language}
          input = {this.handleInput}
          article = {this.allArticle}
          submit = {this.handleSubmit}
        />
      </>
    );
  }
}
