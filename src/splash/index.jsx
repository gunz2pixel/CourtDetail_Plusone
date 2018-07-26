import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../style/splash/splash-main.css'
import '../../style/splash/engine.css'
import '../../style/splash/splash.css'


class Index extends Component {

  render() {
    return (

      <div className="splash">
        <div className="header">
          <div className="icon"></div>
        </div>
        <div className="content-box -msize -flexend">
          <div className="title">PLUSONE</div>
        </div>
        <div className="content-box -s3size -flexstart -topm">
          <div className="sub-title">Be the Team, Be PlusOne</div>
        </div>
        <div className="content-box -s3size -flexend -tophalf">
          <div className="button -alizarin">
            <a href="/app" style={{ textDecoration: "none", color: "inherit" }}>
              Get Start.
            </a>
          </div>
        </div>
        <div className="background -image">
          <div className="cover"></div>
        </div>
      </div>


    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
