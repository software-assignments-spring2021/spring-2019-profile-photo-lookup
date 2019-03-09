import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import DragAndDrop from './components/dragAndDrop.js'
import UploadDropzone from './components/uploadDropzone.js';
import UploadResult from './components/uploadResult.js';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            files: [
                'nice.pdf',
                'verycool.jpg',
                'amazing.png',
                'goodstuff.mp3',
                'thankyou.doc'
            ]
        };
    }

    handleDrop = (files) => {
      let fileList = this.state.files
      for (var i = 0; i < files.length; i++) {
        if (!files[i].name) return
        fileList.push(files[i].name)
      }
      this.setState({files: fileList})
    }

    render() {
        return (
            <div className="App container">
            <DragAndDrop handleDrop={this.handleDrop}>
            <div style={{height: 300, width: 250}}>
            {this.state.files.map((file, i) =>
              <div key={i}>{file}</div>
            )}
            </div>
            </DragAndDrop>
                {/*}<UploadDropzone />
                {this.props.names ? <UploadResult names={this.props.names}/> : null}*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        names: state.analysis.names
    };
}

export default connect(mapStateToProps, null)(App);
