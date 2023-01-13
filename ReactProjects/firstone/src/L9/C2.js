import React, { Component } from 'react'

export default class C2 extends Component {

    render() {
        return (
            <div>
                <h4>Final bill is -</h4>
                <c3 discount={this.props.discount}></c3>
            </div>
        )
    }
}