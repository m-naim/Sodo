import React, { Component } from 'react';

class Bulls extends Component {
    constructor(props){
        super(props)
         this.state = {
            balls:[]
         }
         this.canvasRef = React.createRef();
     }
     
    componentDidMount() {
        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillRect(0, 0, canvas.width, canvas.height);
        balls.push(new Ball());
}
      }

      componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
      }
    
      updateAnimationState=()=>{
        this.setState(prevState => ({ angle: prevState.angle + 1 }));
        this.rAF = requestAnimationFrame(this.updateAnimationState);
      }
    
      componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
      }

    render() {
        return (
            <div>
                 <canvas ref={this.canvasRef }></canvas>
            </div>
        );
    }
}

export default Bulls;