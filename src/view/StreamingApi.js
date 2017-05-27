import React, { Component } from 'react';
import { fetchStreamingData } from "./../actions/streamingActions"
import { connect } from "react-redux"
import store from "./../store"

class StreamingApi extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
        this.state = {
            displayPort: true,
            streamingData: [],
            newData: []
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => fetchStreamingData(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentWillReceiveProps(nextProps) {
        console.info(`props..${nextProps.count}
     ${JSON.stringify(nextProps.tweets)}`);
        let count = nextProps.count;
        let streamingData = [];
        streamingData.push({ count: count, data: nextProps.tweets })
        streamingData.push(...this.state.streamingData);
        this.setState({ streamingData })
    }

    render() {
        var style;
        style = { display: "none" };

        if (this.state.displayPort) {
            style = { display: "block" };
        }
        console.info("state" + JSON.stringify(this.state.streamingData))
        let streamingDataDisplay = [];
        this.state.streamingData.map((tweet, index) => {
            if (index == 0) {
                let latestEntry = [];
                latestEntry.push(<div><em>This is the latest data from Api call number {tweet.count}</em></div>)
                tweet.data.map((data, index2) => {
                    latestEntry.push(<div>{data.text}. </div>)
                })
                streamingDataDisplay.push(<div className="latest-data-div">{latestEntry}</div>)
            }
            else {
                let streamingEntry = [];
                streamingEntry.push(<div><em>This data is from Api call number {tweet.count}</em></div>)
                tweet.data.map((data, index2) => {
                    streamingEntry.push(<span>{data.text}. </span>)
                })
                streamingDataDisplay.push(<div className="stream-data-div">{streamingEntry}</div>)
            }

        })


        return (
            <div><button title="maximize" className="resizeBtn" onClick={() => { this.setState({ displayPort: true }) }} >+</button>
                <button title="minimize" className="resizeBtn" onClick={() => { this.setState({ displayPort: false }) }} >-</button>
                <button title="stop live stream demo" className="resizeBtn" onClick={() => { clearInterval(this.timerID) }} >x</button>
                <div style={style}>
                    <h3 className="portlet-header">Streaming API Portlet
                </h3>

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
