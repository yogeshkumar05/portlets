import React, { Component } from 'react';
import { fetchStreamingData } from "./../actions/streamingActions"
import { connect } from "react-redux"

class StreamingApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            streamingData: [],//data received from streaming api
            streamStopped: false,//to control stream demo start or stop
            screenMinimized: false//to control screen minimize or maximize
        }

        this.startStreaming=this.startStreaming.bind(this);
        this.stopStreaming=this.stopStreaming.bind(this);
        this.minimizePortlet=this.minimizePortlet.bind(this);
        this.maximizePortlet=this.maximizePortlet.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => fetchStreamingData(),
            2000
        );//call the streaming api every 2 seconds
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentWillReceiveProps(nextProps) {
        let count = nextProps.count;//api call number
        let streamingData = [];

        /*push tha latest api response first*/
        streamingData.push({ count: count, data: nextProps.tweets })
        streamingData.push(...this.state.streamingData);
        this.setState({ streamingData })
    }

    startStreaming()
    {
        this.timerID = setInterval(
            () => fetchStreamingData(),
            2000
        ); 
        this.setState({ streamStopped: false })
    }

    stopStreaming()
    {
        clearInterval(this.timerID); 
        this.setState({ streamStopped: true });
    }

    maximizePortlet()
    {
        this.setState({ screenMinimized: false});
    }

    minimizePortlet()
    {
        this.setState({ screenMinimized: true});
    }

    render() {
        var displayPortStyle;
        //dont display the portlet if screen is minimized, else display
        if(this.state.screenMinimized)
        {
            displayPortStyle = { display: "none" };
        }
        else
        {
            displayPortStyle = { display: "block" };
        }
    
        let streamingDataDisplay = [];
        this.state.streamingData.map((tweet, index) => {
            if (index == 0) {//display the latest response first
                let latestEntry = [];
                latestEntry.push(<div><em>This is the latest data from Api call number {tweet.count}</em></div>)
                tweet.data.map((data, index2) => {
                    latestEntry.push(<div>{data.text}. </div>)
                })
                streamingDataDisplay.push(<div key={index} className="latest-data-div">{latestEntry}</div>)
            }
            else {
                let streamingEntry = [];
                streamingEntry.push(<div><em>This data is from Api call number {tweet.count}</em></div>)
                tweet.data.map((data, index2) => {
                    streamingEntry.push(<span>{data.text}. </span>)
                })
                streamingDataDisplay.push(<div key={index} className="stream-data-div">{streamingEntry}</div>)
            }

        });

        //display buttons to either start or stop streaming demo
        let streamingController = this.state.streamStopped === true ? 
        <button title="click to start streaming demo" className="resizeBtn" onClick={this.startStreaming}>start</button> : 
        <button title="click to stop streaming demo" className="resizeBtn" onClick={this.stopStreaming}>stop</button>;

        //display option to minimize or maximize portlet
        let maximizeController = this.state.screenMinimized ? 
        <button title="maximize" className="resizeBtn" onClick={this.maximizePortlet} >+</button> :
        <button title="minimize" className="resizeBtn" onClick={this.minimizePortlet} >-</button>;

        return (
            <div>
                {maximizeController}
                {streamingController}

                <div style={displayPortStyle}>
                    <h3 className="portlet-header">Streaming Data Portlet </h3>
                    {streamingDataDisplay}
                </div>
            </div>
        )
    }
}
export default connect(state => (
    {
        tweets: state.streamReducer.tweets,
        count: state.streamReducer.count
    }
))(StreamingApi);
