import React, { Component } from 'react';
import { connect } from "react-redux"
class Demograph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPort: true
        }
    }

    render() {
        var style;
        style = { display: "none" };


        if (this.state.displayPort) {
            style = { display: "block" };
        }
        return (
            <div>
                <button className="resizeBtn" onClick={() => { this.setState({ displayPort: true }) }} >+</button>
                <button className="resizeBtn" onClick={() => { this.setState({ displayPort: false }) }} >-</button>
                <div style={style}>
                    <h3>Demograph Portlet</h3>
                    <div>Display Demographic Statistics data</div>
                    <div>Display Demographic Statistics data</div>
                    <div>Display Demographic Statistics data</div>
                    <div>Display Demographic Statistics data</div>
                    <div>Display Demographic Statistics data</div>
                </div>
            </div>
        )
    }
}
export default connect(store => (
    {
    }
))(Demograph);