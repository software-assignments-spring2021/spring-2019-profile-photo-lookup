// /**
//  * Code adapted from https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
//  *
// **/
// import React, { Component } from 'react'
// import './dragAndDrop.css';
//
// class DragAndDrop extends Component {
//     dropRef = React.createRef();
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             dragging: false
//         };
//     }
//
//     componentDidMount() {
//         let div = this.dropRef.current;
//         div.addEventListener('dragenter', this.handleDragIn);
//         div.addEventListener('dragleave', this.handleDragOut);
//         div.addEventListener('dragover', this.handleDrag);
//         div.addEventListener('drop', this.handleDrop);
//         this.dragCounter = 0
//     }
//
//     componentWillUnmount() {
//         let div = this.dropRef.current;
//         div.removeEventListener('dragenter', this.handleDragIn);
//         div.removeEventListener('dragleave', this.handleDragOut);
//         div.removeEventListener('dragover', this.handleDrag);
//         div.removeEventListener('drop', this.handleDrop);
//     }
//
//     handleDrag = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//     }
//
//     handleDragIn = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         this.dragCounter++;
//         if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
//             this.setState({dragging: true});
//         }
//     }
//
//     handleDragOut = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         this.dragCounter--;
//         if (this.dragCounter > 0) return;
//         this.setState({dragging: false});
//     }
//
//     handleDrop = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//             this.props.handleDrop(e.dataTransfer.files)
//             e.dataTransfer.clearData()
//             this.dragCounter = 0
//         }
//     }
//
//     // render() {
//     //     return (
//     //         <div className="dropzone" ref={this.dropRef}>
//     //             {this.state.dragging &&
//     //                 <div className="dropzone-hover">
//     //                     <div>drop here :)</div>
//     //                 </div>
//     //             }
//     //             {this.props.children}
//     //         </div>
//     //     );
//     // }
//     render() {
//     return (
//       <div
//         style={{display: 'inline-block', position: 'relative'}}
//         ref={this.dropRef}
//       >
//         {this.state.dragging &&
//           <div
//             style={{
//               border: 'dashed grey 4px',
//               backgroundColor: 'rgba(255,255,255,.8)',
//               position: 'absolute',
//               top: 0,
//               bottom: 0,
//               left: 0,
//               right: 0,
//               zIndex: 9999
//             }}
//           >
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 right: 0,
//                 left: 0,
//                 textAlign: 'center',
//                 color: 'grey',
//                 fontSize: 36
//               }}
//             >
//               <div>drop here :)</div>
//             </div>
//           </div>
//         }
//         {this.props.children}
//       </div>
//     )
//   }
// }
//
// export default DragAndDrop

import React, { Component } from 'react';
import './dragAndDrop.css';

class DragAndDrop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dragging: false
        };
    }

    dropRef = React.createRef()

    handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({dragging: true});
        }
    }

    handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter === 0) {
            this.setState({dragging: false});
        }
    }

    handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({dragging: false});
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.handleDrop(e.dataTransfer.files);
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    }

    componentDidMount() {
        let div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn);
        div.addEventListener('dragleave', this.handleDragOut);
        div.addEventListener('dragover', this.handleDrag);
        div.addEventListener('drop', this.handleDrop);
    }

    componentWillUnmount() {
        let div = this.dropRef.current;
        div.removeEventListener('dragenter', this.handleDragIn);
        div.removeEventListener('dragleave', this.handleDragOut);
        div.removeEventListener('dragover', this.handleDrag);
        div.removeEventListener('drop', this.handleDrop);
    }

    render() {
        return (
            <div className="dropzone" ref={this.dropRef}>
                {this.state.dragging &&
                    <div className="dropzone-hover-box">
                        <div className="dropzone-hover-text">
                            <div>drop here :)</div>
                        </div>
                    </div>
                }
                {this.props.children}
            </div>
        )
    }
}

export default DragAndDrop;
