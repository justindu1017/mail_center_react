import React, { Component } from 'react'

export class Grayout extends Component {
    render() {
        return (
            <div
            id="coverer"
            class="position-absolute position-fixed w-100 h-100 pe-none opacity-0"
            onmousedown="closeGrayOut()"
            ></div>
        )
    }
}

export default Grayout
