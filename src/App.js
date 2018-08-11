import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import _ from 'underscore'

import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import './css/App.css';
import './css/SubTitle1.css';

import sampleImage1 from './img/sample1.png'
import sampleImage2 from './img/sample2.png'

// import Three from './Three'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      image: [
        sampleImage1, sampleImage2,
        sampleImage1, sampleImage2,
        sampleImage1, sampleImage2,
        sampleImage1, sampleImage2,
        sampleImage1, sampleImage2,
        sampleImage1, sampleImage2,
        sampleImage1, sampleImage2,
        sampleImage1, sampleImage2,
        sampleImage1, sampleImage2,
        sampleImage1, sampleImage2,
      ]
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

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
        <div className="subtitle">
          <div className="size_title">サブタイトル</div>
          <div className="size_overview">
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge<br/>
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge
          </div>
        </div>
        <div id="overview">
          { _.map(this.state.image, (img, i) => <img key={i} src={img} className="waves-effect z-depth-2 image_cell" onClick={this.handleOpenModal} />) }
        </div>
        <div className="subtitle">
          <div className="size_title">サブタイトル</div>
          <div className="size_overview">
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge<br/>
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge
          </div>
        </div>
        <div id="overview">
          { _.map(this.state.image, (img, i) => <img key={i} src={img} className="waves-effect z-depth-2 image_cell" onClick={this.handleOpenModal} />) }
        </div>
        
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={{
            overlay: { backgroundColor: '#000000CC' },
            content: { backgroundColor: '#F4F4F4' }}}>
          <img src={sampleImage1} />
          <a class="waves-effect waves-light teal-text" onClick={this.handleCloseModal}><i class="material-icons">clear</i></a>
        </Modal>
      </Fragment>
    );
  }
}

export default App;
