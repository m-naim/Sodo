import React, { Component } from 'react';

class editeModal extends Component {
    constructor(props) {
      super(props);
    }
    
    render(){
        const showHideClassname = this.props.show ? "modal display-block" : "modal display-none";
        return(
            <div className='modal display-block'>
                <section className="modal-main">
                    <h1>modal</h1>
                    <button onClick={this.props.handleClose}>close</button>
                </section>
                </div>
        )
      }
}
export default editeModal;