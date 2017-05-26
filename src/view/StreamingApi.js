import React, {Component} from 'react';

export default class StreamingApi extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            displayPort:false
        }
    }

    render()
    {
        var style;
        style={display: "none"}; 

    
    if (this.state.displayPort) {
      style = {display: "block"};
    }
        return(
            <div><button className="resizeBtn" onClick={()=>{this.setState({displayPort:true})}} >+</button>
                <button className="resizeBtn" onClick={()=>{this.setState({displayPort:false})}} >-</button>
                <div style={style}>
                <h3>Streaming API Portlet
                </h3>
                <div>Display Streaming data</div>
                <div>Display Streaming data</div>
                <div>Display Streaming data</div>
                <div>Display Streaming data</div>
                <div>Display Streaming data</div></div>
            </div>
        )
    }
}