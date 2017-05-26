import React, {Component} from 'react';

export default class Demograph extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div style={{height:window.innerHeight}} className="portlet">
                <h3>Demograph Portlet
                </h3>
            </div>
        )
    }
}