import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // 1st contructor will run then component did mount will ru
  constructor() {
    super();
    console.log("hello i am contructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }; //making the articles array blank as we deleted json file from here;
  }

  async componentDidMount() {
    //wait for await to resolve and syncronise the website
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=a89e083f5cf447618215e136d50a10f0&pagesize=12";
    let data = await fetch(url);
    let parsedData = await data.json(); //waiting to resolve
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleprev = async () => {
    console.log("Previous Clicked !");

    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a89e083f5cf447618215e136d50a10f0&page=${
      this.state.page - 1
    }&pagesize=12`;
    let data = await fetch(url);
    let parsedData = await data.json(); //waiting to resolve
    console.log(parsedData);

    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };

  handlenext = async () => {
    console.log("Next Clicked !");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a89e083f5cf447618215e136d50a10f0&page=${
      this.state.page + 1
    }&pagesize=12`;
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
      
    } else {
      let data = await fetch(url);
      let parsedData = await data.json(); //waiting to resolve
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <>
        <center><h1>Top Headlines by : Reporter Dubey </h1></center>
        <div className="container my-3">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4 my-3">
                  <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} publishon={element.publishedAt}/>
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between my-3">
            <button
              type="button"
              className="btn btn-dark"
              disabled={this.state.page <= 1}
              onClick={this.handleprev}
            >
              {" "}
              &#8678; Prev
            </button>
            <button
              type="button"
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)}
              className="btn btn-dark"
              onClick={this.handlenext}
            >
              Next &#8680;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
