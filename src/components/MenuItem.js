import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class MenuItem extends Component {
    render(){
        return (
            <div className="menuItem">
                <div style={{ backgroundImage: `url(${this.props.image})` }}></div>
                <h1>{this.props.name}</h1>
                <p>{this.props.price}</p>
                <p>{this.props.read}</p>
            </div>
        )
    }
}