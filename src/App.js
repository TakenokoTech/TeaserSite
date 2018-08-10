import React, { Component, Fragment } from 'react';
import './css/App.css';
import './css/SubTitle1.css';

import sampleImage1 from './img/sample1.png'
import sampleImage2 from './img/sample2.png'

// import Three from './Three'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div id="overview">
          <div id="character_dialog">
            <div id="chara_name">このの</div>
            <div id="chara_grade">すっこすこ高等学校2年</div>
            <div id="chara_desc">
            この春から仕事を始めることになった魔法戦士。<br/>
            いわゆるツンデレであり本心を表に出すのは苦手だが、<br/>
            実は子供好きであり自身も子供から好かれている。<br/>
            ゴシック調のコーデを好む。<br/>
            </div>
          </div>
        </div>
        <div id="subtitle1">
          <div className="size_title">サブタイトル</div>
          <div className="size_overview">
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge
          </div>
        </div>
        <div id="overview">
          <img src={sampleImage1} className="image_cell" />
          <img src={sampleImage2} className="image_cell" /><br />
          <img src={sampleImage2} className="image_cell" />
          <img src={sampleImage1} className="image_cell" /><br />
          <img src={sampleImage1} className="image_cell" />
          <img src={sampleImage2} className="image_cell" /><br />
        </div>
        <div id="subtitle1">
          <div className="size_title">サブタイトル</div>
          <div className="size_overview">
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
