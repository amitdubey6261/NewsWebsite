import React, { Component } from "react";

export class NewsItem extends Component {
        // constructor(){
        //     super();
        //     console.log("hello iam contructor");
        //     this.state = {
        //         articles : this.articles ,
        //         loading : false 
        //     }
        // }
        render(){
            let { title, description, imgurl  , newsurl , publishon } = this.props; 
            
            return (
                <>
        <div className="card scrollHatao" style={{ width: "18rem" , height : "25rem" , overflow : "scroll"  }}>
          <img className="card-img-top" src={imgurl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-title">Published On : {publishon.slice(0,10)}</h6>
            <h6 className="card-title"> At Time : {publishon.slice(12,19)} Hrs .</h6>
            <p className="card-text"> {description} </p>
            <a href={newsurl} target= "_blank" className="btn btn-dark"> Go to web ! </a>
          </div>
        </div>
      </>
    );
}
}

export default NewsItem;
