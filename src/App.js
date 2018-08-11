import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import _ from 'underscore'

import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import './css/App.css';
import './css/SubTitle1.css';

import sampleImage1 from './img/sample1.png'
import sampleImage2 from './img/sample2.png'
import sampleImage3 from './img/c1.png'
import sampleImage4 from './img/c2.png'
import sampleImage5 from './img/c3.png'

// import Three from './Three'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showNumber: 0,
      image: [
        sampleImage1, sampleImage2,sampleImage3, sampleImage4, sampleImage5,
        sampleImage1, sampleImage2,sampleImage3, sampleImage4, sampleImage5,
        sampleImage1, sampleImage2,sampleImage3, sampleImage4, sampleImage5,
      ]
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
  }

  handleOpenModal (no = 0) {
    this.setState({ showModal: true, showNumber: no });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Fragment>
        <div id="overview">
          <div id="character_dialog">
            <div id="chara_name">このの<span> (16)</span></div>
            <div id="chara_grade">すっこすこ高等学校2年</div>
            <div id="chara_desc">
            いわゆるツンデレであり本心を表に出すのは苦手だが、<br/>
            実は子供好きであり自身も子供から好かれている。<br/>
            ゴシック調のコーデを好む。<br/>
            </div>
          </div>
        </div>
        <div className="subtitle z-depth-3">
          <div className="size_title">サブタイトル</div>
          <div className="size_overview">
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge<br/>
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge
          </div>
        </div>
        <div id="overview">
          { _.map(this.state.image, (img, i) => <img key={i} src={img} className="waves-effect z-depth-2 image_cell" onClick={() => this.handleOpenModal(i)} />) }
        </div>
        <div className="subtitle z-depth-3">
          <div className="size_title">サブタイトル</div>
          <div className="size_overview">
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge<br/>
            hogehogehogehogehogehogehogehogehogehogehogehogehogehoge
          </div>
        </div>
        <div id="overview">
          { _.map(this.state.image, (img, i) => <img key={i} src={img} className="waves-effect z-depth-2 image_cell" onClick={() => this.handleOpenModal(i)} />) }
        </div>
        
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={{
            overlay: { backgroundColor: '#000000CC' },
            content: { backgroundColor: '#F4F4F4' }}}>
          <img src={this.state.image[this.state.showNumber]} />
          <a class="waves-effect waves-light teal-text" onClick={this.handleCloseModal}><i class="material-icons">clear</i></a>
        </Modal>
      </Fragment>
    );
  }
}

export default App;
