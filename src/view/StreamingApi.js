import React, { Component } from 'react';
import { fetchUser } from "./../actions/treeActions"
import { fetchStreamingData } from "./../actions/streamingActions"
import { connect } from "react-redux"
import store from "./../store"

class StreamingApi extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
        this.state = {
            displayPort: true,
            streamingData: []
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => fetchStreamingData(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentWillReceiveProps(nextProps) {
        let tweets = nextProps.tweets;
        tweets = [...this.state.streamingData, ...tweets]
        this.setState({ streamingData: tweets })
    }

    render() {
        var style;
        style = { display: "none" };

        if (this.state.displayPort) {
            style = { display: "block" };
        }
        let streamingDataDisplay = this.state.streamingData.map((item, index) => {
            // streamingDataDisplay.push(<div key={index}>{item.text}></div>);
            return <div key={index}>{item.text}></div>;
        })
        return (
            <div><button className="resizeBtn" onClick={() => { this.setState({ displayPort: true }) }} >+</button>
                <button className="resizeBtn" onClick={() => { this.setState({ displayPort: false }) }} >-</button>
                <button className="resizeBtn" onClick={() => { clearInterval(this.timerID) }} >x</button>
                <div style={style}>
                    <h3>Streaming API Portlet
                </h3>

                    {streamingDataDisplay}
                </div>



            </div>
        )
    }
}
export default connect(state => (
    //console.info("Inside streaming "+JSON.stringify(state))
    {
        tweets: state.streamReducer.tweets
    }

))(StreamingApi);
